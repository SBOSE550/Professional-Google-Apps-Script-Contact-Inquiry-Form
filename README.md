# Professional Google Apps Script Contact & Inquiry Form

This repository contains a customizable, single-page web application built with Google Apps Script and Google Sheets. It provides a modern, responsive contact form that adapts dynamically based on user interest selections, validates inputs in real time, and stores responses in a Google Sheet.

---

## 📝 Project Overview

Businesses often need a lightweight, self-hosted form to capture leads, demo requests, consultations, partnership inquiries, and general questions. This project solves that need by:

- Offering a **clean, black & gold** branded design  
- **Real-time validation** for all fields (text, email, URL, dates, etc.)  
- **Conditional logic**: only fields relevant to the user’s selected interest appear  
- **Google Sheets integration**: responses (including conditional fields) are auto-appended, with header rows generated on first submission  
- **Country→City→CountryCode** dropdowns powered by a lookup sheet  

---

## 📈 Business Problem & Solution

**Problem:** Generic embedded forms (e.g, third-party widgets) often lack advanced customization, conditional logic, or tight data control.  
**Solution:** This Google Apps Script web app delivers:

1. **Custom Branding:** Black background, gold accents, subtle animations  
2. **Dynamic Fields:** Only show follow-up questions based on the user’s interest  
3. **Input Validation:** Regex and business-rule checks (future business days, URL format)  
4. **Live Data Storage:** Direct writes to an existing Sheet, with automatic header management  

---

## ⭐️ Key Features

1. **Base Fields (always visible):**  
   - First/Last Name, Country, City, Country Code, Phone, Email, Company, Company Size, Interest, Message  
   - Country & City dropdowns populate from a `country_details` sheet (with country codes)

2. **Conditional Logic (by Interest):**  
   - **Product Demo:** Future-weekday date picker, time slot dropdown, product interest selection  
   - **Consultation:** Future-weekday date picker, time slots, consultation topic, optional “Current Challenges”  
   - **Partnership Opportunity:** Partnership type, business URL, annual revenue, optional “Current Partnerships”, partnership goals  
   - **General Inquiry:** Inquiry category, urgency level, optional “How did you hear about us?”

3. **Real-Time Validation:**  
   - Required vs optional, character limits, date rules, URL/email/phone formats  
   - Inline success (gold check) and error (red ✖) indicators  

4. **Responsive Design:**  
   - Mobile-first layout using CSS Grid & Flexbox  
   - Dark theme with black & gold accents  

5. **Google Sheets Backend:**  
   - `saveForm()` auto-creates/updates the header row on first submission  
   - Appends new submissions with a timestamp  
   - Zero external servers—runs entirely on Google Apps Script  

---

## 🚀 Live Demo & Video Walkthrough

- **📍 Live Form:** [View and interact with the live form](https://script.google.com/macros/s/AKfycbx1eJEgM-D7W25iM02BzprCY4H2Y2nCq_YIdlIAl3Ccsd5M2SQLTDf1tBPnBaIJct47/exec)
- **📋 Live Sheet:** [View and interact with the live form](https://docs.google.com/spreadsheets/d/113G6Ybe38efYG26yLbGPlOpKzl8aRJTNnWyWgt_rt88/edit?usp=sharing)
- **📺 YouTube Demo:** [Watch the video walkthrough](YOUR_YOUTUBE_VIDEO_URL)  

Try switching interest types and see your responses populate in the linked Google Sheet in real time.

---

## 🛠️ Installation & Deployment

1. **Clone** this repo into a new Google Apps Script project.  
2. Create two files: `Code.gs` and `index.html`, plus any partials.  
3. Update **Code.gs** with your **SHEET_ID**, `RESPONSES_SHEET`, and `LOOKUP_SHEET` names.  
4. **Deploy** as a Web App (Publish → Deploy as web app), granting **Anyone** access.  
5. Share the URL with users or embed it in your site.

---

## 🤝 Contributing

Feel free to submit pull requests for new conditional blocks, styling tweaks, or additional validation rules. Open an issue if you run into any problems or have feature requests!

---

