# Diet SaaS - Developer Guide

هذا المشروع نسخة Frontend فقط، تعمل على LocalStorage، جاهزة للترقية لاحقًا لنسخة SaaS حقيقية.

## Structure

- `index.html` : هيكل الصفحة (Dashboard + Plan + Modals + Sidebar)
- `style.css` : الثيم (Light/Dark) + Grid + Components
- `app.js` : المنطق الكامل (profiles, weeks, monthly follow-ups, wizard, export/import)

## Data Model

1. **Profiles**
   - مخزنة في LocalStorage تحت المفتاح: `diet-profiles`
   - كل عنصر: `{ id, name, ... }`
   - البروفايل النشط: `diet-active-profile`

2. **Namespacing**
   - أي بيانات خاصة ببروفايل نخزنها باسم:  
     `PROFILE_ID::key`
   - مثال: `profile-1::week-1-day-0-فطور`

3. **Weeks**
   - الأسابيع الأساسية داخل `app.js` في الثابت `FULL_WEEKS`
   - كل أسبوع: `{ id, month, title, meta, variants: {فطور:[],...}, note }`

4. **Monthly tracking**
   - `PROFILE_ID::monthly-month1-weight`
   - `PROFILE_ID::monthly-month1-waist`
   - `PROFILE_ID::monthly-month1-note`

## Main Functions

- `renderPlanPage()` : يبني صفحة الخطة (المتابعة + الأسابيع)
- `renderWeeks(weeks)` : يبني كل الأسابيع من المصفوفة
- `renderWeek(week)` : يبني Week واحد مع الملخص + جدول الأيام
- `buildWeekContent(weekId, variants)` : يبني الجدول + drag&drop + select
- `saveEditorVariants(...)` : يحفظ تنويعات الأسبوع
- `copyDayMeals(...)` : نسخ يوم ليوم
- `printWeek(...)` / `printMonthReport(...)` : طباعة
- `exportData()` / `importData()` : أخذ نسخة أو استرجاع

## Theming

- الثيم يضاف على `<html>` كـ `class="dark"`
- القيمة مخزنة في LocalStorage: `diet-theme`

## To Extend

1. **إضافة حقل جديد للبروفايل**:
   - عدّل array في `createNewProfile()`
   - خزّنه بنفس الـnamespace

2. **إضافة مصادر وجبات جديدة**:
   - عدّل `FULL_WEEKS` أو احفظ في `custom-variants-week-{id}`

3. **إضافة صفحة جديدة**:
   - أضف `<section ...>` في `index.html`
   - أضف زر في الـsidebar يحمل `data-page="id"`
   - استعمل `showPage(id)`

## Preparing for Backend / SaaS

حالياً التخزين محلي. عند التحويل لـBackend:
1. استبدل `localStorage.getItem(...)` بنداء API `GET /profiles`
2. استبدل `localStorage.setItem(...)` بنداء API `POST/PUT /profiles/:id`
3. اجعل الـnamespace (PROFILE_ID::key) يتحول إلى حقل داخل JSON اسمه `data` مثلاً.
4. أنشئ طبقة صغيرة في `app.js` اسمها `storage` فيها:
   - `storage.get(key)`
   - `storage.set(key, value)`
   - لاحقاً غيّر هذه الطبقة لتضرب Backend بدون ما تغيّر بقية الأكواد.

## Suggested API (لاحقاً)

- `POST /auth/login`
- `GET /profiles` → يعيد بروفايلات المستخدم
- `POST /profiles` → إنشاء بروفايل
- `GET /profiles/:id/weeks` → يعيد الأسابيع
- `PUT /profiles/:id/weeks/:weekId` → حفظ الوجبات
- `GET /profiles/:id/monthly` → القياسات
- `PUT /profiles/:id/monthly/:month` → حفظ القياسات

هكذا يكون المشروع جاهز ليتحوّل لـ SaaS بدون إعادة كتابة الواجهة.
