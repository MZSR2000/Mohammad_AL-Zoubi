// =====================
// 1) البيانات الأساسية
// =====================
const FULL_WEEKS = [
  // الشهر 1
  {
    id: 1,
    month: 1,
    title: "الأسبوع 1",
    meta: "تنظيف + تقليل ملح + ماء",
    variants: {
      "فطور": ["بيضة مسلوقة + خبز أسمر + خضار", "جبنة لايت + خضار", "زبادي + شوفان + فاكهة"],
      "غداء": ["دجاج مشوي/مسلوق + سلطة", "خضار مطبوخة + دجاج", "سمك مشوي مرة واحدة"],
      "عشاء": ["شوربة خضار", "زبادي + خيار", "أومليت خفيف"],
      "سناك": ["10 حبات لوز", "تفاحة", "خيار وجزر", "شاي أخضر"]
    },
    note: "تجنّب الفول والحمص هذا الأسبوع."
  },
  {
    id: 2,
    month: 1,
    title: "الأسبوع 2",
    meta: "بروتين خفيف + سمك مرة",
    variants: {
      "فطور": ["لبنة لايت + زيت زيتون قليل + خبز أسمر", "بيضتين مسلوقتين + خضار"],
      "غداء": ["سمك مشوي + سلطة", "تونة مصفاة + خضار", "دجاج مع خضار"],
      "عشاء": ["بيض أومليت بزيت خفيف + سلطة", "زبادي + خيار"],
      "سناك": ["فاكهة واحدة", "شاي أخضر", "مكسرات"]
    },
    note: "يُفضّل يوم واحد سمك."
  },
  {
    id: 3,
    month: 1,
    title: "الأسبوع 3",
    meta: "تقليل نشويات + خضار",
    variants: {
      "فطور": ["بيض + خضار + شريحة خبز واحدة", "زبادي + خيار + توست أسمر"],
      "غداء": ["بامية/فاصوليا خضراء + صدر دجاج + سلطة", "خضار مشكّلة + دجاج"],
      "عشاء": ["زبادي + شوفان ملعقة + خيار", "شوربة خفيفة"],
      "سناك": ["مكسرات 10 حبات", "تفاحة", "شاي أخضر"]
    },
    note: "اشرب 3 لتر ماء."
  },
  {
    id: 4,
    month: 1,
    title: "الأسبوع 4",
    meta: "تثبيت + خفة للقولون",
    variants: {
      "فطور": ["زبادي + عسل قليل + شوفان + فواكه", "لبنة لايت + خضار"],
      "غداء": ["دجاج مشوي + خضار بالفرن + سلطة", "دجاج + رز 1/3 كوب"],
      "عشاء": ["شوربة خضار + خبز صغير", "زبادي + خيار"],
      "سناك": ["خيار", "جزر", "شاي أخضر"]
    },
    note: "نهاية الشهر الأول: اكتب الوزن."
  },
  // الشهر 2
  {
    id: 5,
    month: 2,
    title: "الأسبوع 5",
    meta: "تنويع بروتين + حمص مرة",
    variants: {
      "فطور": ["حمص قليل + خبز أسمر + خضار", "جبنة لايت", "بيض + خضار"],
      "غداء": ["دجاج بالخضار + رز 1/3 كوب", "سمك مشوي + سلطة"],
      "عشاء": ["بيض مسلوق + سلطة زبادي", "شوربة خفيفة"],
      "سناك": ["مكسرات", "فاكهة"]
    },
    note: "راقب القولون لو انزعج من الحمص."
  },
  {
    id: 6,
    month: 2,
    title: "الأسبوع 6",
    meta: "سمك + شوربات",
    variants: {
      "فطور": ["لبنة لايت + خبز أسمر + خيار", "بيض + خضار"],
      "غداء": ["سمك مشوي + سلطة + شوربة خضار", "تونة مصفاة"],
      "عشاء": ["شوربة عدس خفيفة + خبز أسمر صغير"],
      "سناك": ["تفاحة أو كمثرى", "شاي أخضر"]
    },
    note: "السمك مشوي أفضل."
  },
  {
    id: 7,
    month: 2,
    title: "الأسبوع 7",
    meta: "خضار مطبوخة + تقليل بقوليات",
    variants: {
      "فطور": ["بيض + شريحة خبز + خضار", "زبادي + خيار"],
      "غداء": ["بامية/ملوخية + دجاج + سلطة"],
      "عشاء": ["زبادي + شوفان + خيار"],
      "سناك": ["لوز", "شاي أخضر"]
    },
    note: "أسبوع خفيف على القولون."
  },
  {
    id: 8,
    month: 2,
    title: "الأسبوع 8",
    meta: "تثبيت + رفع ماء",
    variants: {
      "فطور": ["زبادي + عسل + شوفان", "جبنة لايت + خضار"],
      "غداء": ["دجاج مشوي + سلطة + خبز أسمر"],
      "عشاء": ["شوربة خضار"],
      "سناك": ["خضار", "فاكهة"]
    },
    note: "نهاية الشهر الثاني: سجل الوزن."
  },
  // الشهر 3
  {
    id: 9,
    month: 3,
    title: "الأسبوع 9",
    meta: "إعادة ضبط النشويات + مشي أطول",
    variants: {
      "فطور": ["بيضة + جبنة لايت + خبز أسمر", "زبادي + فواكه"],
      "غداء": ["خضار مشكلة + صدر دجاج + سلطة"],
      "عشاء": ["لبن + خيار + فاكهة"],
      "سناك": ["مكسرات", "شاي أخضر"]
    },
    note: "امشِ 25–30 دقيقة."
  },
  {
    id: 10,
    month: 3,
    title: "الأسبوع 10",
    meta: "سمك + ألياف للقولون",
    variants: {
      "فطور": ["شوفان بالحليب لايت + نصف موزة", "زبادي + بذور"],
      "غداء": ["سمك مشوي + سلطة + رز 1/3 كوب"],
      "عشاء": ["شوربة عدس خفيفة"],
      "سناك": ["تفاح", "كمثرى"]
    },
    note: "الألياف ممتازة للقولون."
  },
  {
    id: 11,
    month: 3,
    title: "الأسبوع 11",
    meta: "تقليل بروتين حيواني",
    variants: {
      "فطور": ["لبنة + خضار + خبز أسمر", "بيض + سلطة"],
      "غداء": ["خضار بالفرن + بطاطا صغيرة + دجاج قليل"],
      "عشاء": ["زبادي + فواكه"],
      "سناك": ["مكسرات 10 حبات"]
    },
    note: "أسبوع مخفّض لليوريك أسيد."
  },
  {
    id: 12,
    month: 3,
    title: "الأسبوع 12",
    meta: "تثبيت + تنظيم نوم",
    variants: {
      "فطور": ["زبادي + شوفان + عسل"],
      "غداء": ["دجاج مشوي + سلطة + شوربة"],
      "عشاء": ["شوربة + خبز صغير"],
      "سناك": ["خيار", "جزر"]
    },
    note: "نهاية الشهر الثالث: قيّس الوزن."
  },
  // الشهر 4
  {
    id: 13,
    month: 4,
    title: "الأسبوع 13",
    meta: "رجوع للانضباط",
    variants: {
      "فطور": ["بيض + خبز + خضار"],
      "غداء": ["دجاج مسلوق + رز خفيف + سلطة"],
      "عشاء": ["زبادي + خيار + فاكهة"],
      "سناك": ["شاي أخضر", "مكسرات"]
    },
    note: "زد التمرين لـ 30 دقيقة."
  },
  {
    id: 14,
    month: 4,
    title: "الأسبوع 14",
    meta: "سمك + ورقيات",
    variants: {
      "فطور": ["لبنة لايت + خبز + زيت زيتون", "بيض"],
      "غداء": ["سمك مشوي + سلطة جرجير وخس + شوربة"],
      "عشاء": ["بيض أومليت بالخضار"],
      "سناك": ["تفاحة"]
    },
    note: "الجرجير مفيد للدورة الدموية."
  },
  {
    id: 15,
    month: 4,
    title: "الأسبوع 15",
    meta: "تقليل نفخة القولون",
    variants: {
      "فطور": ["زبادي + نعنع + خيار"],
      "غداء": ["خضار مطبوخة خفيفة + دجاج + سلطة بدون بصل"],
      "عشاء": ["شوربة شوفان خفيفة"],
      "سناك": ["يانسون", "نعنع"]
    },
    note: "أسبوع لراحة البطن."
  },
  {
    id: 16,
    month: 4,
    title: "الأسبوع 16",
    meta: "تثبيت + ماء",
    variants: {
      "فطور": ["شوفان + حليب لايت + عسل"],
      "غداء": ["دجاج مشوي + خضار بالفرن"],
      "عشاء": ["زبادي + فواكه"],
      "سناك": ["خيار", "جزر"]
    },
    note: "نهاية الشهر الرابع: اكتب الوزن."
  },
  // الشهر 5
  {
    id: 17,
    month: 5,
    title: "الأسبوع 17",
    meta: "إعادة نشاط + حركة أكثر",
    variants: {
      "فطور": ["بيض + خبز + خضار"],
      "غداء": ["دجاج مسلوق + تبولة خفيفة + شوربة"],
      "عشاء": ["زبادي + خيار"],
      "سناك": ["مكسرات", "فاكهة"]
    },
    note: "أضف صعود درج 5–7 دقائق."
  },
  {
    id: 18,
    month: 5,
    title: "الأسبوع 18",
    meta: "سمك + مضاد التهاب",
    variants: {
      "فطور": ["لبنة لايت + زعتر + خبز أسمر"],
      "غداء": ["سمك مشوي + سلطة + رز خفيف"],
      "عشاء": ["شوربة خضار + خبز صغير"],
      "سناك": ["تفاحة", "جزر"]
    },
    note: "السمك يقلل الالتهاب والنقرس."
  },
  {
    id: 19,
    month: 5,
    title: "الأسبوع 19",
    meta: "خضار + تقليل ملح",
    variants: {
      "فطور": ["زبادي + شوفان + فواكه"],
      "غداء": ["خضار مطبوخة + دجاج + سلطة"],
      "عشاء": ["بيضتين + سلطة"],
      "سناك": ["شاي أخضر", "مكسرات"]
    },
    note: "قلل الملح هذا الأسبوع."
  },
  {
    id: 20,
    month: 5,
    title: "الأسبوع 20",
    meta: "تثبيت + نوم جيد",
    variants: {
      "فطور": ["لبنة لايت + خبز + خضار"],
      "غداء": ["دجاج مشوي + خضار + سلطة"],
      "عشاء": ["شوربة + فاكهة"],
      "سناك": ["خيار", "جزر"]
    },
    note: "نهاية الشهر الخامس: قارن وزنك."
  },
  // الشهر 6
  {
    id: 21,
    month: 6,
    title: "الأسبوع 21",
    meta: "انضباط نهائي + ماء 3 لتر",
    variants: {
      "فطور": ["بيض + خبز + خضار"],
      "غداء": ["دجاج مسلوق + سلطة + شوربة"],
      "عشاء": ["زبادي + خيار"],
      "سناك": ["مكسرات", "فاكهة"]
    },
    note: "ارجع لـ 3 لتر ماء."
  },
  {
    id: 22,
    month: 6,
    title: "الأسبوع 22",
    meta: "سمك + تقليل خبز",
    variants: {
      "فطور": ["زبادي + شوفان + فواكه"],
      "غداء": ["سمك مشوي + سلطة + رز خفيف"],
      "عشاء": ["شوربة خضار"],
      "سناك": ["تفاحة"]
    },
    note: "قلل الخبز هذا الأسبوع."
  },
  {
    id: 23,
    month: 6,
    title: "الأسبوع 23",
    meta: "قولون + انتفاخ صفر",
    variants: {
      "فطور": ["زبادي + نعنع + خيار"],
      "غداء": ["خضار مطبوخة خفيفة + دجاج + سلطة بدون بصل"],
      "عشاء": ["شوربة عدس خفيفة"],
      "سناك": ["يانسون", "نعنع"]
    },
    note: "أسبوع راحة للمعدة."
  },
  {
    id: 24,
    month: 6,
    title: "الأسبوع 24",
    meta: "تثبيت نهائي + تقييم",
    variants: {
      "فطور": ["لبنة لايت + خبز أسمر + زيت زيتون قليل"],
      "غداء": ["دجاج مشوي + خضار + سلطة"],
      "عشاء": ["شوربة + فاكهة"],
      "سناك": ["خضار", "شاي أخضر"]
    },
    note: "نهاية 6 شهور – سجّل الوزن، قارن، وابدأ الصيانة."
  }
];

