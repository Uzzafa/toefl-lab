/* TOEFL LAB - taksonomi skill + tag per soal
   Sumber struktur:
   - TOEFL ITP Level 1 Structure & Written Expression: 60 skill resmi
     (ETS ITP Test Taker Handbook + ITP Level 1 Score Descriptors)
   - TOEFL iBT 2026 task types (ETS Test Specifications 2026 + Test Overview)
   Semua SOAL di app ini ditulis sendiri, dipetakan ke skill resmi di bawah.
   Tidak ada soal ETS ber-copyright yang disalin.
*/
window.SKILLS = [
  /* ---------- ITP : STRUCTURE & WRITTEN EXPRESSION ---------- */
  {id:"sva",       group:"Grammar", name:"Subject–Verb Agreement",            ref:"Skill 1, 20–23", desc:"Verb ikut subject, bukan frasa penyela. 'The number of' singular, 'a number of' plural, neither/either singular, nor/but proximity."},
  {id:"prep",      group:"Grammar", name:"Preposition & Prepositional Object",ref:"Skill 2, 56–57", desc:"Object of preposition, preposisi yang benar, preposisi hilang, dan pola phrasal verb + preposisi (look forward TO + V-ing)."},
  {id:"clause",    group:"Grammar", name:"Clause & Connectors",               ref:"Skill 6–12",     desc:"Coordinate connector (and/but/or), adverb connector (because/although), noun clause connector (that/what), adjective clause (who/which/whose)."},
  {id:"reduced",   group:"Grammar", name:"Reduced Clause & Participle",       ref:"Skill 4–5, 13–14", desc:"'which was completed' → 'completed'; 'who was running' → 'running'. Bedakan present vs past participle."},
  {id:"inversion", group:"Grammar", name:"Inversion",                          ref:"Skill 15–19",    desc:"Rarely / Hardly / Not until / Not only / No sooner di awal kalimat → auxiliary pindah ke depan subject."},
  {id:"verbform",  group:"Grammar", name:"Verb Form, Tense & Passive",         ref:"Skill 30–38",    desc:"Modal + base verb, have + V3, tense dengan time expression, bentuk passive, active vs passive meaning, gerund vs infinitive."},
  {id:"compsubj",  group:"Grammar", name:"Comparative, Parallel & Subjunctive",ref:"Skill 24–29",    desc:"-er/more/the most, 'the more ... the more ...', parallel structure, dan subjunctive setelah require/suggest/demand that."},
  {id:"formusage", group:"Grammar", name:"Noun, Pronoun, Adjective & Usage",   ref:"Skill 39–55, 58–60", desc:"Countable vs uncountable, plural irregular, pronoun reference, -ed vs -ing adjective, article a/an/the, make vs do, other/another."},

  /* ---------- ITP : LISTENING ---------- */
  {id:"l-infer",   group:"Listening", name:"Implied Meaning / Inference", ref:"Part A", desc:"Jawaban tidak pernah literal. 'Third time this month' = sering kosong. Fokus pada apa yang DISIRATKAN."},
  {id:"l-suggest", group:"Listening", name:"Suggestion",                  ref:"Part A", desc:"Penanda: 'you should', 'why don't you', 'there's one that works', 'give me until tomorrow'."},
  {id:"l-meaning", group:"Listening", name:"Meaning / Restatement & Idiom",ref:"Part A", desc:"Arti ulang dan idiom: 'skimmed', 'back up', 'tell me about it', 'crazy not to'."},
  {id:"l-predict", group:"Listening", name:"Prediction",                  ref:"Part A", desc:"Apa yang akan dilakukan speaker berikutnya. Penanda: 'supposed to be here Thursday', 'conflicts with'."},
  {id:"l-attitude",group:"Listening", name:"Attitude / Tone",             ref:"Part A, B, C", desc:"Sikap speaker: setuju, protes halus, ragu. Dengarkan kata sifat dan penekanan."},
  {id:"l-main",    group:"Listening", name:"Main Idea (Conversation / Talk)", ref:"Part B, C", desc:"Topik utama percakapan panjang atau lecture. Biasanya di kalimat pertama professor."},
  {id:"l-detail",  group:"Listening", name:"Detail (Conversation / Talk)",    ref:"Part B, C", desc:"Angka, nama, urutan, sebab-akibat yang disebut eksplisit."},

  /* ---------- ITP : READING ---------- */
  {id:"r-main",    group:"Reading", name:"Main Idea / Purpose",        ref:"Reading", desc:"Tujuan penulis atau gagasan utama passage. Jawaban biasanya mencakup seluruh teks, bukan satu paragraf."},
  {id:"r-detail",  group:"Reading", name:"Stated Detail",              ref:"Reading", desc:"Informasi yang tertulis eksplisit. Scan kata kunci dari pertanyaan."},
  {id:"r-infer",   group:"Reading", name:"Inference / Unstated Detail",ref:"Reading", desc:"Tidak tertulis langsung tapi didukung satu kalimat. Waspadai pilihan yang 'benar tapi tidak dibahas'."},
  {id:"r-vocab",   group:"Reading", name:"Vocabulary in Context",      ref:"Reading", desc:"Uji pilihan dengan memasukkannya ke kalimat asli, bukan arti kamus."},
  {id:"r-purpose", group:"Reading", name:"Rhetorical Purpose",         ref:"Reading", desc:"Kenapa penulis menyebut X? Untuk contoh, kontras, atau penekanan."},
  {id:"r-except",  group:"Reading", name:"Negative Fact (EXCEPT / NOT)",ref:"Reading", desc:"Eliminasi tiga pilihan yang disebut di passage. Sisa satu = jawaban."},
  {id:"r-tone",    group:"Reading", name:"Author's Attitude",          ref:"Reading", desc:"Nada penulis: netral, kritis, mendukung. Lihat pilihan kata."},

  /* ---------- iBT 2026 ---------- */
  {id:"ibt-build", group:"iBT 2026", name:"Build a Sentence",          ref:"Writing", desc:"Susun kata jadi kalimat gramatikal. Menguji kontrol struktur, bukan kosakata."},
  {id:"ibt-email", group:"iBT 2026", name:"Write an Email",            ref:"Writing", desc:"Email situasional kampus. Wajib mencakup semua poin, sapaan & penutup benar."},
  {id:"ibt-disc",  group:"iBT 2026", name:"Academic Discussion",       ref:"Writing", desc:"Tanggapi post profesor + 2 siswa, 100–150 kata, sebut minimal satu siswa."},
  {id:"ibt-repeat",group:"iBT 2026", name:"Listen and Repeat",         ref:"Speaking", desc:"Ulangi kalimat persis. Menguji pronunciation, stress, dan memori jangka pendek."},
  {id:"ibt-inter", group:"iBT 2026", name:"Take an Interview",         ref:"Speaking", desc:"Jawab spontan 45 detik. Struktur: posisi → alasan → contoh."},
  {id:"ibt-ctw",   group:"iBT 2026", name:"Complete the Words",        ref:"Reading",  desc:"Lengkapi huruf yang hilang di paragraf akademik. 10 gap per teks, setengah kata sudah ditampilkan."},
  {id:"ibt-daily", group:"iBT 2026", name:"Read in Daily Life",        ref:"Reading",  desc:"Teks pendek sehari-hari: notice, chat, struk, jadwal. Soal main purpose, detail, dan implied meaning."},
  {id:"ibt-resp",  group:"iBT 2026", name:"Listen and Choose a Response", ref:"Listening", desc:"Dengar satu kalimat, pilih respons paling tepat. Menguji pemahaman implikasi + kesopanan sosial."}
];

