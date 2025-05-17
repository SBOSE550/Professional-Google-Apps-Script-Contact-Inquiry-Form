/**
 * File: Code.gs
 * Description: Backend that serves the form, fetches country→city data,
 *              auto-expands headers when needed, and appends submissions.
 */

const SHEET_ID        = 'Enter_your_Sheet_ID';
const RESPONSES_SHEET = 'FormResponses';
const LOOKUP_SHEET    = 'country_details';

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Contact & Inquiry')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getCountryData() {
  const ss   = SpreadsheetApp.openById(SHEET_ID);
  const sh   = ss.getSheetByName(LOOKUP_SHEET);
  const rows = sh.getDataRange().getValues();
  const data = {};
  rows.slice(1).forEach(r => {
    const [country, city, code] = r;
    if (!data[country]) data[country] = { cities: [], code };
    data[country].cities.push(city);
  });
  return data;
}

function saveForm(formData) {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(RESPONSES_SHEET);
  const lock  = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    // 1) Read existing headers
    const lastCol = sheet.getLastColumn();
    let headers  = lastCol
      ? sheet.getRange(1,1,1,lastCol).getValues()[0]
      : [];

    // 2) First submission? write full header row
    if (!headers.length || headers[0] !== 'Timestamp') {
      headers = ['Timestamp', ...Object.keys(formData)];
      sheet.getRange(1,1,1,headers.length).setValues([headers]);
    }

    // 3) Append any new fields to the header row
    const keys    = Object.keys(formData);
    const missing = keys.filter(k => headers.indexOf(k) < 0);
    if (missing.length) {
      sheet.getRange(1, headers.length+1, 1, missing.length)
           .setValues([missing]);
      headers = headers.concat(missing);
    }

    // 4) Build and append the row
    const newRow = headers.map(h => 
      h === 'Timestamp' 
        ? new Date() 
        : (formData[h] !== undefined ? formData[h] : '')
    );
    sheet.appendRow(newRow);

    return { status: 'success' };
  } catch (e) {
    return { status: 'error', message: e.message };
  } finally {
    lock.releaseLock();
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
