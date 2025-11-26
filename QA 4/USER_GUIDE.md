# QA Control Panel – User Guide

**Version:** 2.1  
**Last Updated:** November 17, 2025

---

## Quick Start

### Opening the Application
1. Open `index.html` in your web browser
2. The application loads automatically with your saved data (if any)
3. You should see the Overview page by default

### First-Time Setup
When you first open the application:
- Click on **Overview** section (already selected)
- Fill in your project details:
  - Project Name
  - Client/Company
  - Environment (defaults to "Staging")
  - Build/Version number
  - Test Date
  - Browsers/Devices used
- Add an Executive Summary in Arabic (optional but recommended)

---

## Navigation

The **Sidebar** on the left contains 4 main sections:

### 1. 📊 نظرة عامة (Overview)
- **Purpose:** Project metadata and QA methodology reference
- **What You Do Here:**
  - Enter project information
  - Review QA STLC, testing types, and professional mindset
  - Check preview of executive summary
  - Generate reports

### 2. ✅ Checklists
- **Purpose:** Mark what you've tested and track coverage
- **What You Do Here:**
  - Select a testing area (Website, Admin, Mobile, etc.)
  - Check items you've actually tested
  - Add new custom checklist items
  - View coverage progress

### 3. 🐞 Bugs & Template
- **Purpose:** Record issues found and reference bug guidelines
- **What You Do Here:**
  - View bug report template and best practices
  - Add bugs you've found
  - Edit or delete bug records
  - Reference severity/priority guidelines

### 4. 📄 Report Settings
- **Purpose:** Prepare final report data
- **What You Do Here:**
  - Review/update all project metadata
  - Write English executive summary (optional)
  - Generate and save PDF report

---

## Using Each Section

### Overview Section

#### View QA Methodology
Three cards display below the project fields:

1. **STLC – دورة حياة اختبار البرمجيات**
   - 5-phase testing lifecycle
   - Reference for planning and execution

2. **أنواع الاختبارات الأساسية**
   - Different testing approaches
   - When to use each type

3. **عقلية الـ QA المحترف**
   - Best practices and mindset
   - Professional testing principles

#### Generate Report
Click **"Generate EN Report"** button to:
1. Open a new browser window with your report
2. Shows all project data, test coverage, bugs found
3. Includes detailed Arabic testing tables
4. Use browser's Print function (Ctrl+P) to save as PDF

---

### Checklists Section

#### Step 1: Select a Category
Click one of the pill-shaped tabs at the top:
- 🌐 **Website** - Frontend user-facing pages
- 🖥 **Platform / Admin** - Backend control panels
- 🛒 **E-Commerce** - Shopping cart and checkout
- 📱 **Mobile App** - Native or web app testing
- 🔗 **API** - Backend service endpoints
- ⚡ **Performance** - Speed, load times, resources

#### Step 2: Check Items You've Tested
- Click the checkbox for each item you've tested
- Item turns green when checked
- Progress updates automatically in the right panel

#### Step 3: Add Custom Items (Optional)
Click **"➕ New Item"** button to:
1. Enter the item title
2. Enter the item description
3. Click OK to add

**Example:**
- Title: "Database performance under 1000 concurrent users"
- Description: "Load test with Apache JMeter"

#### Step 4: Manage Items
- **Edit (✎):** Click edit icon to change title or description
- **Delete (✕):** Click delete icon to remove item
- Confirm deletion when prompted

#### View Coverage Summary
The right panel shows:
- Progress bar with percentage
- Completed count
- Coverage chips showing tested areas
- Quick summary text

---

### Bugs & Template Section

#### Understanding the Framework

**Left Column - Reference Materials:**
1. **Standard Bug Template** - Fields every bug should have
2. **Severity vs Priority Matrix** - How to classify bugs
3. **Bug Life Cycle** - Status stages for bugs
4. **Bug Report Checklist** - Pre-submission verification

**Right Column - Bug Recording:**

#### Add a Bug
1. Fill in the bug form:
   - **Area / Screen:** Where you found it (e.g., "Website – Login page")
   - **Severity:** Critical / Major / Minor
   - **Priority:** P1 / P2 / P3
   - **Status:** Open / In Progress / Closed
   - **Short Title:** Brief one-liner describing the issue
   - **Notes / Suggested fix:** Optional developer guidance

2. Click **"➕ Add Bug"** button

3. Bug appears in the table below with an auto-generated ID

#### Edit a Bug
1. Click **"Edit"** button in the bugs table
2. Update each field in prompts
3. Click OK to save each change

#### Delete a Bug
1. Click **"✕"** button
2. Confirm deletion

#### Severity & Priority Guidelines
Consult the **Severity → Priority Matrix** card:
- **Blocker (P0):** System completely broken
- **Critical (P1):** Major feature unusable
- **Major (P2):** Feature partially broken
- **Minor (P3):** Visual/cosmetic issues

---

### Report Settings Section

#### Review Project Data
All fields here should match what you entered in Overview:
- Project / Product Name
- Client / Company
- Environment
- Build / Version
- Test Date
- Browsers / Devices

**Note:** These fields automatically sync with Overview section.

#### Executive Summary (English)
Write a brief English summary of your testing:

**Example:**
> Main user journeys for the Hayah Calm Platform were validated on Staging environment. Focus was on core booking functionality, user authentication, and mobile responsiveness. Approximately 75% of QA checklists were executed. No blocking issues were found, but several performance and UX improvements are recommended.

If left blank, a generic summary is auto-generated.

#### Generate Report
Click **"Generate EN Report"** to:
1. Create a professional PDF report
2. Open in new browser window
3. Review quality and layout
4. Use browser Print dialog to save as PDF

