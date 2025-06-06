# TestCafe Automation Project – OhioHealth Find a Doctor Page

This project is an automated test suite using **TestCafe** for validating key UI elements and functionality on the OhioHealth **Find a Doctor** web page.

---

## 🧪 Test Scenarios Covered

1. ✅ Verify breadcrumb is visible.
2. ✅ Verify the main heading is hidden (has CSS class `hide`).
3. ✅ Verify the MyChart login banner is visible.
4. ✅ Verify the MyChart login button exists.
5. ✅ Verify the Commonly Searched section is displayed.
6. ✅ Enter `Shane D Smith` in the “I am looking” field and verify that:
   - Shane D Smith is listed
   - His specialty is "Radiology"

---

## 📁 Project Structure

```
testcafe-healthcare/
├── page-models/
│   └── findADoctorPage.js         # Page Object for Find a Doctor page
├── tests/
│   └── findADoctorPage.test.js    # Test cases
├── test-config.js                 # URL configuration
├── package.json                   # TestCafe config and scripts
└── README.md                      # Project instructions
```

---

## 🚀 How to Run

### 1. 📦 Install Dependencies

```bash
npm install
```

### 2. ▶️ Run Tests in Chrome

```bash
npm test
```

Or manually with:

```bash
npx testcafe chrome tests/*.test.js
```

---

## 🛠️ Special Configuration

This project includes:

- ✅ `about:blank` landing to avoid browser geolocation prompts.
- ✅ `setNativeDialogHandler` to auto-deny geolocation requests.
- ✅ Navigation using `ClientFunction` to avoid early dialog issues.
- ✅ Centralized URL config in `test-config.js`.

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- Chrome or another TestCafe-compatible browser
- Internet access (to run tests against `https://www.ohiohealth.com`)

---

## 🧹 Notes

- The real site uses dynamic rendering and may update often. Ensure selectors are stable.
- For CI/CD or headless execution, use: `npx testcafe chrome:headless tests/*.test.js`

---

## 📄 License

This project is intended for educational and QA demonstration purposes.
