// Shared quiz source-of-truth (identical in front & admin repos).
// 4 modules · 10 lessons · 24 questions.
window.QUIZ_MODULES = [
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
            options: ["To'qimalardan", "Organlardan", "Hujayralardan", "Suyaklardan"],
            correctAnswer: "Hujayralardan"
          },
          {
            id: "q2",
            question: "Hujayraning markazida qaysi qism joylashgan?",
            options: ["Membrana", "Sitoplazma", "Yadro", "Ribosoma"],
            correctAnswer: "Yadro"
          }
        ]
      },
      {
        id: "lesson_2",
        title: "Hujayra tuzilishi",
        questions: [
          {
            id: "q3",
            question: "Hujayra membranasi qanday vazifa bajaradi?",
            options: ["Energiya hosil qiladi", "Moddalarni tanlab o'tkazadi", "Oqsil ishlab chiqaradi", "Himoya qilmaydi"],
            correctAnswer: "Moddalarni tanlab o'tkazadi"
          },
          {
            id: "q4",
            question: "Mitoxondriya qanday vazifa bajaradi?",
            options: ["Oqsil sintezlaydi", "Energiya hosil qiladi", "Moddalarni chiqaradi", "Himoya qiladi"],
            correctAnswer: "Energiya hosil qiladi"
          },
          {
            id: "q5",
            question: "Ribosomalar nima qiladi?",
            options: ["Energiya ishlab chiqaradi", "Oqsil sintezlaydi", "Hujayrani himoya qiladi", "Moddalarni chiqaradi"],
            correctAnswer: "Oqsil sintezlaydi"
          },
          {
            id: "q6",
            question: "Lizosomalar vazifasi nima?",
            options: ["Energiya ishlab chiqaradi", "Oziq moddalarni parchalash", "Hujayrani boshqarish", "Qonni tozalash"],
            correctAnswer: "Oziq moddalarni parchalash"
          }
        ]
      },
      {
        id: "lesson_3",
        title: "Tuzilish darajalari",
        questions: [
          {
            id: "q7",
            question: "Tuzilish darajalarini to'g'ri tartiblang",
            options: [
              "Organ → Hujayra → To'qima → Organizm",
              "Hujayra → To'qima → Organ → Organizm",
              "To'qima → Hujayra → Organ → Organizm",
              "Organizm → Organ → To'qima → Hujayra"
            ],
            correctAnswer: "Hujayra → To'qima → Organ → Organizm"
          }
        ]
      },
      {
        id: "lesson_4",
        title: "Diagram asosida",
        questions: [
          {
            id: "q8",
            question: "Rasmda markazdagi qism nima?",
            options: ["Membrana", "Yadro", "Sitoplazma", "Mitoxondriya"],
            correctAnswer: "Yadro"
          },
          {
            id: "q9",
            question: "Energiya ishlab chiqaruvchi organella qaysi?",
            options: ["Ribosoma", "Mitoxondriya", "Yadro", "Membrana"],
            correctAnswer: "Mitoxondriya"
          }
        ]
      }
    ]
  },
  {
    id: "module_2",
    title: "To'qimalar. Organlar, organlar sistemasi",
    sub: "To'qima turlari, organlar va organlar sistemasi haqida",
    color: "amber",
    icon: "📚",
    lessons: [
      {
        id: "lesson_5",
        title: "To'qimalar",
        questions: [
          {
            id: "q10",
            question: "Odam organizmida nechta asosiy to'qima mavjud?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "4"
          },
          {
            id: "q11",
            question: "Epiteliy to'qimasining vazifasi nima?",
            options: ["Harakat", "Himoya qilish", "Energiya ishlab chiqarish", "Qonni tozalash"],
            correctAnswer: "Himoya qilish"
          },
          {
            id: "q12",
            question: "Qaysi to'qima organizmni boshqaradi?",
            options: ["Muskul", "Biriktiruvchi", "Nerv", "Epiteliy"],
            correctAnswer: "Nerv"
          },
          {
            id: "q13",
            question: "Muskul to'qimasining asosiy xususiyati nima?",
            options: ["Himoya", "Qisqarish", "Oziqlanish", "Ajratish"],
            correctAnswer: "Qisqarish"
          },
          {
            id: "q14",
            question: "Qon qaysi to'qimaga kiradi?",
            options: ["Nerv", "Epiteliy", "Biriktiruvchi", "Muskul"],
            correctAnswer: "Biriktiruvchi"
          }
        ]
      },
      {
        id: "lesson_6",
        title: "Diagram asosida",
        questions: [
          {
            id: "q15",
            question: "Rasmda qaysi to'qima ko'rsatilgan?",
            options: ["Muskul", "Epiteliy", "Nerv", "Biriktiruvchi"],
            correctAnswer: "Nerv"
          }
        ]
      }
    ]
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
        title: "Gormonlar",
        questions: [
          {
            id: "q16",
            question: "Gormonlar qayerga chiqariladi?",
            options: ["Hujayraga", "Qonga", "Teri ustiga", "Suyakka"],
            correctAnswer: "Qonga"
          },
          {
            id: "q17",
            question: "Gormonlar qanday tarqaladi?",
            options: ["Havo orqali", "Qon orqali", "Suv orqali", "Nerv orqali"],
            correctAnswer: "Qon orqali"
          }
        ]
      },
      {
        id: "lesson_8",
        title: "Bezlar",
        questions: [
          {
            id: "q18",
            question: "Gipofizning vazifasi nima?",
            options: ["Ovqat hazm qilish", "Boshqa bezlarni boshqaradi", "Qonni tozalash", "Nafas olish"],
            correctAnswer: "Boshqa bezlarni boshqaradi"
          },
          {
            id: "q19",
            question: "Qalqonsimon bez qanday gormon ishlab chiqaradi?",
            options: ["Insulin", "Adrenalin", "Tiroksin", "Testosteron"],
            correctAnswer: "Tiroksin"
          },
          {
            id: "q20",
            question: "Adrenalin qaysi bezda ishlab chiqariladi?",
            options: ["Gipofiz", "Qalqonsimon", "Buyrakusti", "Oshqozon"],
            correctAnswer: "Buyrakusti"
          }
        ]
      }
    ]
  },
  {
    id: "module_4",
    title: "Tayanch va harakat sistemasi",
    sub: "Skelet, bo'g'imlar va muskullar",
    color: "rose",
    icon: "🦴",
    lessons: [
      {
        id: "lesson_9",
        title: "Skelet",
        questions: [
          {
            id: "q21",
            question: "Odam skeletida nechta suyak mavjud?",
            options: ["180", "200", "206", "210"],
            correctAnswer: "206"
          },
          {
            id: "q22",
            question: "Skeletning asosiy vazifasi nima?",
            options: ["Faqat harakat", "Tanani ushlab turish va himoya qilish", "Faqat himoya", "Qon ishlab chiqarish"],
            correctAnswer: "Tanani ushlab turish va himoya qilish"
          }
        ]
      },
      {
        id: "lesson_10",
        title: "Diagram asosida",
        questions: [
          {
            id: "q23",
            question: "Bosh suyagi nimani himoya qiladi?",
            options: ["Yurak", "Miya", "O'pka", "Jigar"],
            correctAnswer: "Miya"
          },
          {
            id: "q24",
            question: "Umurtqa pog'onasi ichida nima joylashgan?",
            options: ["Qon", "Orqa miya", "Muskul", "Suyak iligi"],
            correctAnswer: "Orqa miya"
          }
        ]
      }
    ]
  }
];
