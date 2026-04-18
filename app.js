const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const state = {
  view: "dashboard",
  selectedId: null,
  search: "",
  sort: "name",
  filter: "all",
  expandedLessons: new Set(),
};

const initials = (name) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

function withStats(s) {
  return { ...s, ...getStudentStats(s) };
}

function setView(view, selectedId = null) {
  state.view = view;
  state.selectedId = selectedId;
  state.expandedLessons = new Set();

  $$(".view").forEach((v) => v.classList.add("hidden"));
  $(`#view-${view === "detail" ? "detail" : view}`).classList.remove("hidden");

  $$(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.dataset.view === (view === "detail" ? "students" : view));
  });

  const titles = {
    dashboard: "Bosh sahifa",
    students: "O‘quvchilar",
    detail: "O‘quvchi ma’lumoti",
  };
  $("#topbarTitle").textContent = titles[view];

  if (window.matchMedia("(max-width: 860px)").matches) {
    $("#sidebar").classList.remove("open");
  }
  window.scrollTo({ top: 0, behavior: "instant" });

  if (view === "dashboard") renderDashboard();
  if (view === "students") renderStudents();
  if (view === "detail") renderDetail(selectedId);
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  const students = STUDENTS.map(withStats);
  const total = students.length;
  const avg = Math.round(students.reduce((s, x) => s + x.averageScore, 0) / total);
  const progressAvg = Math.round(students.reduce((s, x) => s + x.progress, 0) / total);
  const active = students.filter((s) => s.status === "Tugatgan").length;
  const maxStreak = Math.max(...students.map((s) => s.streak));

  $("#view-dashboard").innerHTML = `
    <div class="greeting">
      <h1>Assalomu alaykum, Admin 👋</h1>
      <p>Bugungi o‘quvchilar natijalari va faolligi</p>
    </div>

    <div class="summary-card">
      <div class="summary-item">
        <div class="summary-icon green">🎯</div>
        <div class="summary-num">${progressAvg}%</div>
        <div class="summary-lbl">Umumiy progress</div>
      </div>
      <div class="summary-item">
        <div class="summary-icon amber">🔥</div>
        <div class="summary-num">${maxStreak}</div>
        <div class="summary-lbl">Eng uzun streak</div>
      </div>
      <div class="summary-item">
        <div class="summary-icon rose">🏆</div>
        <div class="summary-num">${avg}%</div>
        <div class="summary-lbl">O‘rtacha ball</div>
      </div>
    </div>

    <div class="stat-grid">
      ${statCard("Jami o‘quvchilar", total, "Ro‘yxatdagi o‘quvchilar", "blue", "👥")}
      ${statCard("Tugatgan", active, `${total - active} ta faol`, "green", "✓")}
      ${statCard("O‘rtacha progress", progressAvg + "%", "Barcha o‘quvchilar", "amber", "📈")}
    </div>

    <div class="section-title">
      <span>Eng yaxshi natijalar</span>
      <span class="muted">Ball bo‘yicha</span>
    </div>

    <div class="student-grid">
      ${[...students].sort((a, b) => b.averageScore - a.averageScore).slice(0, 3).map(studentCard).join("")}
    </div>
  `;

  bindStudentCards($("#view-dashboard"));
}

function statCard(label, value, foot, color, icon) {
  return `
    <div class="stat-card">
      <div class="stat-top">
        <div class="stat-icon ${color}">${icon}</div>
      </div>
      <div class="stat-value">${escapeHtml(String(value))}</div>
      <div class="stat-label">${escapeHtml(label)}</div>
      <div class="stat-foot">${escapeHtml(foot)}</div>
    </div>
  `;
}