let currentMaxMonth = 6;
let nextWeekId = 25;
let activeProfileId = null;

// =====================
// 2) أدوات مساعدة
// =====================
function getProfiles() {
  const raw = localStorage.getItem("diet-profiles");
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveProfiles(list) {
  localStorage.setItem("diet-profiles", JSON.stringify(list));
}

function getProfileById(id) {
  return getProfiles().find((p) => p.id === id);
}

function setActiveProfile(id) {
  activeProfileId = id;
  localStorage.setItem("diet-active-profile", id);
  const p = getProfileById(id);
  document.getElementById("active-profile-label").textContent =
    "الملف: " + (p ? p.name : "غير معروف");
  renderProfilesUI();
  renderPlanPage();
  updateDashboard();
}

function profileKey(key) {
  // namespace
  return `${activeProfileId || "profile-1"}::${key}`;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}

// =====================
// 3) تهيئة التطبيق
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // ثيم
  applySavedTheme();

  // لو ما في بروفايلات، أنشئ واحد افتراضي
  let profiles = getProfiles();
  if (profiles.length === 0) {
    profiles = [{ id: "profile-1", name: "محمد الزعبي", height: 175, weight: 110 }];
    saveProfiles(profiles);
  }

  // حمّل البروفايل النشط
  const savedActive = localStorage.getItem("diet-active-profile") || profiles[0].id;
  setActiveProfile(savedActive);

  // ربط الأزرار العامة
  document.getElementById("toggle-sidebar-btn").onclick = toggleSidebar;
  document.getElementById("close-sidebar-btn").onclick = toggleSidebar;
  document.getElementById("add-profile-btn").onclick = createNewProfile;
  document.getElementById("add-profile-btn-2").onclick = createNewProfile;
  document.getElementById("add-month-btn").onclick = addNewMonth;
  document.getElementById("clear-profile-btn").onclick = clearProfileData;
  document.getElementById("open-wizard-btn").onclick = openWizard;
  document.getElementById("wizard-cancel").onclick = closeWizard;
  document.getElementById("wizard-apply").onclick = applyWizard;
  document.getElementById("export-btn").onclick = exportData;
  document.getElementById("import-btn").onclick = () =>
    document.getElementById("import-input").click();
  document.getElementById("import-input").onchange = importData;
  document.getElementById("theme-toggle").onclick = toggleTheme;
  document.getElementById("week-search").oninput = (e) => filterWeeks(e.target.value);

  // tabs
  document.querySelectorAll(".nav-btn[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn[data-page]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showPage(btn.dataset.page);
      // إغلاق السايدبار على الموبايل
      if (window.innerWidth < 930) toggleSidebar();
    });
  });
});

