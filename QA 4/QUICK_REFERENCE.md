# QA Control Panel – Quick Reference Card

## 🚀 Getting Started in 30 Seconds

1. **Open** `index.html` in browser
2. **Fill** project details in Overview section
3. **Check** items you tested in Checklists section
4. **Record** bugs in Bugs section  
5. **Generate** report with one click

---

## 📌 Navigation Shortcuts

| Section | Purpose | Quick Link |
|---------|---------|-----------|
| 📊 Overview | Project info & QA guides | Set up project here |
| ✅ Checklists | Mark tested items | Select category → check items |
| 🐞 Bugs | Record issues found | Add bugs → generate report |
| 📄 Report | Settings & generate PDF | Configure → Generate EN Report |

---

## 🎯 Common Tasks

### Add a New Checklist Item
```
1. Click a category tab (Website, Admin, Mobile, etc.)
2. Click "➕ New Item" button
3. Enter title → Enter description → Save
```

### Edit an Existing Item
```
1. Find item in checklist
2. Click "✎" edit icon
3. Update title/description
```

### Delete an Item
```
1. Find item in checklist
2. Click "✕" delete icon
3. Confirm deletion
```

### Add a Bug Report
```
1. Go to "Bugs & Template" section
2. Fill form: Area, Severity, Priority, Title
3. Click "➕ Add Bug"
```

### Generate Report
```
1. Go to "Report Settings"
2. Click "Generate EN Report"
3. Print dialog opens → Save as PDF
```

---

## 📊 Checklist Categories

| Icon | Category | Focus |
|------|----------|-------|
| 🌐 | Website | Frontend, UI/UX |
| 🖥 | Platform | Admin, Dashboard |
| 🛒 | E-Commerce | Cart, Checkout |
| 📱 | Mobile | App, Responsive |
| 🔗 | API | Services, Endpoints |
| ⚡ | Performance | Speed, Load |

---

## 🔴 Severity Guide

| Level | Impact | Priority |
|-------|--------|----------|
| 🔴 Blocker | System unusable | P0 - Immediate |
| 🔴 Critical | Major feature broken | P1 - ASAP |
| 🟡 Major | Feature partially broken | P2 - Soon |
| 🟢 Minor | Cosmetic/UX only | P3 - Later |

---

## 💾 Data Management

**Auto-Save:** Changes save automatically to browser localStorage  
**Backup:** Export JSON from DevTools console  
**Clear:** Remove `qa_report_v2_state` from localStorage  
**Share:** Copy/paste exported JSON to others  

### Export Data (JSON):
```javascript
// In browser console (F12):
copy(JSON.stringify(state))
```

### Check Storage:
```javascript
// In browser console:
localStorage.getItem('qa_report_v2_state')
```

---

## 🎨 UI Tips

- **Light/Dark Mode:** Click 🌓 icon (top right)
- **Progress Bar:** Real-time coverage percentage
- **Coverage Chips:** Shows tested areas
- **Badge:** Coverage indicator in report

---

## 📝 Report Sections

```
1. Executive Summary (with coverage badge)
2. Test Meta (Project, Client, Env, Build, Date)
3. جداول فحص (Arabic detailed test tables)
4. Issues & Bugs Summary (if bugs exist)
5. Bug Reporting Framework (Reference)
```

---

## ⚠️ Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Data missing | Check if incognito/private mode |
| Fields not syncing | Refresh page (Ctrl+R) |
| Can't add items | Select category first |
| Report looks odd | Use Chrome, try print to PDF |
| Dark mode broken | Clear cache & refresh |

---

## 📱 Mobile Usage

✅ Works on mobile/tablet  
✅ Touch-friendly buttons  
✅ Responsive layout  
✅ Full functionality  

**Best on:** iPad, modern Android tablets  
**Limited on:** Phone (small screen but functional)

---

## 🔐 Privacy & Security

- Data stays in YOUR browser only
- No uploads to servers
- No tracking or analytics
- All HTML/JS is client-side
- localStorage is browser-local storage

---

## 📚 Where to Find Help

| Need Help With | Go To |
|----------------|-------|
| Usage & Workflow | USER_GUIDE.md |
| Technical Details | TECHNICAL_DOCUMENTATION.md |
| All Changes Made | CHANGES_SUMMARY.md |
| Implementation List | IMPLEMENTATION_CHECKLIST.md |
| Code Functions | Press F12 → Sources tab |

---

## 🎓 Best Practices (TL;DR)

1. ✅ Fill project info at start
2. ✅ Check items after testing
3. ✅ Record bugs immediately
4. ✅ Use consistent terminology
5. ✅ Generate report before closing
6. ✅ Save HTML/PDF backup
7. ✅ Update bug status regularly

---

## 🔗 Keyboard Shortcuts

| Action | Keys |
|--------|------|
| Save (auto) | Always active |
| Dark Mode | Click 🌓 |
| Print Report | Ctrl+P (in report window) |
| Dev Tools | F12 |
| Refresh Page | Ctrl+R |

---

## 💡 Pro Tips

1. **Template Your Checklists:** Add custom items matching your project needs
2. **Use Meaningful Titles:** Help future reference and reporting
3. **Link Bugs to Areas:** Makes triage easier for developers
4. **Review Framework:** Read bug template before writing reports
5. **Keep Summaries Brief:** 3-5 sentences for executive summary
6. **Export Weekly:** Keep backup of state as JSON

---

## 📞 Version Info

**Version:** 2.1  
**Last Update:** November 17, 2025  
**Compatibility:** Chrome, Firefox, Edge, Safari (modern versions)  
**Storage:** Browser localStorage (~2-3MB typical use)

---

## ✨ What's New in v2.1

✨ Guides integrated into Overview  
✨ Add/Edit/Delete checklist items  
✨ Fixed meta field sync  
✨ Cleaner reports (no scenarios section)  
✨ Better documentation  

---

**Made for QA Professionals | Quick, Easy, Professional QA Reporting**