/* ---------- Students list ---------- */
function renderStudents() {
  $("#view-students").innerHTML = `
    <div class="greeting">
      <h1>O‘quvchilar</h1>
      <p>Barcha o‘quvchilar va ularning natijalari</p>
    </div>

    <div class="toolbar">
      <input id="search" type="search" placeholder="🔍 Ism bo‘yicha qidirish..." value="${escapeHtml(state.search)}" />
      <select id="sort" aria-label="Saralash">
        <option value="name" ${state.sort === "name" ? "selected" : ""}>Ism bo‘yicha</option>
        <option value="score" ${state.sort === "score" ? "selected" : ""}>Ball bo‘yicha</option>
        <option value="progress" ${state.sort === "progress" ? "selected" : ""}>Progress bo‘yicha</option>
      </select>
      <select id="filter" aria-label="Filter">
        <option value="all" ${state.filter === "all" ? "selected" : ""}>Barchasi</option>
        <option value="active" ${state.filter === "active" ? "selected" : ""}>Faol</option>
        <option value="done" ${state.filter === "done" ? "selected" : ""}>Tugatgan</option>
      </select>
    </div>
    <div class="student-grid" id="studentGrid"></div>
  `;

  const refresh = () => {
    let list = STUDENTS.map(withStats).filter((s) =>
      s.fullName.toLowerCase().includes(state.search.toLowerCase())
    );
    if (state.filter === "active") list = list.filter((s) => s.status === "Faol");
    if (state.filter === "done") list = list.filter((s) => s.status === "Tugatgan");

    list.sort((a, b) => {
      if (state.sort === "score") return b.averageScore - a.averageScore;
      if (state.sort === "progress") return b.progress - a.progress;
      return a.fullName.localeCompare(b.fullName);
    });

    const grid = $("#studentGrid");
    grid.innerHTML = list.length
      ? list.map(studentCard).join("")
      : `<div class="empty">O‘quvchi topilmadi.</div>`;
    bindStudentCards(grid);
  };

  $("#search").addEventListener("input", (e) => { state.search = e.target.value; refresh(); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; refresh(); });
  $("#filter").addEventListener("change", (e) => { state.filter = e.target.value; refresh(); });

  refresh();
}

function studentCard(s) {
  const isDone = s.status === "Tugatgan";
  return `
    <div class="student-card" data-id="${s.id}">
      <div class="student-head">
        <div class="student-avatar">${initials(s.fullName)}</div>
        <div style="flex:1;min-width:0">
          <div class="student-name">${escapeHtml(s.fullName)}</div>
          <div class="student-sub">${escapeHtml(s.grade)} · ${s.completedLessonCount}/${s.totalLessons} dars</div>
        </div>
        <div class="ring" style="--p:${s.progress};--ring-color:var(--brand)">
          <span class="ring-text">${s.progress}%</span>
        </div>
      </div>
      <div>
        <div class="metric-row"><span>O‘rtacha ball</span><b>${s.averageScore}%</b></div>
        <div class="progress sm"><span style="width:${s.averageScore}%"></span></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
        <span class="badge ${isDone ? "green" : "amber"}">
          ${isDone ? "✓ Tugatgan" : "● Faol"}
        </span>
        <span class="badge grey">🔥 ${s.streak} kun</span>
      </div>
    </div>
  `;
}

function bindStudentCards(root) {
  $$(".student-card", root).forEach((card) => {
    card.addEventListener("click", () => setView("detail", card.dataset.id));
  });
}

/* ---------- Detail view ---------- */
function renderDetail(id) {
  const sRaw = STUDENTS.find((x) => x.id === id);
  if (!sRaw) { setView("students"); return; }
  const s = withStats(sRaw);

  const totalQuizzes = MODULES.reduce((a, m) =>
    a + m.lessons.reduce((b, l) => b + l.questions.length, 0), 0);
  const answeredQuizzes = s.totalQuestions;

  $("#view-detail").innerHTML = `
    <button class="back-btn" id="backBtn">← Orqaga</button>

    <div class="detail-head">
      <div class="student-avatar">${initials(s.fullName)}</div>
      <div style="flex:1;min-width:200px">
        <h2>${escapeHtml(s.fullName)}</h2>
        <div class="meta">
          <span class="badge ${s.status === "Tugatgan" ? "green" : "amber"}">
            ${s.status === "Tugatgan" ? "✓" : "●"} ${escapeHtml(s.status)}
          </span>
          <span>${escapeHtml(s.grade)}</span>
          <span>·</span>
          <span>${MODULES.length} modul · ${s.totalLessons} dars · 🔥 ${s.streak} kun</span>
        </div>
      </div>
      <div class="ring" style="--p:${s.progress};--ring-color:var(--brand);width:72px;height:72px">
        <span class="ring-text" style="font-size:14px">${s.progress}%</span>
      </div>

      <div class="detail-stats">
        <div class="detail-stat accent">
          <div class="num">${s.averageScore}%</div>
          <div class="lbl">O‘rtacha ball</div>
        </div>
        <div class="detail-stat">
          <div class="num">${s.completedLessonCount}/${s.totalLessons}</div>
          <div class="lbl">Tugallangan darslar</div>
        </div>
        <div class="detail-stat">
          <div class="num">${s.correctCount}/${answeredQuizzes}</div>
          <div class="lbl">To‘g‘ri javoblar</div>
        </div>
        <div class="detail-stat">
          <div class="num">${s.wrongCount}</div>
          <div class="lbl">Noto‘g‘ri javoblar</div>
        </div>
      </div>
    </div>

    <div class="section-title">
      <span>Bo‘limlar va natijalar</span>
      <span class="muted">Darsni bosib, batafsil natijalarni ko‘ring</span>
    </div>

    ${MODULES.map((m) => moduleCard(s, m)).join("")}
  `;

  $("#backBtn").addEventListener("click", () => setView("students"));
  bindLessonToggles();
}