// =====================
// 4) الواجهة: بروفايلات
// =====================
function renderProfilesUI() {
  const profiles = getProfiles();
  const list1 = document.getElementById("profile-list");
  const list2 = document.getElementById("side-profiles");
  list1.innerHTML = "";
  list2.innerHTML = "";
  profiles.forEach((p) => {
    const pill = document.createElement("div");
    pill.className = "profile-pill" + (p.id === activeProfileId ? " active" : "");
    pill.textContent = p.name;
    pill.onclick = () => setActiveProfile(p.id);
    list1.appendChild(pill);

    const pill2 = pill.cloneNode(true);
    pill2.onclick = () => setActiveProfile(p.id);
    list2.appendChild(pill2);
  });
  document.getElementById("dash-profiles").textContent = profiles.length;
}

function createNewProfile() {
  const name = prompt("اسم البروفايل الجديد؟", "مستخدم جديد");
  if (!name) return;
  const list = getProfiles();
  const newProfile = {
    id: "profile-" + Date.now(),
    name
  };
  list.push(newProfile);
  saveProfiles(list);
  setActiveProfile(newProfile.id);
  showToast("تم إنشاء بروفايل جديد");
}

// =====================
// 5) عرض الصفحة
// =====================
function showPage(pageId) {
  document.getElementById("page-dashboard").classList.toggle("hidden", pageId !== "dashboard");
  document.getElementById("page-plan").classList.toggle("hidden", pageId !== "plan");
}