**Report Contents:**
- Executive Summary with coverage badge
- Test Meta table
- Detailed Arabic testing tables (Website, Admin, Mobile)
- Issues & Bugs Summary
- Bug Reporting Framework reference

---

## Best Practices

### Organization
✅ Use meaningful checklist item descriptions  
✅ Keep bug titles short but descriptive  
✅ Update bug status as issues progress  
✅ Fill all meta fields for professional reports  

### Testing Documentation
✅ Check items immediately after testing  
✅ Record bugs the same day they're found  
✅ Use consistent terminology in bug reports  
✅ Link bugs to specific areas/screens  

### Reporting
✅ Generate reports at the end of each test cycle  
✅ Keep executive summary concise (3-5 sentences)  
✅ Always specify environment and build version  
✅ Include testing dates for audit trail  

### Data Backup
✅ Periodically save the .html file  
✅ Export data by checking browser DevTools:
```javascript
localStorage.getItem('qa_report_v2_state')
```
✅ Save console output to a text file if you need backup

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Generate Report | Ctrl+P (from report window) |
| Dark Mode | Click 🌓 icon in top right |
| Save Data | Auto-saves on every change |
| Open DevTools | F12 |

---

## Troubleshooting

### Issue: My data disappeared after refresh
**Solution:** 
- Check if browser's private/incognito mode is on (disables localStorage)
- Try accessing the file from normal browsing mode
- Check localStorage in browser DevTools (F12 → Application → Storage)

### Issue: Fields aren't syncing between sections
**Solution:**
- Refresh the page (Ctrl+R)
- The `applyMetaToFields()` function auto-populates on page load
- Edit one field and it will trigger sync

### Issue: Report looks strange when printed
**Solution:**
- Try using "Save as PDF" instead of printing to paper
- Use Chrome or Edge for best print results
- Make sure "Background graphics" option is checked in print settings

### Issue: Can't add checklist items
**Solution:**
- First, select a category (Website, Admin, etc.) by clicking a pill tab
- Then click the "➕ New Item" button
- Category must be selected before adding items

### Issue: Dark mode isn't working
**Solution:**
- Click the 🌓 icon in the top right
- Verify "theme-dark" class appears on `<body>` tag (F12 → Inspector)
- Clear cache and refresh page

---

## Exporting Your Work

### Save as HTML File
1. Right-click on the page → Save as...
2. Choose location and filename
3. Format: HTML Document (.html)
4. Your data is embedded in localStorage when you reopen

### Export State as JSON
1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `copy(JSON.stringify(state))`
4. Paste into a text editor and save as `.json`

### Generate PDF Report
1. Click "Generate EN Report"
2. In the new window, press Ctrl+P
3. Choose "Save as PDF"
4. Select location and save

---

## Tips & Tricks

### Tip 1: Reusing Checklists
- Predefined items in each category are templates
- Customize them to match your project
- Add new items that are specific to your platform

### Tip 2: Coverage Tracking
- The progress bar updates in real-time
- Coverage chips show which areas you've tested
- Use this to identify testing gaps

### Tip 3: Bug Severity Classification
- Use the Severity → Priority Matrix as reference
- Severity = technical impact
- Priority = business importance

### Tip 4: Professional Reports
- Always fill in Executive Summary
- Use the Arabic detailed tables as reference material
- Include bug count and severity breakdown
- Reference security and performance testing

### Tip 5: Collaborative Testing
- Export your state as JSON for sharing
- Teammates can import by pasting into DevTools console
- Merge findings from multiple testers

---

## Browser Requirements

✅ **Chrome** 60+  
✅ **Firefox** 55+  
✅ **Edge** 79+  
✅ **Safari** 12+  
✅ **Mobile Browsers** (iOS Safari, Chrome Mobile)  

**Required Features:**
- localStorage API
- Modern CSS Grid and Flexbox
- ES6 JavaScript support

---

## Privacy & Data

### Your Data
- Stored only in your browser's localStorage
- Not sent to any server
- Not tracked or analyzed externally
- Remains private on your computer

### File Size
- HTML file: ~300KB
- localStorage per session: ~2MB max (for typical use)

### Clearing Data
To clear all stored data:
1. Open browser DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find and delete `qa_report_v2_state` entry
4. Refresh page

---

## Getting Help

### Check These Resources
1. **This User Guide** - FAQ and troubleshooting
2. **Technical Documentation** - For developers
3. **CHANGES_SUMMARY.md** - What's new in this version
4. **Browser DevTools** - Inspect HTML, check localStorage, view console errors

### Common Questions

**Q: How do I backup my data?**  
A: The file automatically saves to localStorage. Export as JSON for permanent backup.

**Q: Can I add my own checklist items?**  
A: Yes! Click "➕ New Item" after selecting a category.

**Q: What if I make a mistake in a bug report?**  
A: Click "Edit" next to the bug to update it.

**Q: Can multiple people use the same file?**  
A: Yes, but export/import their state to combine findings.

**Q: Why is my report not showing all bugs?**  
A: Only bugs recorded in the "Bugs & Template" section appear in the final report.

---

## Version History

### v2.1 (Current - Nov 17, 2025)
✅ Guides section integrated into Overview  
✅ Dynamic checklist item management (add/edit/delete)  
✅ Meta fields synchronization between sections  
✅ Removed "Executed Scenarios" from printed report  
✅ Improved coverage badge in report header  
✅ New technical documentation

### v2.0
- Major redesign with modern UI
- Arabic support throughout
- Theme toggle (light/dark mode)
- Professional report generation

### v1.0
- Initial QA checklist application

---

**Support Contact:** For issues, check Technical Documentation or browser console for error messages.

**Made with ❤️ for QA Professionals**