function moduleCard(student, m) {
  const ms = getModuleStats(student, m);
  return `
    <div class="module-card">
      <div class="module-head">
        <div class="module-icon ${m.color}">${m.icon}</div>
        <div style="flex:1;min-width:180px">
          <div class="module-title">${escapeHtml(m.title)}</div>
          <div class="module-sub">${escapeHtml(m.sub)} · ${ms.doneLessons}/${ms.total} dars</div>
        </div>
        <div class="ring" style="--p:${ms.progress};--ring-color:var(--brand);width:48px;height:48px">
          <span class="ring-text" style="font-size:11px">${ms.progress}%</span>
        </div>
      </div>
      <div class="progress ${m.color === 'green' ? '' : m.color}"><span style="width:${ms.progress}%"></span></div>

      <div class="lessons-block">
        ${m.lessons.map((l) => lessonRow(student, l)).join("")}
      </div>

      ${ms.totalQ > 0 ? `
        <div class="module-footer">
          <span class="sub-title" style="margin:0">Test natijasi</span>
          <span class="quiz-score">${ms.correctQ}/${ms.totalQ} (${ms.score}%)</span>
        </div>
      ` : `<div class="module-footer muted-text">Bu bo‘lim hali o‘tilmagan</div>`}
    </div>
  `;
}

function lessonRow(student, lesson) {
  const ls = getLessonStats(student, lesson);
  const expanded = state.expandedLessons.has(lesson.id);
  return `
    <div class="lesson-block ${expanded ? "open" : ""}">
      <button class="lesson-row" data-lesson-id="${lesson.id}" ${ls.done ? "" : "disabled"}>
        <span class="check ${ls.done ? "" : "off"}">✓</span>
        <span class="lesson-row-title">${escapeHtml(lesson.title)}</span>
        ${ls.done
          ? `<span class="quiz-score">${ls.correct}/${ls.total} to‘g‘ri</span>`
          : `<span class="badge grey">Boshlanmagan</span>`}
        <span class="chev">${expanded ? "▴" : "▾"}</span>
      </button>
      ${expanded && ls.done ? `
        <div class="questions-list">
          ${lesson.questions.map((q) => questionBlock(student, q)).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function questionBlock(student, q) {
  const picked = student.answers[q.id];
  const isCorrect = picked === q.correctAnswer;
  return `
    <div class="q-card ${isCorrect ? "ok" : "bad"}">
      <div class="q-head">
        <span class="q-mark ${isCorrect ? "ok" : "bad"}">${isCorrect ? "✓" : "✕"}</span>
        <span class="q-title">${escapeHtml(q.question)}</span>
        <span class="q-status">${isCorrect ? "To‘g‘ri" : "Noto‘g‘ri"}</span>
      </div>
      <div class="q-options">
        ${q.options.map((opt) => {
          const isPicked = opt === picked;
          const isRight = opt === q.correctAnswer;
          let cls = "";
          if (isRight) cls = "right";
          else if (isPicked) cls = "wrong";
          return `
            <div class="q-option ${cls}">
              <span class="opt-dot"></span>
              <span>${escapeHtml(opt)}</span>
              ${isPicked ? `<span class="opt-tag">Tanlangan</span>` : ""}
              ${isRight && !isPicked ? `<span class="opt-tag right-tag">To‘g‘ri javob</span>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function bindLessonToggles() {
  $$(".lesson-row").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      const id = btn.dataset.lessonId;
      if (state.expandedLessons.has(id)) state.expandedLessons.delete(id);
      else state.expandedLessons.add(id);
      renderDetail(state.selectedId);
    });
  });
}

/* ---------- Bindings ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $$(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  $("#menuToggle").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
  });

  const today = new Date().toLocaleDateString("uz-UZ", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  $("#topbarDate").textContent = today;

  setView("dashboard");
});