// =====================
// 6) الخطة الغذائية
// =====================
function renderPlanPage() {
  renderMonthlyBoxes();
  renderWeeks(FULL_WEEKS);
  updateDashboard(); // للتقدّم
}

function renderMonthlyBoxes() {
  const wrap = document.getElementById("monthly-boxes");
  wrap.innerHTML = "";
  for (let m = 1; m <= 6; m++) {
    const box = document.createElement("div");
    box.className = "note-box";
    box.dataset.note = "month" + m;
    const weight = localStorage.getItem(profileKey(`monthly-month${m}-weight`)) || "";
    const waist = localStorage.getItem(profileKey(`monthly-month${m}-waist`)) || "";
    const note = localStorage.getItem(profileKey(`monthly-month${m}-note`)) || "";
    box.innerHTML = `
      <h4>الشهر ${m}</h4>
      <span contenteditable data-field="weight">${weight || "الوزن (كغ): "}</span><br/>
      <span contenteditable data-field="waist">${waist || "محيط الخصر: "}</span><br/>
      <span contenteditable data-field="note">${note || "ملاحظات: "}</span><br/>
      <button class="btn btn-small" onclick="printMonthReport('month${m}')">🖨️ طباعة</button>
    `;
    wrap.appendChild(box);

    box.querySelectorAll("[contenteditable]").forEach((el) => {
      el.addEventListener("input", () => {
        const field = el.dataset.field;
        localStorage.setItem(profileKey(`monthly-month${m}-${field}`), el.textContent);
      });
    });
  }
}

function renderWeeks(weeks) {
  const wrap = document.getElementById("weeks-wrapper");
  wrap.innerHTML = "";
  let currentMonth = 0;
  weeks.forEach((week) => {
    if (week.month !== currentMonth) {
      currentMonth = week.month;
      const mh = document.createElement("p");
      mh.className = "month-header";
      mh.id = "month-anchor-" + currentMonth;
      mh.textContent = "الشهر " + currentMonth;
      wrap.appendChild(mh);
    }
    wrap.appendChild(renderWeek(week));
  });
  updateDashboard();
}