/* Tag per soal. Index-aligned dengan array di questions.js + questions-more.js
   (urutan setelah merge). Kalau nambah soal, tambah tag di posisi yang sama. */
window.SKILL_TAGS = {
  structure: [
    "sva","reduced","inversion","sva","clause","compsubj","formusage","reduced","compsubj","prep",
    "clause","inversion","clause","prep","sva","clause","reduced","verbform","verbform","verbform",
    /* +11 dari questions-fill.js : 5 reduced, 6 inversion */
    "reduced","reduced","reduced","reduced","reduced",
    "inversion","inversion","inversion","inversion","inversion","inversion",
    /* +9 dari questions-fill2.js : 1 clause, 2 verbform, 3 compsubj, 3 formusage */
    "clause","verbform","verbform","compsubj","compsubj","compsubj","formusage","formusage","formusage"
  ],
  written: [
    "sva","sva","prep","sva","sva","sva","prep","prep","formusage","verbform",
    "verbform","compsubj","verbform","formusage","clause","formusage","prep","compsubj","clause","sva",
    "prep","compsubj","formusage","prep","clause"
  ],
  listeningA: [
    "l-infer","l-infer","l-infer","l-infer","l-attitude","l-meaning","l-infer","l-suggest","l-predict","l-infer",
    "l-predict","l-meaning","l-infer","l-suggest","l-meaning","l-infer","l-meaning","l-infer","l-suggest","l-infer",
    "l-infer","l-infer","l-suggest","l-attitude","l-predict","l-meaning","l-infer","l-infer","l-suggest","l-infer",
    /* +10 dari questions-fill.js : 5 prediction, 5 attitude */
    "l-predict","l-predict","l-predict","l-predict","l-predict",
    "l-attitude","l-attitude","l-attitude","l-attitude","l-attitude",
    /* +6 dari questions-fill2.js : 3 suggestion, 3 meaning */
    "l-suggest","l-suggest","l-suggest","l-meaning","l-meaning","l-meaning"
  ],
  /* per passage — satu array per passage, urut sesuai qs.
     Urutan passage: Great Dying, Sleep, Urban Trees, Paper Money, Magnetoreception.
     Pakai struktur bersarang supaya aman kalau jumlah soal per passage beda. */
  readingGroups: [
    /* 0 Great Dying (15) */
    ["r-main","r-detail","r-vocab","r-detail","r-infer","r-purpose","r-detail","r-vocab","r-except","r-detail",
     "r-except","r-except","r-tone","r-main","r-infer"],
    /* 1 Sleep and Memory (14) */
    ["r-infer","r-vocab","r-detail","r-purpose","r-infer","r-vocab","r-purpose","r-detail","r-purpose","r-infer",
     "r-except","r-except","r-tone","r-main"],
    /* 2 Urban Trees (14) */
    ["r-main","r-vocab","r-detail","r-detail","r-tone","r-vocab","r-purpose","r-purpose","r-detail","r-infer",
     "r-except","r-except","r-tone","r-main"],
    /* 3 Paper Money (13) */
    ["r-detail","r-detail","r-vocab","r-detail","r-detail","r-detail","r-vocab","r-detail","r-infer","r-main",
     "r-except","r-tone","r-tone"],
    /* 4 Magnetoreception (13) */
    ["r-main","r-purpose","r-vocab","r-detail","r-detail","r-detail","r-vocab","r-detail","r-detail","r-infer",
     "r-tone","r-tone","r-main"]
  ],
  /* listening set -> tag per pertanyaan, key = title */
  listeningSets: {
    "Campus announcement":           ["l-main","l-detail","l-detail"],
    "Academic talk - biology":       ["l-main","l-detail","l-detail","l-attitude"],
    "Campus conversation - advising":["l-detail","l-detail","l-detail"],
    "Academic talk - art history":   ["l-main","l-detail","l-detail"],
    "Part B - Housing office":       ["l-detail","l-detail","l-detail","l-infer","l-detail"],
    "Part C - Geology":              ["l-main","l-detail","r-purpose","l-main","l-detail"],
    "Part C - Psychology":           ["l-main","l-detail","l-detail","l-main"],
    "Part B - Library fines":        ["l-main","l-detail","l-detail","l-infer"]
  }
};
