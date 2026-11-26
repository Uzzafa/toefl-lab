/* TOEFL LAB - materi teori + glossary
   Tujuan: jangan langsung soal. Setiap skill punya penjelasan istilah, aturan,
   contoh kalimat BENAR + terjemahan Indonesia, dan kesalahan yang sering terjadi.
*/
window.GLOSSARY = [
  {t:"Subject (subjek)", d:"Pelaku atau topik kalimat — siapa/apa yang dibicarakan.",
   en:"The students read every night.", id:"Para siswa membaca setiap malam.", note:"'The students' = subjek."},
  {t:"Verb (kata kerja)", d:"Kata yang menyatakan tindakan (read, build) atau keadaan (is, seems, becomes). Setiap kalimat lengkap wajib punya minimal satu verb.",
   en:"She is tired.", id:"Dia lelah.", note:"'is' adalah verb (verb penghubung), bukan kata sifat."},
  {t:"Object (objek)", d:"Yang menerima tindakan dari verb.",
   en:"She read the report.", id:"Dia membaca laporan itu.", note:"'the report' = objek."},
  {t:"Noun (kata benda)", d:"Orang, tempat, benda, atau konsep. Bisa dihitung (student/students) atau tidak (information, water).",
   en:"The information was useful.", id:"Informasi itu bermanfaat.", note:"'information' tidak bisa dihitung → tidak ada 'informations'."},
  {t:"Adjective (kata sifat)", d:"Menerangkan noun. Letaknya sebelum noun atau setelah verb penghubung (be, seem, look).",
   en:"a careful student / The student is careful.", id:"seorang siswa yang teliti / Siswa itu teliti.", note:"Menerangkan 'student'."},
  {t:"Adverb (kata keterangan)", d:"Menerangkan verb, adjective, atau adverb lain — biasanya cara/waktu/tempat.",
   en:"She answered carefully.", id:"Dia menjawab dengan hati-hati.", note:"'carefully' menerangkan verb 'answered'."},
  {t:"Infinitive (to + kata kerja dasar)", d:"Bentuk 'to + verb' yang TIDAK berubah karena subjek/waktu. Bukan verb utama kalimat.",
   en:"I want to study abroad.", id:"Saya ingin belajar di luar negeri.", note:"'to study' = infinitive, bukan verb utama. Verb utamanya 'want'."},
  {t:"Gerund (verb + -ing sebagai kata benda)", d:"Bentuk -ing yang berfungsi sebagai noun, bukan sebagai verb berjalan.",
   en:"Swimming is good exercise.", id:"Berenang adalah olahraga yang baik.", note:"'Swimming' jadi subjek, jadi noun."},
  {t:"Participle (present -ing / past V3)", d:"Bentuk verb yang dipakai sebagai kata sifat atau untuk memendekkan klausa.",
   en:"The running water / the broken window", id:"air yang mengalir / jendela yang pecah", note:"-ing = aktif/berjalan; V3 = pasif/selesai."},
  {t:"Clause (klausa)", d:"Kelompok kata yang punya subject + verb lengkap.",
   en:"because she was tired", id:"karena dia lelah", note:"Ada subject 'she' + verb 'was'."},
  {t:"Phrase (frasa)", d:"Kelompok kata TANPA pasangan subject + verb lengkap.",
   en:"in the laboratory", id:"di laboratorium", note:"Tidak ada subject/verb."},
  {t:"Preposition (kata depan)", d:"Kata seperti in, on, at, of, to, for, with, despite. Selalu diikuti noun/gerund, tidak boleh diikuti verb dasar.",
   en:"She is interested in biology.", id:"Dia tertarik pada biologi.", note:"'in' + noun 'biology'."},
  {t:"Connector (kata penghubung)", d:"Menyambung dua klausa: and, but, or (koordinat); because, although, while (adverb); that, what, why (noun clause); who, which, whose (adjective clause).",
   en:"She stayed home because it was raining.", id:"Dia tinggal di rumah karena hujan.", note:"'because' + klausa lengkap."},
  {t:"Modal (can, must, will, should, may)", d:"Kata bantu yang selalu diikuti kata kerja DASAR (tanpa -s, -ed, -ing, tanpa 'to').",
   en:"You must submit the form.", id:"Kamu harus mengumpulkan formulirnya.", note:"BUKAN 'must to submit' / 'must submits'."},
  {t:"Auxiliary (be, do, have)", d:"Kata bantu pembentuk tense dan kalimat tanya/negatif.",
   en:"She has finished. / Does he know?", id:"Dia sudah selesai. / Apakah dia tahu?", note:"'has' dan 'does' = auxiliary."},
  {t:"Tense (waktu)", d:"Bentuk verb yang menandai waktu: present, past, future, perfect, continuous.",
   en:"She works / She worked / She has worked.", id:"Dia bekerja / Dia bekerja (dulu) / Dia sudah bekerja.", note:"Bentuk verb berubah sesuai waktu."},
  {t:"Passive voice (kalimat pasif)", d:"Subjek dikenai tindakan. Pola: be + V3.",
   en:"The samples were kept at -80 degrees.", id:"Sampel-sampel disimpan pada suhu -80 derajat.", note:"'were kept' = be + V3."},
  {t:"Subjunctive (bentuk pengandaian wajib)", d:"Setelah require, suggest, demand, insist, recommend + that → pakai kata kerja DASAR, tidak peduli subjeknya.",
   en:"The committee requires that he be present.", id:"Komite mewajibkan dia hadir.", note:"'be', bukan 'is'."},
  {t:"Comparative & superlative", d:"Perbandingan dua hal (-er / more) dan paling di antara banyak (-est / the most).",
   en:"deeper than / the most interesting", id:"lebih dalam daripada / paling menarik", note:"Jangan dobel: 'more easier' salah."},
  {t:"Agreement (kesesuaian)", d:"Verb harus cocok dengan subjek: singular → verb -s, plural → verb tanpa -s.",
   en:"The student reads. / The students read.", id:"Siswa itu membaca. / Para siswa membaca.", note:"Frasa penyela tidak mengubah subjek."},
  {t:"Countable & uncountable", d:"Benda bisa dihitung (book/books) pakai number/fewer/many; tidak bisa dihitung (information, equipment) pakai amount/less/much.",
   en:"fewer books / less information", id:"lebih sedikit buku / lebih sedikit informasi", note:"'less books' salah."},
  {t:"Antecedent (kata yang dirujuk)", d:"Noun yang digantikan oleh pronoun (he, she, it, they, who, which).",
   en:"The scientists published their findings.", id:"Para ilmuwan menerbitkan temuan mereka.", note:"'their' merujuk 'the scientists' (plural)."}
];