function renderWeek(week) {
  const det = document.createElement("details");
  det.className = "week";
  det.dataset.week = week.id;
  if (week.id === 1) det.open = true;

  const sum = document.createElement("summary");
  const left = document.createElement("div");
  left.innerHTML = `<strong style="font-size:.67rem;">${week.title}</strong><div class="muted">${week.meta || ""}</div>`;
  const right = document.createElement("div");
  right.className = "week-actions";

  // طباعة
  const btnPrint = document.createElement("button");
  btnPrint.className = "btn btn-small";
  btnPrint.textContent = "🖨️";
  btnPrint.onclick = (e) => printWeek(e, week.id);

  // تعديل تنويعات
  const btnEdit = document.createElement("button");
  btnEdit.className = "btn btn-small";
  btnEdit.textContent = "✏️";
  btnEdit.onclick = (e) => {
    e.stopPropagation();
    const editor = det.querySelector(".variants-editor");
    editor.style.display = editor.style.display === "none" ? "block" : "none";
    loadWeekToEditor(week.id, editor);
  };

  // حفظ كقالب
  const btnSaveTpl = document.createElement("button");
  btnSaveTpl.className = "btn btn-small";
  btnSaveTpl.textContent = "💾";
  btnSaveTpl.onclick = (e) => {
    e.stopPropagation();
    saveWeekAsTemplate(week.id);
  };

  // تطبيق قالب
  const btnApplyTpl = document.createElement("button");
  btnApplyTpl.className = "btn btn-small";
  btnApplyTpl.textContent = "📄";
  btnApplyTpl.onclick = (e) => {
    e.stopPropagation();
    applyTemplateToWeek(week.id);
  };

  // تم
  const doneLabel = document.createElement("label");
  doneLabel.className = "done-label";
  const cb = document.createElement("input");
  cb.type = "checkbox";
  const doneState = localStorage.getItem(profileKey(`week-${week.id}-done`));
  if (doneState === "1") {
    cb.checked = true;
    det.style.opacity = "0.6";
  }
  cb.onchange = () => markWeekDone(cb, week.id);
  doneLabel.appendChild(cb);
  doneLabel.append("تم");

  right.appendChild(btnPrint);
  right.appendChild(btnEdit);
  right.appendChild(btnSaveTpl);
  right.appendChild(btnApplyTpl);
  right.appendChild(doneLabel);

  sum.appendChild(left);
  sum.appendChild(right);

  const body = document.createElement("div");
  body.className = "week-body";

  const editor = document.createElement("div");
  editor.className = "variants-editor";
  editor.dataset.weekEditor = week.id;
  editor.innerHTML = `
    <label>فطور:</label>
    <textarea data-meal="فطور"></textarea>
    <label>غداء:</label>
    <textarea data-meal="غداء"></textarea>
    <label>عشاء:</label>
    <textarea data-meal="عشاء"></textarea>
    <label>سناك:</label>
    <textarea data-meal="سناك"></textarea>
    <button class="btn btn-small" onclick="saveEditorVariants(${week.id}, this.parentElement)">حفظ</button>
    <button class="btn btn-small" onclick="resetEditorVariants(${week.id}, this.parentElement)">↩ الأصلي</button>
  `;
  body.appendChild(editor);

  const variantsBox = document.createElement("div");
  variantsBox.className = "meal-variants";
  variantsBox.innerHTML = `<h4 style="margin:0 0 3px;font-size:.6rem;">تنويعات هذا الأسبوع:</h4><ul style="margin:0;padding:0;list-style:none;font-size:.58rem;"></ul>`;
  body.appendChild(variantsBox);

  det.appendChild(sum);
  det.appendChild(body);

  // بناء محتوى الأسبوع
  setTimeout(() => buildWeekContent(week.id, week.variants), 0);

  return det;
}

function loadWeekToEditor(weekId, editorEl) {
  const custom = localStorage.getItem(profileKey(`custom-variants-week-${weekId}`));
  let data;
  if (custom) {
    data = JSON.parse(custom);
  } else {
    data = FULL_WEEKS.find((w) => w.id === weekId)?.variants || {
      "فطور": [],
      "غداء": [],
      "عشاء": [],
      "سناك": []
    };
  }
  ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
    const ta = editorEl.querySelector(`[data-meal="${meal}"]`);
    ta.value = (data[meal] || []).join("\n");
  });
}

function saveEditorVariants(weekId, editorEl) {
  const data = { "فطور": [], "غداء": [], "عشاء": [], "سناك": [] };
  ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
    const ta = editorEl.querySelector(`[data-meal="${meal}"]`);
    data[meal] = ta.value
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  });
  localStorage.setItem(profileKey(`custom-variants-week-${weekId}`), JSON.stringify(data));
  buildWeekContent(weekId, data);
  showToast("تم حفظ التنويعات");
}

