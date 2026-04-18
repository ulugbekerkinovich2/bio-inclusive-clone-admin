const MODULES = [
  {
    id: "module_1",
    title: "Odam organizmining hujayraviy tuzilishi",
    sub: "Hujayra tuzilishi, organellalar va ularning vazifalari",
    color: "green",
    icon: "🔬",
    lessons: [
      {
        id: "lesson_1",
        title: "Hujayra — umumiy tushuncha",
        questions: [
          {
            id: "q1",
            question: "Odam organizmi asosan nimadan tashkil topgan?",
            options: ["To‘qimalardan", "Organlardan", "Hujayralardan", "Suyaklardan"],
            correctAnswer: "Hujayralardan",
          },
          {
            id: "q2",
            question: "Hujayraning markazida qaysi qism joylashgan?",
            options: ["Membrana", "Sitoplazma", "Yadro", "Ribosoma"],
            correctAnswer: "Yadro",
          },
        ],
      },
      {
        id: "lesson_2",
        title: "Hujayra tuzilishi",
        questions: [
          {
            id: "q3",
            question: "Hujayra membranasi qanday vazifa bajaradi?",
            options: ["Energiya hosil qiladi", "Moddalarni tanlab o‘tkazadi", "Oqsil ishlab chiqaradi", "Himoya qilmaydi"],
            correctAnswer: "Moddalarni tanlab o‘tkazadi",
          },
          {
            id: "q4",
            question: "Mitoxondriya qanday vazifa bajaradi?",
            options: ["Oqsil sintezlaydi", "Energiya hosil qiladi", "Moddalarni chiqaradi", "Himoya qiladi"],
            correctAnswer: "Energiya hosil qiladi",
          },
          {
            id: "q5",
            question: "Ribosomalar nima qiladi?",
            options: ["Energiya ishlab chiqaradi", "Oqsil sintezlaydi", "Hujayrani himoya qiladi", "Moddalarni chiqaradi"],
            correctAnswer: "Oqsil sintezlaydi",
          },
          {
            id: "q6",
            question: "Lizosomalar vazifasi nima?",
            options: ["Energiya ishlab chiqaradi", "Oziq moddalarni parchalash", "Hujayrani boshqarish", "Qonni tozalash"],
            correctAnswer: "Oziq moddalarni parchalash",
          },
        ],
      },
      {
        id: "lesson_3",
        title: "Tuzilish darajalari",
        questions: [
          {
            id: "q7",
            question: "Tuzilish darajalarini to‘g‘ri tartiblang",
            options: [
              "Organ → Hujayra → To‘qima → Organizm",
              "Hujayra → To‘qima → Organ → Organizm",
              "To‘qima → Hujayra → Organ → Organizm",
              "Organizm → Organ → To‘qima → Hujayra",
            ],
            correctAnswer: "Hujayra → To‘qima → Organ → Organizm",
          },
        ],
      },
      {
        id: "lesson_4",
        title: "Diagram asosida",
        questions: [
          {
            id: "q8",
            question: "Rasmda markazdagi qism nima?",
            options: ["Membrana", "Yadro", "Sitoplazma", "Mitoxondriya"],
            correctAnswer: "Yadro",
          },
          {
            id: "q9",
            question: "Energiya ishlab chiqaruvchi organella qaysi?",
            options: ["Ribosoma", "Mitoxondriya", "Yadro", "Membrana"],
            correctAnswer: "Mitoxondriya",
          },
        ],
      },
    ],
  },
  {
    id: "module_2",
    title: "To‘qimalar. Organlar, organlar sistemasi",
    sub: "To‘qima turlari, organlar va organlar sistemasi haqida",
    color: "amber",
    icon: "📚",
    lessons: [
      {
        id: "lesson_5",
        title: "To‘qimalar",
        questions: [
          {
            id: "q10",
            question: "Odam organizmida nechta asosiy to‘qima mavjud?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "4",
          },
          {
            id: "q11",
            question: "Epiteliy to‘qimasining vazifasi nima?",
            options: ["Harakat", "Himoya qilish", "Energiya ishlab chiqarish", "Qonni tozalash"],
            correctAnswer: "Himoya qilish",
          },
          {
            id: "q12",
            question: "Qaysi to‘qima organizmni boshqaradi?",
            options: ["Epiteliy", "Biriktiruvchi", "Muskul", "Nerv"],
            correctAnswer: "Nerv",
          },
        ],
      },
      {
        id: "lesson_6",
        title: "Organlar va organlar sistemasi",
        questions: [
          {
            id: "q13",
            question: "Organ nima?",
            options: [
              "Bir xil hujayralar yig‘indisi",
              "Bir necha to‘qimadan tashkil topgan organizm qismi",
              "Yagona hujayra",
              "Qon aylanish yo‘li",
            ],
            correctAnswer: "Bir necha to‘qimadan tashkil topgan organizm qismi",
          },
          {
            id: "q14",
            question: "Organlar sistemasi nima?",
            options: [
              "Bitta organ",
              "Bir xil vazifani bajaradigan organlar yig‘indisi",
              "Ikkita hujayra",
              "Hujayra organellalari",
            ],
            correctAnswer: "Bir xil vazifani bajaradigan organlar yig‘indisi",
          },
          {
            id: "q15",
            question: "Ovqat hazm qilish sistemasi qaysi organni o‘z ichiga oladi?",
            options: ["Yurak", "O‘pka", "Oshqozon", "Buyrak"],
            correctAnswer: "Oshqozon",
          },
          {
            id: "q16",
            question: "Qon aylanish sistemasining asosiy organi qaysi?",
            options: ["O‘pka", "Yurak", "Jigar", "Miya"],
            correctAnswer: "Yurak",
          },
        ],
      },
    ],
  },
  {
    id: "module_3",
    title: "Sekretsiya bezlari",
    sub: "Tashqi, ichki va aralash sekretsiya bezlari",
    color: "blue",
    icon: "💧",
    lessons: [
      {
        id: "lesson_7",
        title: "Ichki sekretsiya bezlari",
        questions: [
          {
            id: "q17",
            question: "Ichki sekretsiya bezlarining asosiy xususiyati nima?",
            options: [
              "Suyuqlikni tashqariga chiqaradi",
              "Gormonlarni qonga chiqaradi",
              "Ovqatni hazm qiladi",
              "Nafas olishga yordam beradi",
            ],
            correctAnswer: "Gormonlarni qonga chiqaradi",
          },
          {
            id: "q18",
            question: "Qalqonsimon bez qayerda joylashgan?",
            options: ["Miyada", "Bo‘yinda", "Qorinda", "Oyoqda"],
            correctAnswer: "Bo‘yinda",
          },
          {
            id: "q19",
            question: "Gipofiz qaysi organ bilan bog‘liq?",
            options: ["Yurak", "Miya", "Jigar", "Oshqozon"],
            correctAnswer: "Miya",
          },
          {
            id: "q20",
            question: "Insulin qaysi bez tomonidan ishlab chiqariladi?",
            options: ["Qalqonsimon bez", "Buyrak usti bezi", "Me’da osti bezi", "Gipofiz"],
            correctAnswer: "Me’da osti bezi",
          },
        ],
      },
      {
        id: "lesson_8",
        title: "Tashqi va aralash sekretsiya bezlari",
        questions: [
          {
            id: "q21",
            question: "Tashqi sekretsiya bezlariga qaysi misol bo‘ladi?",
            options: ["So‘lak bezi", "Gipofiz", "Qalqonsimon bez", "Timus"],
            correctAnswer: "So‘lak bezi",
          },
          {
            id: "q22",
            question: "Ter bezlari qaysi tizimga tegishli?",
            options: ["Ichki sekretsiya", "Tashqi sekretsiya", "Aralash", "Nerv"],
            correctAnswer: "Tashqi sekretsiya",
          },
          {
            id: "q23",
            question: "Aralash sekretsiya beziga misol ayting",
            options: ["Jigar", "Me’da osti bezi", "Bosh miya", "Terining bezlari"],
            correctAnswer: "Me’da osti bezi",
          },
        ],
      },
    ],
  },
  {
    id: "module_4",
    title: "Tayanch va harakat sistemasi",
    sub: "Skelet, bo‘g‘imlar va muskullar",
    color: "rose",
    icon: "🦴",
    lessons: [
      {
        id: "lesson_9",
        title: "Skelet tuzilishi",
        questions: [
          {
            id: "q24",
            question: "Odam skeleti nechta suyakdan iborat?",
            options: ["100", "150", "206", "300"],
            correctAnswer: "206",
          },
          {
            id: "q25",
            question: "Skeletning asosiy vazifasi nima?",
            options: ["Ovqat hazm qilish", "Himoya va tayanch", "Energiya hosil qilish", "Qon ishlab chiqarish"],
            correctAnswer: "Himoya va tayanch",
          },
          {
            id: "q26",
            question: "Umurtqa pog‘onasi nechta umurtqadan iborat?",
            options: ["24", "33-34", "40", "50"],
            correctAnswer: "33-34",
          },
        ],
      },
      {
        id: "lesson_10",
        title: "Muskullar va bo‘g‘imlar",
        questions: [
          {
            id: "q27",
            question: "Muskullarning asosiy vazifasi nima?",
            options: ["Nafas olish", "Harakatni ta’minlash", "Ovqat hazm qilish", "Qon tozalash"],
            correctAnswer: "Harakatni ta’minlash",
          },
          {
            id: "q28",
            question: "Silliq muskullar qayerda joylashgan?",
            options: ["Skelet suyaklarida", "Ichki organlarda", "Faqat yurakda", "Terida"],
            correctAnswer: "Ichki organlarda",
          },
          {
            id: "q29",
            question: "Yurak muskuli qanday turdagi muskul?",
            options: ["Silliq", "Skelet", "Yurak muskuli (alohida tur)", "Nerv"],
            correctAnswer: "Yurak muskuli (alohida tur)",
          },
          {
            id: "q30",
            question: "Bo‘g‘imlarning vazifasi nima?",
            options: [
              "Nafas olish",
              "Suyaklarni birlashtirish va harakatni ta’minlash",
              "Qon aylanishi",
              "Gormonlarni ishlab chiqarish",
            ],
            correctAnswer: "Suyaklarni birlashtirish va harakatni ta’minlash",
          },
        ],
      },
    ],
  },
];

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