window.LESSONS = {

/* ================= GRAMMAR ================= */
sva: {
  intro:"Subjek dan verb harus cocok jumlahnya. Kalau subjeknya satu orang/benda, verb-nya pakai -s (present). Kalau lebih dari satu, verb tanpa -s. Yang bikin soal sulit: sering ada frasa penyela di antara subjek dan verb, jadi kelihatan jauh.",
  rules:[
    "Frasa penyela (along with, as well as, together with, in addition to) TIDAK mengubah subjek. Verb ikut subjek pertama.",
    "'The number of' → singular. 'A number of' → plural.",
    "Neither/either of + plural noun → verb SINGULAR. Neither ... nor → verb ikut subjek TERDEKAT.",
    "Benda tak bisa dihitung (information, equipment, research) → verb singular."
  ],
  examples:[
    {en:"The professor, along with his assistants, is conducting the study.", id:"Profesor itu, bersama asisten-asistennya, sedang melakukan penelitian."},
    {en:"The number of applicants has increased sharply.", id:"Jumlah pelamar telah meningkat tajam."},
    {en:"Neither of the answers was correct.", id:"Tidak satu pun dari jawaban itu yang benar."}
  ],
  mistakes:[
    {wrong:"The professor, along with his assistants, are conducting…", right:"The professor, along with his assistants, is conducting…", why:"Subjeknya tetap 'The professor' (singular)."},
    {wrong:"The information were helpful.", right:"The information was helpful.", why:"'Information' tidak bisa dihitung → singular."}
  ]
},

prep: {
  intro:"Preposition (kata depan) selalu diikuti NOUN atau GERUND, tidak pernah diikuti kata kerja dasar. Masalah kedua: banyak verb punya preposisi pasangan yang tetap — kalau ditukar, artinya berubah atau jadi salah.",
  rules:[
    "Preposition + noun: in the lab, on Monday, at noon, of the report.",
    "Preposition + gerund (-ing): look forward to MEETING, interested in STUDYING, good at WRITING.",
    "'To' bisa jadi preposisi (look forward to, be used to, object to) — kalau begitu wajib -ing. Cek dengan menaruh noun: 'look forward to the trip' masuk akal → preposisi.",
    "Durasi pakai FOR (for ten years). Titik waktu pakai SINCE (since 2014)."
  ],
  examples:[
    {en:"I look forward to meeting you at the conference.", id:"Saya menantikan bertemu dengan Anda di konferensi."},
    {en:"She has worked here for ten years.", id:"Dia telah bekerja di sini selama sepuluh tahun."},
    {en:"Despite the delay, the project was completed on time.", id:"Meskipun ada penundaan, proyek itu selesai tepat waktu."}
  ],
  mistakes:[
    {wrong:"I look forward to meet you.", right:"I look forward to meeting you.", why:"'to' di sini preposisi, jadi wajib -ing."},
    {wrong:"Despite of the rain…", right:"Despite the rain… / In spite of the rain…", why:"'Despite' tidak pakai 'of'."}
  ]
},

clause: {
  intro:"Clause = kelompok kata dengan subjek + verb lengkap. Kalau dua clause digabung, butuh connector. Ada empat keluarga connector, dan tiap keluarga punya aturan urutan kata sendiri.",
  rules:[
    "Coordinate: and, but, or, nor, yet, so → menyambung dua klausa setara, tanpa mengubah urutan.",
    "Adverb connector: because, although, while, when, if → diikuti KLAUSA LENGKAP (subject + verb).",
    "Noun clause: that, what, why, whether → klausa ini berfungsi sebagai noun (subjek/objek).",
    "Adjective clause: who (orang), which (benda), whose (milik), where (tempat) → menerangkan noun sebelumnya."
  ],
  examples:[
    {en:"The reason why the experiment failed remains unclear.", id:"Alasan mengapa eksperimen itu gagal masih belum jelas."},
    {en:"The report, whose findings were widely publicized, was later retracted.", id:"Laporan itu, yang temuannya banyak dipublikasikan, kemudian ditarik."},
    {en:"Although he was tired, he finished the report.", id:"Meskipun dia lelah, dia menyelesaikan laporannya."}
  ],
  mistakes:[
    {wrong:"Although he was tired, but he finished.", right:"Although he was tired, he finished.", why:"'Although' dan 'but' tidak dipakai bersamaan."},
    {wrong:"The woman which called was my advisor.", right:"The woman who called was my advisor.", why:"Untuk orang pakai 'who'."}
  ]
},

reduced: {
  intro:"Reduced clause = cara memendekkan klausa dengan membuang connector + verb 'be'. Hasilnya tinggal participle. Ini yang bikin kalimat TOEFL kelihatan 'tanpa subjek' padahal cuma dipendekkan.",
  rules:[
    "Aktif/berjalan → -ing. '(The girl who is) running in the park' → 'The girl running in the park'.",
    "Pasif/selesai → V3. '(The bridge which was) built in 1902' → 'Built in 1902, the bridge…'.",
    "Aksi selesai sebelum aksi utama → 'Having + V3'.",
    "Kalau yang dipendekkan pasif, participle-nya WAJIB past (V3), bukan -ing."
  ],
  examples:[
    {en:"The students studying in the library are preparing for exams.", id:"Para siswa yang belajar di perpustakaan sedang bersiap untuk ujian."},
    {en:"Built in 1902, the bridge is still in daily use.", id:"Dibangun pada 1902, jembatan itu masih dipakai setiap hari."},
    {en:"Having read the instructions, she submitted the form.", id:"Setelah membaca instruksinya, dia mengumpulkan formulirnya."}
  ],
  mistakes:[
    {wrong:"Building in 1902, the bridge is still in use.", right:"Built in 1902, the bridge is still in use.", why:"Jembatan dibangun (pasif) → V3, bukan -ing."},
    {wrong:"The report publishing last week contains errors.", right:"The report published last week contains errors.", why:"Laporan diterbitkan (pasif) → 'published'."}
  ]
},

inversion: {
  intro:"Biasanya urutan kalimat adalah subject lalu verb. Inversion membaliknya: verb/auxiliary pindah ke depan subject. Ini terjadi kalau kalimat DIAWALI kata bermakna negatif atau pembatas.",
  rules:[
    "Pemicu: Never, Rarely, Hardly, Seldom, No sooner, Not only, Not until, Only after.",
    "Kalau ada auxiliary (have/be/modal), auxiliary-nya yang pindah: 'have I attended'.",
    "Kalau tidak ada auxiliary, pakai do/does/did: 'did we understand'.",
    "Place expression juga memicu inversi: 'Down the hill rolled the children.'"
  ],
  examples:[
    {en:"Rarely have I seen such a well-organized conference.", id:"Jarang sekali saya melihat konferensi yang terorganisir sebaik ini."},
    {en:"Not only did she finish the report, but she also presented it.", id:"Bukan hanya dia menyelesaikan laporan itu, tapi dia juga mempresentasikannya."},
    {en:"Had I known about the deadline, I would have applied.", id:"Seandainya saya tahu tentang tenggatnya, saya sudah melamar."}
  ],
  mistakes:[
    {wrong:"Rarely I have seen such a conference.", right:"Rarely have I seen such a conference.", why:"Setelah 'rarely' auxiliary pindah ke depan subject."},
    {wrong:"No sooner I had opened the door than…", right:"No sooner had I opened the door than…", why:"'No sooner' + had + subject + V3."}
  ]
},

verbform: {
  intro:"Verb berubah bentuk karena tiga hal: waktu (tense), bantuan modal/auxiliary, dan aktif/pasif. Banyak kesalahan TOEFL datang dari bentuk verb yang tidak cocok dengan penanda di sekitarnya.",
  rules:[
    "Modal (can, must, will, should) + kata kerja DASAR: must submit (bukan must to submit).",
    "Have/has/had + V3: has finished.",
    "Be + V3 = pasif: were kept, is being analyzed.",
    "Tense harus cocok dengan penanda waktu: 'by next June' → future perfect; 'since 2014' → present perfect.",
    "Verb tertentu butuh bentuk tertentu: decide + to V1 (decided to go), avoid/enjoy + V-ing."
  ],
  examples:[
    {en:"The samples are kept at minus eighty degrees.", id:"Sampel-sampel disimpan pada suhu minus delapan puluh derajat."},
    {en:"By next June, she will have been working here for ten years.", id:"Pada Juni mendatang, dia akan telah bekerja di sini selama sepuluh tahun."},
    {en:"We decided to postpone the presentation.", id:"Kami memutuskan untuk menunda presentasinya."}
  ],
  mistakes:[
    {wrong:"Each participant must to submit a form.", right:"Each participant must submit a form.", why:"Setelah modal tidak ada 'to'."},
    {wrong:"We decided going to the beach.", right:"We decided to go to the beach.", why:"'Decide' diikuti infinitive, bukan gerund."}
  ]
},

compsubj: {
  intro:"Tiga hal digabung di sini karena polanya mirip dan sering muncul: perbandingan (lebih/paling), struktur paralel (daftar harus seragam), dan subjunctive (bentuk dasar setelah tuntutan).",
  rules:[
    "Dua hal → comparative: -er / more + than. Tiga atau lebih → superlative: -est / the most.",
    "Jangan dobel: 'more easier' salah. Pilih salah satu.",
    "Pola 'the more …, the more …' — dua-duanya pakai 'the'.",
    "Parallel: semua item dalam daftar harus bentuk sama (reading, writing, and speaking — bukan reading, writing, and to speak).",
    "Subjunctive: require/suggest/demand/insist + that + subject + kata kerja DASAR (be, take, submit)."
  ],
  examples:[
    {en:"The results were more encouraging than we had anticipated.", id:"Hasilnya lebih menggembirakan daripada yang kami perkirakan."},
    {en:"Of the three proposals, hers was the most practical.", id:"Dari tiga proposal itu, miliknya yang paling praktis."},
    {en:"The committee demanded that the report be submitted before Friday.", id:"Komite menuntut agar laporan itu dikumpulkan sebelum Jumat."}
  ],
  mistakes:[
    {wrong:"The more easier the test is, the faster students finish.", right:"The easier the test is, the faster students finish.", why:"Double comparative — pilih satu bentuk saja."},
    {wrong:"The professor suggested that she takes the course.", right:"The professor suggested that she take the course.", why:"Subjunctive pakai bentuk dasar 'take'."}
  ]
},

formusage: {
  intro:"Kelompok ini soal pemilihan kata yang tepat: benda bisa/tidak bisa dihitung, pronoun harus merujuk dengan benar, adjective -ed vs -ing, artikel a/an/the, dan kata yang sering tertukar.",
  rules:[
    "Bisa dihitung → number of, fewer, many. Tidak bisa dihitung → amount of, less, much.",
    "Pronoun harus cocok dengan antecedent-nya (kata yang dirujuk), dan jangan dobel.",
    "-ed = perasaan orang (I am interested). -ing = sifat benda (The book is interesting).",
    "a/an untuk satu benda yang belum spesifik; the untuk yang sudah jelas; tanpa artikel untuk hal umum.",
    "Tertukar: make vs do, other/another/others, like/alike/unlike."
  ],
  examples:[
    {en:"The number of students in the auditorium was surprising.", id:"Jumlah siswa di auditorium itu mengejutkan."},
    {en:"She has less experience than her colleague.", id:"Dia punya lebih sedikit pengalaman daripada rekannya."},
    {en:"The students were interested in the lecture.", id:"Para siswa tertarik pada kuliah itu."}
  ],
  mistakes:[
    {wrong:"The amount of students was surprising.", right:"The number of students was surprising.", why:"'Students' bisa dihitung → 'number', bukan 'amount'."},
    {wrong:"The students were very interesting in the lecture.", right:"The students were very interested in the lecture.", why:"Orang merasa tertarik → 'interested'."}
  ]
},

/* ================= LISTENING ================= */
"l-infer": {
  intro:"Di Part A, jawaban yang benar hampir tidak pernah memakai kata yang sama dengan yang diucapkan. Yang diuji adalah KESIMPULAN dari apa yang dikatakan, bukan arti literalnya.",
  rules:[
    "Dengarkan nada dan pilihan kata, bukan cuma isi.",
    "Pola umum: keluhan halus, penolakan tidak langsung, atau koreksi tersirat.",
    "Jawaban yang mengulang kata dari audio biasanya jebakan.",
    "Kalau ada 'should have', 'I was hoping', 'let's just say' — itu penanda implikasi."
  ],
  examples:[
    {en:'"Third time this month." → The book is frequently unavailable.', id:"Artinya: buku itu sering kosong, bukan sekadar tiga kali."},
    {en:'"I should have studied thermodynamics." → She did not prepare adequately.', id:"Artinya: dia menyesal tidak belajar cukup."},
    {en:'"I was hoping you did." → Neither of them has the notes.', id:"Artinya: dia juga tidak punya catatannya."}
  ],
  mistakes:[
    {wrong:"Memilih jawaban yang mengulang kata dari audio", right:"Pilih jawaban yang menyimpulkan makna tersirat", why:"Pengulangan kata adalah distraktor paling umum di Part A."}
  ]
},

"l-suggest": {
  intro:"Pertanyaan saran: salah satu pembicara menyarankan tindakan. Penandanya biasanya bentuk pertanyaan atau kalimat halus, bukan 'you must'.",
  rules:[
    "Penanda: 'Why not …?', 'Have you tried …?', 'You might want to …', 'You should …'.",
    "'Why don't you …?' bukan pertanyaan informasi — itu saran.",
    "Jawaban benar menyebut TINDAKAN yang disarankan, bukan alasannya.",
    "Waspadai saran yang disampaikan lewat informasi tidak langsung."
  ],
  examples:[
    {en:'"Why not sit in on a class before you decide?" → Attend a class as a trial.', id:"Artinya: coba ikut kelas dulu sebagai percobaan."},
    {en:'"You might want to back up your files first." → Back up files immediately.', id:"Artinya: segera cadangkan file-nya dulu."},
    {en:'"There is one on the second floor that actually works." → Use a different printer.', id:"Artinya: pakai printer lain yang berfungsi."}
  ],
  mistakes:[
    {wrong:"Menganggap 'Why not …?' sebagai pertanyaan yang butuh jawaban ya/tidak", right:"Perlakukan sebagai saran tindakan", why:"Bentuk tanya di sini adalah cara sopan memberi saran."}
  ]
},

"l-meaning": {
  intro:"Kelompok ini menguji arti ulang dan idiom. Kata kuncinya sering berupa phrasal verb atau ungkapan yang artinya tidak bisa ditebak dari kata per kata.",
  rules:[
    "Idiom umum: called off (dibatalkan), back up (mundur/mendukung), up in the air (belum pasti), skimmed (baca cepat).",
    "'Tell me about it' = saya setuju/sependapat, bukan minta diceritakan.",
    "'Not exactly' = tidak sepenuhnya benar — biasanya ada koreksi setelahnya.",
    "Perhatikan apakah pembicara mengulang pertanyaan dengan nada heran."
  ],
  examples:[
    {en:'"It was called off at the last minute." → The trip did not take place.', id:"Artinya: perjalanan itu dibatalkan."},
    {en:'"It is still up in the air." → The list has not been decided.', id:"Artinya: daftarnya belum diputuskan."},
    {en:'"I skimmed the last two chapters." → She read part of it quickly.', id:"Artinya: dia membaca sebagian dengan cepat."}
  ],
  mistakes:[
    {wrong:"Menerjemahkan idiom kata per kata", right:"Hafalkan arti utuh ungkapannya", why:"'Up in the air' tidak ada hubungannya dengan udara."}
  ]
},

"l-predict": {
  intro:"Pertanyaan prediksi menanyakan apa yang AKAN dilakukan pembicara setelah percakapan. Jawabannya biasanya kesimpulan logis dari informasi yang baru disebut.",
  rules:[
    "Penanda: 'Then …', 'So …', 'I'd better …', 'I should …' — pembicara menyimpulkan sendiri.",
    "Cari hubungan sebab-akibat: karena X, maka Y akan terjadi.",
    "Jawaban biasanya berbentuk rencana tindakan, bukan opini.",
    "Waspadai pilihan yang terlalu ekstrem (cancelled, refused) — biasanya salah."
  ],
  examples:[
    {en:'"The results won\'t be ready until Monday." "Then the presentation has to be postponed." → It will be delayed.', id:"Artinya: presentasinya akan ditunda."},
    {en:'"The application closes in three days." "Then I should stop revising and submit it." → Submit soon.', id:"Artinya: dia akan segera mengumpulkan."},
    {en:'"The internship requires statistics." "Then you\'ll have to enroll first." → Take a statistics course.', id:"Artinya: dia harus ambil mata kuliah statistik dulu."}
  ],
  mistakes:[
    {wrong:"Memilih tindakan yang tidak didukung informasi apa pun", right:"Pilih yang merupakan akibat langsung dari kalimat terakhir", why:"Prediksi selalu berpijak pada satu informasi yang baru disebut."}
  ]
},

"l-attitude": {
  intro:"Pertanyaan sikap menanyakan opini atau perasaan pembicara. Jawabannya tidak pernah diucapkan langsung — harus dibaca dari pilihan kata dan penekanan.",
  rules:[
    "Positif: 'a real loss', 'I'd love to', 'that's a good point'.",
    "Negatif: 'more problems than it solves', 'I expected more', 'happy isn't the word'.",
    "Lega/netral: 'glad it's over', 'it was fine'.",
    "Kata penguat (honestly, actually, frankly) biasanya menandai pendapat jujur yang kritis."
  ],
  examples:[
    {en:'"That\'s a real loss for the department." → He values her highly.', id:"Artinya: dia sangat menghargai profesor itu."},
    {en:'"I expected more from someone with that reputation." → It disappointed her.', id:"Artinya: kuliah itu mengecewakannya."},
    {en:'"Happy isn\'t the word I\'d use." → He is dissatisfied.', id:"Artinya: dia tidak puas."}
  ],
  mistakes:[
    {wrong:"Menganggap 'not bad' berarti sangat bagus", right:"'Not bad' biasanya berarti biasa saja / cukup", why:"Litotes — pernyataan negatif yang mengecilkan pujian."}
  ]
},

"l-main": {
  intro:"Pertanyaan main idea muncul di Part B/C (percakapan panjang dan lecture). Jawabannya adalah topik keseluruhan, bukan satu detail di tengah.",
  rules:[
    "Di lecture, topik utama biasanya ada di 1–2 kalimat pertama professor.",
    "Di percakapan, topik muncul di pertukaran pertama — apa masalahnya.",
    "Jawaban benar mencakup seluruh isi; jawaban yang hanya cocok untuk satu bagian salah.",
    "Catat siapa berbicara dan apa yang mereka putuskan, bukan semua angka."
  ],
  examples:[
    {en:'Professor: "Today I want to talk about the spacing effect in learning." → The spacing effect in learning.', id:"Artinya: topiknya adalah efek jeda waktu dalam belajar."},
    {en:'Student: "I got an email saying I owe forty dollars." → He was charged for items he already returned.', id:"Artinya: dia ditagih untuk buku yang sudah dikembalikan."}
  ],
  mistakes:[
    {wrong:"Memilih detail yang disebut paling awal", right:"Pilih pernyataan yang mencakup seluruh audio", why:"Detail pertama sering hanya contoh, bukan topik."}
  ]
},

"l-detail": {
  intro:"Pertanyaan detail menanyakan informasi yang disebut eksplisit: angka, nama, urutan, atau sebab-akibat.",
  rules:[
    "Baca pertanyaan dulu sebelum audio kalau memungkinkan, supaya tahu apa yang dicari.",
    "Angka dan nama sering jadi jawaban — catat saat mendengar.",
    "Pertanyaan 'why' mencari alasan yang disebut eksplisit, bukan kesimpulanmu.",
    "Kalau ada dua angka mirip, dengarkan kata penghubungnya (until, before, by)."
  ],
  examples:[
    {en:'"The credit should show within two billing cycles." → Two billing cycles.', id:"Artinya: kreditnya muncul dalam dua siklus penagihan."},
    {en:'"Temperatures dropped by roughly half a degree." → About half a degree Celsius.', id:"Artinya: suhu turun sekitar setengah derajat Celsius."}
  ],
  mistakes:[
    {wrong:"Menebak dari pengetahuan umum", right:"Jawab hanya dari apa yang diucapkan", why:"Semua jawaban ada di audio; pengetahuan luar sering menyesatkan."}
  ]
},

/* ================= READING ================= */
"r-main": {
  intro:"Main idea adalah gagasan yang mencakup SELURUH passage. Biasanya ada di kalimat pertama atau terakhir tiap paragraf.",
  rules:[
    "Jawaban benar tidak boleh terlalu sempit (hanya satu paragraf) atau terlalu luas (di luar isi).",
    "Untuk pertanyaan 'best title', pilih yang mencakup topik + sudut pandang penulis.",
    "Untuk 'primarily concerned with', fokus pada apa yang penulis bahas, bukan detail.",
    "Hati-hati pilihan yang benar isinya tapi bukan fokus utama."
  ],
  examples:[
    {en:"Passage about volcanic effects → 'Solving the Great Dying' (best title).", id:"Artinya: judul terbaik mencakup penyebab + bukti kepunahan massal."},
    {en:"Passage about sleep studies → 'Sleep supports memory, with different stages serving different memory types.'", id:"Artinya: tidur mendukung memori, dengan tahap berbeda untuk jenis memori berbeda."}
  ],
  mistakes:[
    {wrong:"Memilih kalimat yang hanya merangkum paragraf 1", right:"Pilih pernyataan yang mencakup semua paragraf", why:"Main idea harus mencakup keseluruhan teks."}
  ]
},

"r-detail": {
  intro:"Stated detail: jawabannya tertulis eksplisit di passage. Tidak perlu menyimpulkan, cukup menemukan kalimatnya.",
  rules:[
    "Ambil kata kunci dari pertanyaan, lalu scan passage untuk kata itu atau sinonimnya.",
    "Jawaban biasanya parafrase — kata berbeda, makna sama.",
    "Untuk pertanyaan 'according to paragraph 2', batasi pencarian di paragraf itu saja.",
    "Kalau ragu, kembalikan tiap pilihan ke teks dan cek mana yang benar-benar ada."
  ],
  examples:[
    {en:"Q: Why did merchants prefer receipts? → 'the coins were heavy, and a large transaction could require a cart.'", id:"Artinya: karena koin berat, transaksi besar bisa butuh gerobak."},
    {en:"Q: What happened to sulfur aerosols? → 'they fall out within a few years.'", id:"Artinya: aerosol sulfur mengendap dalam beberapa tahun."}
  ],
  mistakes:[
    {wrong:"Memilih jawaban yang benar secara umum tapi tidak ada di teks", right:"Pastikan ada kalimat pendukungnya", why:"Stated detail harus punya rujukan eksplisit."}
  ]
},

"r-infer": {
  intro:"Inference: jawabannya TIDAK tertulis langsung, tapi harus didukung satu kalimat tertentu. Beda dengan tebakan — selalu ada bukti di teks.",
  rules:[
    "Cari kalimat yang menjadi dasar kesimpulan, lalu pastikan pilihanmu hanya melangkah satu langkah dari situ.",
    "Jangan menambah pengetahuan dari luar passage.",
    "Penanda inferensi: 'suggests', 'implies', 'can be inferred', 'likely'.",
    "Pilihan yang terlalu pasti (always, never) biasanya salah untuk soal inferensi."
  ],
  examples:[
    {en:"Eruptions lasted two million years; extinction pulse was under a hundred thousand → eruptions lasted far longer.", id:"Artinya: erupsi jauh lebih lama daripada periode kepunahan."},
    {en:"REM sleep occurs in the early morning → REM is concentrated in the early morning hours.", id:"Artinya: tidur REM terkonsentrasi di jam-jam pagi."}
  ],
  mistakes:[
    {wrong:"Memilih kesimpulan yang butuh dua-tiga langkah penalaran", right:"Pilih yang hanya satu langkah dari kalimat pendukung", why:"Inferensi TOEFL selalu dekat dengan teks."}
  ]
},

"r-vocab": {
  intro:"Vocabulary in context: kata yang ditanya biasanya punya arti berbeda dari arti kamus pertama. Yang diuji adalah arti sesuai konteks kalimat itu.",
  rules:[
    "Masukkan tiap pilihan ke dalam kalimat asli, ganti katanya, lalu baca ulang. Yang paling wajar menang.",
    "Jangan pilih sinonim yang benar secara umum tapi tidak cocok di kalimat itu.",
    "Perhatikan kata di sekitarnya — sering memberi petunjuk (definition, contrast, example).",
    "Kata seperti 'reputable', 'ambient', 'scrutiny' diuji lewat konteks, bukan hafalan."
  ],
  examples:[
    {en:"'the deep ocean can become anoxic' → anoxic = lacking oxygen.", id:"Artinya: anoxic = tanpa oksigen."},
    {en:"'Those numbers deserve scrutiny' → scrutiny = close examination.", id:"Artinya: scrutiny = pemeriksaan teliti."}
  ],
  mistakes:[
    {wrong:"Memilih arti kamus yang paling umum", right:"Uji pilihan di dalam kalimat aslinya", why:"Banyak kata punya beberapa arti; konteks yang menentukan."}
  ]
},

"r-purpose": {
  intro:"Rhetorical purpose: menanyakan MENGAPA penulis menyebut sesuatu. Jawabannya adalah fungsi, bukan isi.",
  rules:[
    "Fungsi umum: memberi contoh, mengontraskan, menekankan, menjelaskan sebab, atau membantah.",
    "Pola pertanyaan: 'Why does the author mention X?'",
    "Jawaban selalu berbentuk 'to + verb' (to illustrate, to contrast, to support).",
    "Lihat kalimat sebelum dan sesudahnya — biasanya ada kata penghubung yang menjelaskan fungsi."
  ],
  examples:[
    {en:"Why mention ultramarine? → To show how expensive materials constrained artists.", id:"Artinya: untuk menunjukkan betapa mahalnya bahan membatasi seniman."},
    {en:"Why mention Mary Shelley? → To show an unexpected consequence of the event.", id:"Artinya: untuk menunjukkan akibat tak terduga dari peristiwa itu."}
  ],
  mistakes:[
    {wrong:"Menjawab dengan isi yang disebut, bukan fungsinya", right:"Jawab dengan tujuan penulis menyebutnya", why:"Pertanyaannya 'why', bukan 'what'."}
  ]
},

"r-except": {
  intro:"Negative fact (EXCEPT / NOT): tiga pilihan disebut di passage, satu tidak. Tugasnya mencari yang TIDAK disebut.",
  rules:[
    "Strategi teraman: cek satu per satu pilihan ke passage, tandai yang ADA.",
    "Yang tersisa = jawaban.",
    "Jangan cari yang 'salah secara fakta' — cari yang 'tidak dibahas'.",
    "Pilihan yang terdengar masuk akal tapi tidak ada di teks adalah jawabannya."
  ],
  examples:[
    {en:"Q: All of the following are mentioned EXCEPT → 'lower construction costs' (not in passage).", id:"Artinya: biaya konstruksi tidak pernah disebut sebagai manfaat pohon kota."},
    {en:"Q: NOT stated about the Siberian Traps → 'They erupted in a single brief event.'", id:"Artinya: teks menyebut erupsi berlangsung dua juta tahun, bukan satu peristiwa singkat."}
  ],
  mistakes:[
    {wrong:"Memilih yang salah secara fakta umum", right:"Pilih yang tidak ada di passage", why:"Soal EXCEPT menguji kehadiran informasi, bukan kebenaran dunia nyata."}
  ]
},

"r-tone": {
  intro:"Author's attitude: menanyakan nada atau sikap penulis. Dijawab dari pilihan kata, bukan dari isi fakta.",
  rules:[
    "Penanda netral-hati-hati: 'remains contested', 'appears to', 'may', 'proposed'.",
    "Penanda kritis: 'deserve scrutiny', 'the weakness is', 'the lesson they drew'.",
    "Penanda mendukung: 'remarkable', 'a very good bargain'.",
    "Jarang ada nada ekstrem (hostile, contemptuous) di passage akademik — biasanya jawabannya yang paling kalem."
  ],
  examples:[
    {en:"'Those numbers deserve scrutiny' → skeptical.", id:"Artinya: penulis skeptis terhadap angka itu."},
    {en:"'remains contested' → cautiously neutral.", id:"Artinya: penulis hati-hati dan tidak memihak."}
  ],
  mistakes:[
    {wrong:"Memilih nada ekstrem karena penulis mengkritik", right:"Pilih nada yang sesuai kadar kritiknya", why:"Kritik akademik biasanya terukur, bukan marah."}
  ]
},

/* ================= iBT 2026 ================= */
"ibt-build": {
  intro:"Build a Sentence: kata diacak, kamu menyusunnya jadi kalimat gramatikal. Yang diuji kontrol struktur — urutan subject, verb, dan connector.",
  rules:[
    "Mulai dari subjek, lalu verb, lalu objek/keterangan.",
    "Kalau ada 'that/which/who', ingat klausa itu butuh subjek + verb sendiri.",
    "Penanda negatif di awal (rarely, not only) → ingat inversi.",
    "Baca ulang hasil susunanmu dengan suara — kalau terdengar aneh, urutannya salah."
  ],
  examples:[
    {en:"The research has shown that sleep improves memory.", id:"Penelitian telah menunjukkan bahwa tidur meningkatkan memori."},
    {en:"It was not until 1990 that the law was changed.", id:"Baru pada tahun 1990 undang-undang itu diubah."},
    {en:"Rarely have we seen such a rapid change.", id:"Jarang sekali kami melihat perubahan secepat ini."}
  ],
  mistakes:[
    {wrong:"…that sleep improve memory", right:"…that sleep improves memory", why:"Subjek 'sleep' singular → verb pakai -s."}
  ]
},

"ibt-email": {
  intro:"Write an Email: kamu diberi situasi kampus dan tiga poin wajib. Yang dinilai: apakah semua poin tercakup, sapaan/penutup benar, dan nadanya sopan.",
  rules:[
    "Struktur: sapaan → tujuan di kalimat pertama → poin-poin → permintaan/tindakan → penutup.",
    "Sapaan formal: 'Dear Professor X,'. Penutup: 'Best regards,' + nama.",
    "Satu paragraf satu poin. Jangan gabung semua jadi satu blok.",
    "Sebutkan tindakan spesifik yang kamu minta (tanggal, dokumen, izin)."
  ],
  examples:[
    {en:"Dear Professor Martinez, I am writing to explain why I missed the midterm on Tuesday.", id:"Profesor Martinez yang terhormat, saya menulis untuk menjelaskan mengapa saya tidak mengikuti ujian tengah semester hari Selasa."},
    {en:"I can provide a discharge summary if that would be helpful.", id:"Saya dapat menyertakan ringkasan medis jika itu membantu."}
  ],
  mistakes:[
    {wrong:"Hey prof, I couldn't come, can I retake?", right:"Dear Professor Martinez, I was unable to attend… Could I arrange a make-up exam?", why:"Email akademik butuh sapaan formal dan permintaan yang jelas."}
  ]
},

"ibt-disc": {
  intro:"Academic Discussion: profesor memberi pertanyaan, dua siswa menjawab. Tugasmu menyatakan posisi sendiri dan merespons diskusi, dalam 100–150 kata.",
  rules:[
    "Kalimat pertama = posisimu. Jangan berputar dulu.",
    "Sebut minimal satu siswa dengan namanya, lalu setuju/tidak setuju dengan alasannya.",
    "Beri satu alasan atau contoh spesifik — bukan generalisasi.",
    "Jangan cuma merangkum dua pendapat; kamu harus punya posisi sendiri."
  ],
  examples:[
    {en:"I agree with Priya that free preparation matters more than abolition, because my own score improved only after my school offered a free course.", id:"Saya setuju dengan Priya bahwa persiapan gratis lebih penting daripada penghapusan, karena skor saya sendiri baru meningkat setelah sekolah menawarkan kursus gratis."}
  ],
  mistakes:[
    {wrong:"Menulis 'Both students make good points.' lalu berhenti", right:"Nyatakan posisi sendiri + alasan konkret", why:"Yang dinilai adalah argumenmu, bukan ringkasan."}
  ]
},

"ibt-repeat": {
  intro:"Listen and Repeat: kalimat diucapkan sekali, kamu mengulang persis. Yang diuji bukan pemahaman, tapi ketepatan bunyi, stress, dan memori pendek.",
  rules:[
    "Fokus pada irama kalimat, bukan tiap kata satu-satu.",
    "Kata fungsi (the, of, to) diucapkan lemah; kata isi (research, improve) diucapkan jelas.",
    "Kalau lupa satu kata, jangan berhenti — lanjutkan, jangan ulang dari awal.",
    "Latih dengan shadowing: putar, lalu ucapkan bersamaan sedikit terlambat."
  ],
  examples:[
    {en:"The library will be closed on Monday for maintenance.", id:"Perpustakaan akan ditutup pada hari Senin untuk pemeliharaan."},
    {en:"Most of the participants reported a significant improvement in concentration.", id:"Sebagian besar peserta melaporkan peningkatan konsentrasi yang signifikan."}
  ],
  mistakes:[
    {wrong:"Mengucapkan tiap kata dengan tekanan sama", right:"Beri tekanan pada kata isi, lemahkan kata fungsi", why:"Penilaian mengukur naturalness irama, bukan kejelasan per kata."}
  ]
},

"ibt-inter": {
  intro:"Take an Interview: pertanyaan spontan, jawab 45 detik. Tidak ada jawaban benar-salah — yang dinilai kelancaran dan struktur jawaban.",
  rules:[
    "Pola aman: posisi → alasan → contoh. Tiga bagian, masing-masing 1–2 kalimat.",
    "Jangan menghafal skrip; lebih baik lancar dengan kalimat sederhana.",
    "Isi waktu: lebih baik 40 detik isi daripada 45 detik dengan 'umm' panjang.",
    "Pakai penanda transisi: 'The main reason is…', 'For example…', 'So that's why…'."
  ],
  examples:[
    {en:"I prefer studying in groups. The main reason is that explaining a concept to someone else shows me what I don't actually understand. For example, last term…", id:"Saya lebih suka belajar kelompok. Alasan utamanya, menjelaskan konsep ke orang lain menunjukkan apa yang sebenarnya belum saya pahami. Misalnya, semester lalu…"}
  ],
  mistakes:[
    {wrong:"Menjawab 'Yes, I agree.' lalu diam", right:"Perluas jadi posisi + alasan + contoh", why:"Jawaban satu kalimat tidak menunjukkan kemampuan bicara."}
  ]
},

"ibt-ctw": {
  intro:"Complete the Words: paragraf akademik dengan 10 kata yang separuh hurufnya dihilangkan. Kamu mengetik sisanya. Yang diuji: kosakata + ejaan + kemampuan menebak dari konteks.",
  rules:[
    "Baca kalimat utuh dulu — konteks menentukan kata apa yang masuk.",
    "Perhatikan bentuk gramatikal: butuh verb, noun, atau adjective?",
    "Kalau ragu ejaan, ingat pola umum: -tion, -ment, -ity, -ous, -ally.",
    "Kata yang sudah tampil setengah adalah petunjuk terkuat — jangan abaikan."
  ],
  examples:[
    {en:"Recent offic____ of cave art suggest that group dan____ served a practical pur____.", id:"Penelitian terbaru atas seni gua menunjukkan bahwa menari kelompok punya tujuan praktis."},
    {en:"Public health author____ trace contacts when transmission accel____.", id:"Otoritas kesehatan masyarakat melacak kontak ketika penularan melaju cepat."}
  ],
  mistakes:[
    {wrong:"Menebak kata yang tidak cocok bentuk gramatikalnya", right:"Cek dulu kelas kata yang dibutuhkan kalimat", why:"'suggest that group ___ served' butuh noun, bukan verb."}
  ]
},

"ibt-daily": {
  intro:"Read in Daily Life: teks pendek sehari-hari — notice, chat, struk, jadwal. Soalnya biasanya soal tujuan teks, detail angka/waktu, dan makna tersirat.",
  rules:[
    "Tentukan dulu JENIS teksnya (pengumuman? struk? chat?) — itu menentukan jenis informasi yang penting.",
    "Untuk notice: cari apa yang berubah, siapa terdampak, dan apa yang harus dilakukan.",
    "Untuk struk/jadwal: cocokkan angka dan waktu dengan hati-hati, ada jebakan angka mirip.",
    "Untuk chat: perhatikan siapa yang memutuskan apa di akhir percakapan."
  ],
  examples:[
    {en:"'Bookings will be cancelled automatically; no fee will be charged.' → Cancelled without charge.", id:"Artinya: pemesanan dibatalkan otomatis tanpa biaya."},
    {en:"'ok i'll grab the key at 5:45' → He will pick up a key first.", id:"Artinya: dia akan mengambil kunci lebih dulu."}
  ],
  mistakes:[
    {wrong:"Menganggap semua angka di struk adalah total", right:"Baca labelnya: subtotal, diskon, total", why:"Soal sering menanyakan diskon, bukan total."}
  ]
},

"ibt-resp": {
  intro:"Listen and Choose a Response: kamu mendengar satu kalimat, lalu memilih respons paling tepat dari empat pilihan. Yang diuji: pemahaman implikasi + kesopanan sosial.",
  rules:[
    "Tentukan dulu jenis kalimatnya: pertanyaan, permintaan, keluhan, atau pemberitahuan.",
    "'Would you mind …?' → jawaban SETUJU adalah 'Not at all', bukan 'Yes'.",
    "'You didn't happen to …?' → mengharapkan info tentang lokasi/keberadaan.",
    "Pilihan yang mengulang kata dari kalimat asli biasanya jebakan."
  ],
  examples:[
    {en:'"Would you mind keeping an eye on my bag?" → "Not at all — go ahead."', id:"Artinya: 'Tentu, silakan.' (setuju membantu)"},
    {en:'"Didn\'t I just see you in the library?" → "As a matter of fact, I was returning a book."', id:"Artinya: 'Sebenarnya saya sedang mengembalikan buku.'"}
  ],
  mistakes:[
    {wrong:"Menjawab 'Yes' pada 'Would you mind…?'", right:"Jawab 'Not at all' untuk setuju", why:"'Mind' berarti keberatan — 'Yes' justru berarti tidak mau."}
  ]
}

};