function resetEditorVariants(weekId, editorEl) {
  localStorage.removeItem(profileKey(`custom-variants-week-${weekId}`));
  const base = FULL_WEEKS.find((w) => w.id === weekId);
  buildWeekContent(weekId, base ? base.variants : { "فطور": [], "غداء": [], "عشاء": [], "سناك": [] });
  loadWeekToEditor(weekId, editorEl);
  showToast("تمت إعادة الأصلي");
}

function getVariantsForWeek(weekId) {
  const custom = localStorage.getItem(profileKey(`custom-variants-week-${weekId}`));
  if (custom) return JSON.parse(custom);
  const base = FULL_WEEKS.find((w) => w.id === weekId);
  return base ? base.variants : { "فطور": [], "غداء": [], "عشاء": [], "سناك": [] };
}

function buildWeekContent(weekId, variantsBase) {
  const variants = variantsBase || getVariantsForWeek(weekId);
  const weekEl = document.querySelector(`details.week[data-week="${weekId}"]`);
  if (!weekEl) return;

  // تنويعات
  const list = weekEl.querySelector(".meal-variants ul");
  list.innerHTML = "";
  ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${meal}:</strong> ${(variants[meal] || []).join(" | ")}`;
    list.appendChild(li);
  });

  // drag palette
  const body = weekEl.querySelector(".week-body");
  let dp = body.querySelector(".drag-palette");
  if (dp) dp.remove();
  dp = document.createElement("div");
  dp.className = "drag-palette";
  ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
    (variants[meal] || []).forEach((opt) => {
      const sp = document.createElement("span");
      sp.className = "drag-item";
      sp.textContent = meal + ": " + opt;
      sp.draggable = true;
      sp.ondragstart = (e) => e.dataTransfer.setData("text/plain", sp.textContent);
      dp.appendChild(sp);
    });
  });
  body.appendChild(dp);

  // جدول الأيام
  let table = body.querySelector("table.day-planner");
  if (table) table.remove();
  table = document.createElement("table");
  table.className = "day-planner";
  table.innerHTML = `<thead><tr><th>اليوم</th><th>فطور</th><th>غداء</th><th>عشاء</th><th>سناك</th></tr></thead>`;
  const tbody = document.createElement("tbody");
  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  days.forEach((dayName, dayIdx) => {
    const tr = document.createElement("tr");
    const tdDay = document.createElement("td");
    tdDay.textContent = dayName;
    if (dayIdx < 6) {
      const cbtn = document.createElement("button");
      cbtn.className = "copy-day-btn";
      cbtn.textContent = "↪";
      cbtn.onclick = () => copyDayMeals(weekId, dayIdx, dayIdx + 1);
      tdDay.appendChild(cbtn);
    }
    tr.appendChild(tdDay);

    ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
      const td = document.createElement("td");
      const cell = document.createElement("div");
      cell.className = "cell-meals";
      const key = profileKey(`week-${weekId}-day-${dayIdx}-${meal}`);
      const saved = localStorage.getItem(key);
      let values = saved ? JSON.parse(saved) : [""];
      if (values.length === 0) values = [""];
      values.forEach((val) => {
        cell.appendChild(createSelect(variants[meal] || [], val, key));
      });
      const addBtn = document.createElement("button");
      addBtn.className = "add-meal-btn";
      addBtn.textContent = "+";
      addBtn.onclick = () => {
        cell.insertBefore(createSelect(variants[meal] || [], "", key), addBtn);
        saveCellMeals(cell, key);
      };
      cell.appendChild(addBtn);

      td.ondragover = (e) => e.preventDefault();
      td.ondrop = (e) => {
        e.preventDefault();
        const text = e.dataTransfer.getData("text/plain");
        const short = text.includes(":") ? text.split(":").slice(1).join(":").trim() : text;
        const firstSelect = cell.querySelector("select");
        if (firstSelect) {
          firstSelect.value = short;
        } else {
          cell.insertBefore(createSelect(variants[meal] || [], short, key), addBtn);
        }
        saveCellMeals(cell, key);
      };

      td.appendChild(cell);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  body.appendChild(table);
}

function createSelect(options, selected, key) {
  const sel = document.createElement("select");
  const def = document.createElement("option");
  def.value = "";
  def.textContent = "-- اختر --";
  sel.appendChild(def);
  options.forEach((o) => {
    const opt = document.createElement("option");
    opt.value = o;
    opt.textContent = o;
    sel.appendChild(opt);
  });
  sel.value = selected;
  sel.onchange = () => {
    const cell = sel.parentElement;
    saveCellMeals(cell, key);
  };
  return sel;
}

function saveCellMeals(cellDiv, key) {
  const vals = Array.from(cellDiv.querySelectorAll("select"))
    .map((s) => s.value)
    .filter((v) => v && v.length > 0);
  localStorage.setItem(key, JSON.stringify(vals));
}

function copyDayMeals(weekId, fromIdx, toIdx) {
  ["فطور", "غداء", "عشاء", "سناك"].forEach((meal) => {
    const keyFrom = profileKey(`week-${weekId}-day-${fromIdx}-${meal}`);
    const keyTo = profileKey(`week-${weekId}-day-${toIdx}-${meal}`);
    const val = localStorage.getItem(keyFrom);
    if (val) localStorage.setItem(keyTo, val);
  });
  const variants = getVariantsForWeek(weekId);
  buildWeekContent(weekId, variants);
}

// =====================
// 7) طباعة
// =====================
function printWeek(e, weekId) {
  e.stopPropagation();
  const weekEl = document.querySelector(`details.week[data-week="${weekId}"]`);
  if (!weekEl) return;
  const w = window.open("", "", "width=850,height=700");
  w.document.write(
    `<html dir="rtl" lang="ar"><head><title>طباعة الأسبوع ${weekId}</title><style>body{font-family:Cairo,Arial;padding:12px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ddd;padding:4px;font-size:12px;}</style></head><body>`
  );
  w.document.write(`<h2>الأسبوع ${weekId}</h2>`);
  w.document.write(weekEl.querySelector(".week-body").innerHTML);
  w.document.write("</body></html>");
  w.document.close();
  w.print();
}

function printMonthReport(monthKey) {
  const monthNum = parseInt(monthKey.replace("month", ""), 10);
  const weight =
    localStorage.getItem(profileKey(`monthly-${monthKey}-weight`)) ||
    localStorage.getItem(profileKey(`monthly-month${monthNum}-weight`)) ||
    "";
  const waist =
    localStorage.getItem(profileKey(`monthly-${monthKey}-waist`)) ||
    localStorage.getItem(profileKey(`monthly-month${monthNum}-waist`)) ||
    "";
  const note =
    localStorage.getItem(profileKey(`monthly-${monthKey}-note`)) ||
    localStorage.getItem(profileKey(`monthly-month${monthNum}-note`)) ||
    "";

  const w = window.open("", "", "width=850,height=700");
  w.document.write(
    `<html dir="rtl" lang="ar"><head><title>تقرير شهر ${monthNum}</title><style>body{font-family:Cairo,Arial;background:#f2f4f7;padding:12px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ddd;padding:4px;}</style></head><body>`
  );
  w.document.write(`<h2>تقرير شهر ${monthNum}</h2>`);
  w.document.write(
    `<table><tr><th>الوزن</th><th>الخصر</th><th>ملاحظات</th></tr><tr><td>${weight}</td><td>${waist}</td><td>${note}</td></tr></table>`
  );
  w.document.write("</body></html>");
  w.document.close();
  w.print();

  localStorage.setItem(profileKey("last-printed-month"), monthNum);
  updateDashboard();
}

