const MODULES = (typeof QUIZ_MODULES !== "undefined") ? QUIZ_MODULES : [];

/* ---------- Helpers to expand student specs ---------- */
const ALL_LESSON_IDS = MODULES.flatMap((m) => m.lessons.map((l) => l.id));

function buildAnswers(completedLessonIds, wrongMap = {}) {
  const answers = {};
  for (const mod of MODULES) {
    for (const lesson of mod.lessons) {
      if (!completedLessonIds.includes(lesson.id)) continue;
      for (const q of lesson.questions) {
        answers[q.id] = wrongMap[q.id] ?? q.correctAnswer;
      }
    }
  }
  return answers;
}

/* ---------- Students ---------- */
const STUDENTS = [
  {
    id: "s1",
    fullName: "Abdullaev Javokhir",
    grade: "8-sinf",
    streak: 12,
    completedLessons: ALL_LESSON_IDS,
    answers: buildAnswers(ALL_LESSON_IDS, {
      q6: "Hujayrani boshqarish",
    }),
  },
  {
    id: "s2",
    fullName: "Khatamova Nigora",
    grade: "8-sinf",
    streak: 14,
    completedLessons: ALL_LESSON_IDS,
    answers: buildAnswers(ALL_LESSON_IDS, {
      q18: "Miyada",
    }),
  },
  {
    id: "s3",
    fullName: "Karimov Sardorbek",
    grade: "8-sinf",
    streak: 9,
    completedLessons: ALL_LESSON_IDS,
    answers: buildAnswers(ALL_LESSON_IDS, {
      q4: "Oqsil sintezlaydi",
      q13: "Bir xil hujayralar yig‘indisi",
      q25: "Ovqat hazm qilish",
    }),
  },
  {
    id: "s4",
    fullName: "Rakhimova Dilnoza",
    grade: "8-sinf",
    streak: 11,
    completedLessons: ALL_LESSON_IDS,
    answers: buildAnswers(ALL_LESSON_IDS, {
      q8: "Sitoplazma",
      q22: "Ichki sekretsiya",
    }),
  },
  {
    id: "s5",
    fullName: "To‘raev Jasurbek",
    grade: "8-sinf",
    streak: 6,
    completedLessons: [
      "lesson_1", "lesson_2", "lesson_3", "lesson_4",
      "lesson_5", "lesson_6",
      "lesson_7", "lesson_8",
    ],
    answers: buildAnswers(
      ["lesson_1","lesson_2","lesson_3","lesson_4","lesson_5","lesson_6","lesson_7","lesson_8"],
      {
        q5: "Energiya ishlab chiqaradi",
        q11: "Harakat",
        q19: "Yurak",
      }
    ),
  },
  {
    id: "s6",
    fullName: "Yusupova Madinabonu",
    grade: "8-sinf",
    streak: 15,
    completedLessons: ALL_LESSON_IDS,
    answers: buildAnswers(ALL_LESSON_IDS, {
      q2: "Membrana",
      q29: "Silliq",
    }),
  },
  {
    id: "s7",
    fullName: "Ergashev Bekzod",
    grade: "8-sinf",
    streak: 4,
    completedLessons: [
      "lesson_1", "lesson_2", "lesson_3", "lesson_4",
      "lesson_5", "lesson_6",
    ],
    answers: buildAnswers(
      ["lesson_1","lesson_2","lesson_3","lesson_4","lesson_5","lesson_6"],
      {
        q7: "To‘qima → Hujayra → Organ → Organizm",
        q15: "Yurak",
      }
    ),
  },
];

/* ---------- Live override from student app ---------- */
function loadLiveOverride() {
  try {
    const raw = localStorage.getItem("bio_live_s1");
    if (!raw) return;
    const live = JSON.parse(raw);
    const s = STUDENTS.find((x) => x.id === live.studentId);
    if (!s) return;
    s._live = live;
    if (typeof live.streak === "number") s.streak = live.streak;
    if (Array.isArray(live.completedAdminLessonIds) && live.completedAdminLessonIds.length) {
      s.completedLessons = live.completedAdminLessonIds;
    }
    if (live.answers && typeof live.answers === "object") {
      s.answers = { ...s.answers, ...live.answers };
    }
  } catch (e) {}
}
loadLiveOverride();

/* ---------- Derived metrics ---------- */
function getStudentStats(student) {
  if (student._live) {
    const L = student._live;
    const progress = L.progress || 0;
    return {
      progress,
      averageScore: L.averageScore || 0,
      status: progress >= 100 ? "Tugatgan" : "Faol",
      totalQuestions: L.totalQuestions || 0,
      correctCount: L.correctCount || 0,
      wrongCount: Math.max(0, (L.totalQuestions || 0) - (L.correctCount || 0)),
      completedLessonCount: L.completedLessonCount || 0,
      totalLessons: L.totalLessons || ALL_LESSON_IDS.length,
    };
  }
  return _originalStudentStats(student);
}

function _originalStudentStats(student) {
  let totalQuestions = 0;
  let correctCount = 0;
  const totalLessons = ALL_LESSON_IDS.length;
  const completedLessonCount = student.completedLessons.length;

  for (const mod of MODULES) {
    for (const lesson of mod.lessons) {
      if (!student.completedLessons.includes(lesson.id)) continue;
      for (const q of lesson.questions) {
        totalQuestions++;
        if (student.answers[q.id] === q.correctAnswer) correctCount++;
      }
    }
  }

  const progress = Math.round((completedLessonCount / totalLessons) * 100);
  const averageScore = totalQuestions === 0
    ? 0
    : Math.round((correctCount / totalQuestions) * 100);
  const status = progress === 100 ? "Tugatgan" : "Faol";

  return {
    progress,
    averageScore,
    status,
    totalQuestions,
    correctCount,
    wrongCount: totalQuestions - correctCount,
    completedLessonCount,
    totalLessons,
  };
}

function getModuleStats(student, module) {
  let totalQ = 0, correctQ = 0;
  let doneLessons = 0;
  for (const lesson of module.lessons) {
    if (!student.completedLessons.includes(lesson.id)) continue;
    doneLessons++;
    for (const q of lesson.questions) {
      totalQ++;
      if (student.answers[q.id] === q.correctAnswer) correctQ++;
    }
  }
  const progress = Math.round((doneLessons / module.lessons.length) * 100);
  const score = totalQ === 0 ? 0 : Math.round((correctQ / totalQ) * 100);
  return { progress, score, doneLessons, total: module.lessons.length, correctQ, totalQ };
}

function getLessonStats(student, lesson) {
  const done = student.completedLessons.includes(lesson.id);
  let correct = 0;
  if (done) {
    for (const q of lesson.questions) {
      if (student.answers[q.id] === q.correctAnswer) correct++;
    }
  }
  return { done, correct, total: lesson.questions.length };
}