// =====================
// 8) التقدّم
// =====================
function markWeekDone(cb, weekId) {
  if (cb.checked) {
    localStorage.setItem(profileKey(`week-${weekId}-done`), "1");
    cb.closest("details.week").style.opacity = "0.6";
  } else {
    localStorage.setItem(profileKey(`week-${weekId}-done`), "0");
    cb.closest("details.week").style.opacity = "1";
  }
  updateDashboard();
}

function updateDashboard() {
  const weeks = document.querySelectorAll("details.week");
  const total = weeks.length;
  let done = 0;
  weeks.forEach((w) => {
    const cb = w.querySelector('input[type="checkbox"]');
    if (cb && cb.checked) done++;
  });
  const percent = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("progress-mini").textContent = `${done} / ${total} أسبوع`;
  document.getElementById("dash-progress").textContent = percent + "%";

  const lastPrinted = localStorage.getItem(profileKey("last-printed-month"));
  document.getElementById("dash-last-print").textContent = lastPrinted ? "شهر " + lastPrinted : "—";

  const theme = localStorage.getItem("diet-theme") || "light";
  document.getElementById("dash-mode").textContent = theme === "dark" ? "ليلي" : "نهاري";
}

// =====================
// 9) إضافة شهر
// =====================
function addNewMonth() {
  currentMaxMonth++;
  const wrap = document.getElementById("weeks-wrapper");
  const mh = document.createElement("p");
  mh.className = "month-header";
  mh.id = "month-anchor-" + currentMaxMonth;
  mh.textContent = "الشهر " + currentMaxMonth;
  wrap.appendChild(mh);

  for (let i = 0; i < 4; i++) {
    const weekObj = {
      id: nextWeekId++,
      month: currentMaxMonth,
      title: "الأسبوع " + (i + 1) + " (مضاف)",
      meta: "أضفه من زر تعديل التنويعات",
      variants: { "فطور": [], "غداء": [], "عشاء": [], "سناك": [] },
      note: ""
    };
    wrap.appendChild(renderWeek(weekObj));
  }
  showToast("تمت إضافة شهر جديد");
}

// =====================
// 10) مسح بيانات البروفايل
// =====================
function clearProfileData() {
  if (!activeProfileId) return;
  if (!confirm("هل تريد مسح كل بيانات هذا البروفايل؟")) return;
  Object.keys(localStorage).forEach((k) => {
    if (k.startsWith(activeProfileId + "::")) {
      localStorage.removeItem(k);
    }
  });
  renderPlanPage();
  showToast("تم مسح بيانات البروفايل");
}

// =====================
// 11) بحث عن أسبوع
// =====================
function filterWeeks(term) {
  term = term.trim();
  document.querySelectorAll("details.week").forEach((w) => {
    const meta = w.querySelector(".muted")?.textContent || "";
    const title = w.querySelector("summary strong")?.textContent || "";
    const match = meta.includes(term) || title.includes(term);
    w.style.display = match ? "" : "none";
  });
}

// =====================
// 12) Sidebar
// =====================
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

// =====================
// 13) Theme
// =====================
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle("dark");
  localStorage.setItem("diet-theme", isDark ? "dark" : "light");
  document.getElementById("dash-mode").textContent = isDark ? "ليلي" : "نهاري";
}

function applySavedTheme() {
  const saved = localStorage.getItem("diet-theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }
}

// =====================
// 14) Export / Import
// =====================
function exportData() {
  const data = {};
  Object.keys(localStorage).forEach((k) => {
    if (
      k.startsWith("profile-") ||
      k === "diet-profiles" ||
      k === "diet-active-profile" ||
      k === "diet-theme"
    ) {
      data[k] = localStorage.getItem(k);
    }
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "diet-platform-backup.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("تم حفظ نسخة");
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const obj = JSON.parse(evt.target.result);
      Object.keys(obj).forEach((k) => {
        localStorage.setItem(k, obj[k]);
      });
      alert("تم الاستيراد. سيتم إعادة تحميل الصفحة.");
      location.reload();
    } catch (err) {
      alert("ملف غير صالح");
    }
  };
  reader.readAsText(file);
}

// =====================
// 15) Wizard
// =====================
function openWizard() {
  document.getElementById("wizard-modal").style.display = "flex";
}
function closeWizard() {
  document.getElementById("wizard-modal").style.display = "none";
}
function applyWizard() {
  const goal = document.getElementById("w-goal").value;
  const activity = document.getElementById("w-activity").value;
  const colon = document.getElementById("w-colon").value;
  const duration = parseInt(document.getElementById("w-duration").value, 10);

  // تعديل بسيط على الميتا حسب المدخلات
  FULL_WEEKS.forEach((w) => {
    if (colon === "yes" && [1, 3, 7, 15, 23].includes(w.id)) {
      w.meta = "قولون خفيف + خضار مسلوقة";
      w.variants["غداء"] = ["خضار مطبوخة خفيفة + دجاج", "شوربة خضار", "سمك مشوي"];
    }
    if (goal === "uric") {
      w.meta = (w.meta || "") + " | تقليل لليوريك";
      w.variants["غداء"] = ["دجاج مسلوق + سلطة", "خضار + دجاج قليل", "سمك مشوي 1x"];
    }
    if (goal === "weight") {
      w.variants["عشاء"] = ["شوربة خضار", "زبادي + خيار", "سلطة + بروتين خفيف"];
    }
  });

  // إظهار فقط جزء من الأسابيع لو 3 شهور
  if (duration === 3) {
    document.querySelectorAll("details.week").forEach((w) => {
      const id = parseInt(w.dataset.week, 10);
      w.style.display = id <= 12 ? "" : "none";
    });
  } else {
    document.querySelectorAll("details.week").forEach((w) => (w.style.display = ""));
  }

  closeWizard();
  showToast("تم توليد الخطة حسب بياناتك");
}

// =====================
// 16) Sidebar Hover & Mobile Toggle
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarTrigger = document.getElementById("sidebar-trigger");
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");

  // Desktop: Hover behavior on trigger zone
  if (sidebarTrigger) {
    sidebarTrigger.addEventListener("mouseenter", () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener("mouseleave", () => {
      sidebar.classList.remove("active");
    });
  }

  // Mobile: Toggle button behavior
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Close button in sidebar
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  }

  // Close sidebar when navigating (mobile convenience)
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });
});

