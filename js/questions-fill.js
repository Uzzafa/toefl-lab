/* TOEFL LAB - bank soal tambahan #2
   (a) isi skill yang masih tipis: reduced clause, inversion, listening predict/attitude,
       reading negative-fact / tone / main idea
   (b) 3 task type iBT 2026 yang belum ada: Complete the Words, Read in Daily Life,
       Listen and Choose a Response
*/
window.TOEFL_FILL = {

/* ============ (a) STRUCTURE : reduced clause x5, inversion x6 ============ */
structure: [
  {q:"The students ____ in the library are preparing for their final examinations.", c:["study","studied","studying","who study"], a:2,
   x:"Reduced adjective clause aktif: '(who are) studying'. Kalau 'who study' tetap butuh 'are' untuk progressive, dan 'study' dobel verb."},
  {q:"____ in 1902, the bridge is still in daily use more than a century later.", c:["Building","Built","To build","It built"], a:1,
   x:"Jembatan dibangun (pasif) → past participle 'Built' = '(which was) built'."},
  {q:"The report ____ last week contains several errors in the data tables.", c:["publishing","published","publish","which published"], a:1,
   x:"Laporan diterbitkan (pasif) → 'published' = '(that was) published'. 'which published' berarti laporan yang menerbitkan."},
  {q:"____ the instructions carefully, she submitted the form without asking for help.", c:["Having read","Reading","Read","To read"], a:0,
   x:"Aksi selesai sebelum aksi utama → 'Having + V3'. 'Reading' berarti kedua aksi bersamaan."},
  {q:"The professor, ____ by a student in the middle of the lecture, paused and repeated the point.", c:["interrupting","interrupted","interrupt","interrupts"], a:1,
   x:"Profesor yang diinterupsi (pasif) → past participle 'interrupted'. 'Interrupting' berarti profesor yang menginterupsi."},

  {q:"No sooner ____ the door than the telephone rang.", c:["I had opened","had I opened","did I open","I opened"], a:1,
   x:"'No sooner' di awal kalimat memicu inversi past perfect: had + subject + V3. Pasangannya 'than'."},
  {q:"Only after the meeting ____ the full extent of the problem.", c:["we understood","did we understand","we did understand","understood we"], a:1,
   x:"'Only after ...' di awal → inversi dengan auxiliary: did we understand."},
  {q:"Never ____ such a well-organized academic conference.", c:["I have attended","have I attended","I attended","did I attend"], a:1,
   x:"Adverb negatif 'Never' di awal → auxiliary pindah ke depan: have I attended."},
  {q:"Down the hill ____, laughing and shouting.", c:["the children rolled","rolled the children","did the children roll","were rolling the children"], a:1,
   x:"Inversi dengan place expression: verb + subject. 'Down the hill rolled the children.'"},
  {q:"Had I known about the earlier deadline, ____ on time.", c:["I would have applied","I would apply","I had applied","would I have applied"], a:0,
   x:"'Had I known' = if I had known (inversi conditional type 3). Main clause: would have + V3, TANPA inversi."},
  {q:"Not only ____ the report ahead of schedule, but she also presented it to the board.", c:["she finished","did she finish","she did finish","finished she"], a:1,
   x:"'Not only' di awal clause → inversi: did + subject + base verb. Pasangannya 'but ... also'."}
],

/* ============ (a) LISTENING : prediction x5, attitude x5 ============ */
listeningA: [
  {spk:[["Woman","I just checked with the lab — the results won't be ready until Monday."],["Man","Then the presentation has to be postponed."]],
   q:"What will probably happen to the presentation?", c:["It will be cancelled","It will be delayed","It will be moved to the lab","It will be given by someone else"], a:1,
   x:"'Then the presentation has to be postponed' = prediksi langsung dari hasil lab yang tertunda."},
  {spk:[["Man","The department just posted the final exam schedule."],["Woman","Then I'd better start reviewing this weekend."]],
   q:"What will the woman probably do?", c:["Change her exam schedule","Begin studying over the weekend","Wait for the department","Ask for an extension"], a:1,
   x:"'I'd better start reviewing' = rencana tindakan berikutnya."},
  {spk:[["Woman","My advisor said the internship requires a statistics prerequisite."],["Man","Then you'll have to enroll in statistics first."]],
   q:"What will the woman probably do next?", c:["Apply for a different internship","Take a statistics course","Ask the advisor to waive the rule","Drop her current courses"], a:1,
   x:"Prasyarat belum dipenuhi → dia harus ambil mata kuliah statistik dulu."},
  {spk:[["Man","The library's extended hours start next week."],["Woman","Good — that gives us time to finish the research paper."]],
   q:"What does the woman expect?", c:["The paper will be rejected","She will have more time to finish the paper","The library will close early","The paper is already finished"], a:1,
   x:"Jam buka diperpanjang → ekspektasi waktu lebih untuk menyelesaikan paper."},
  {spk:[["Woman","The scholarship application closes in three days."],["Man","Then I should stop revising and just submit it."]],
   q:"What will the man probably do?", c:["Request more time","Submit the application soon","Abandon the application","Ask the woman to review it"], a:1,
   x:"Deadline dekat → dia akan berhenti merevisi dan langsung mengumpulkan."},

  {spk:[["Woman","How did your presentation go?"],["Man","Let's just say I'm glad it's over."]],
   q:"What is the man's attitude toward the presentation?", c:["He is proud of it","He is relieved it ended","He wants to repeat it","He thought it was too short"], a:1,
   x:"'Glad it's over' = lega sudah selesai — implikasinya tidak menyenangkan."},
  {spk:[["Man","What do you think of the new grading policy?"],["Woman","Honestly? I think it creates more problems than it solves."]],
   q:"What is the woman's attitude toward the policy?", c:["Strongly supportive","Disapproving","Indifferent","Confused"], a:1,
   x:"'More problems than it solves' = tidak setuju. 'Honestly?' menandai pendapat jujur/kritis."},
  {spk:[["Woman","Professor Lin is retiring at the end of the term."],["Man","That's a real loss for the department."]],
   q:"What does the man mean?", c:["He thinks she stayed too long","He values her highly","He does not know her","He wants her position"], a:1,
   x:"'A real loss' = kehilangan besar, artinya dia sangat menghargai profesor itu."},
  {spk:[["Man","Did you enjoy the guest lecture?"],["Woman","I expected more from someone with that reputation."]],
   q:"What is the woman's opinion of the lecture?", c:["It exceeded her expectations","It disappointed her","It was too short","She missed it"], a:1,
   x:"'Expected more' = harapan tidak terpenuhi → kecewa."},
  {spk:[["Woman","Are you happy with the committee's decision?"],["Man","Happy isn't the word I'd use."]],
   q:"What does the man imply?", c:["He is very pleased","He is dissatisfied","He has not heard the decision","He was on the committee"], a:1,
   x:"'Happy isn't the word I'd use' = negasi halus, dia tidak senang."}
],

/* ============ (a) READING : soal tambahan untuk 5 passage ============ */
readingAdd: [
  {title:"The Great Dying", qs:[
    {q:"Which of the following is NOT stated about the Siberian Traps?", c:["They erupted for perhaps two million years.","They released carbon dioxide and sulfur dioxide.","They erupted in a single brief event.","They are described as a vast volcanic province."], a:2, x:"Passage menyebut erupsi berlangsung 'perhaps two million years' — bukan satu peristiwa singkat."},
    {q:"The passage mentions all of the following as consequences of the warming EXCEPT", c:["less dissolved oxygen in the oceans","anoxic conditions in the deep ocean","a rise in hydrogen sulfide","an increase in marine biodiversity"], a:3, x:"Pemanasan menurunkan keanekaragaman (90% spesies laut hilang), bukan menaikkannya."},
    {q:"The author's tone when discussing the source of the light carbon is best described as", c:["confident","cautiously neutral","openly dismissive","enthusiastic"], a:1, x:"'remains contested' = penulis tidak memihak, hanya melaporkan perdebatan."},
    {q:"Which of the following would be the best title for the passage?", c:["How Volcanoes Form","Solving the Great Dying","Isotopes and Sediment Layers","Life in the Permian Ocean"], a:1, x:"Judul harus mencakup penyebab + bukti + lamanya peristiwa."}
  ]},
  {title:"Sleep and Memory Consolidation", qs:[
    {q:"All of the following are mentioned as controls in modern experiments EXCEPT", c:["testing both groups at the same clock time","recording brain activity with polysomnography","supervising the group that stays awake","using identical word lists for every participant"], a:3, x:"Kesamaan daftar kata tidak disebut sebagai kontrol."},
    {q:"All of the following are true of declarative memory according to the passage EXCEPT", c:["it includes facts and word pairs","it benefits most from slow-wave sleep","it depends mainly on REM sleep in the early morning","it can be tested the following day"], a:2, x:"REM dikaitkan dengan procedural skills, bukan declarative memory."},
    {q:"The author's attitude toward the early sleep studies is", c:["uncritically supportive","respectful but critical","contemptuous","indifferent"], a:1, x:"Kritiknya spesifik pada metodologi ('confounded'), tapi tidak merendahkan temuannya."},
    {q:"Which statement best summarizes the passage?", c:["Sleep has no measurable effect on memory.","Sleep supports memory, with different stages serving different memory types.","REM sleep is the only stage that matters.","Students should never study at night."], a:1, x:"Ringkasan harus mencakup temuan utama + pembagian per tahap tidur."}
  ]},
  {title:"The Cost of Urban Trees", qs:[
    {q:"All of the following benefits of urban trees are mentioned EXCEPT", c:["shade that lowers surface temperature","reduced rainfall runoff","filtration of particulates","lower construction costs"], a:3, x:"Biaya konstruksi tidak pernah disebut."},
    {q:"Newly planted street trees commonly die from all of the following EXCEPT", c:["drought stress during establishment","mechanical damage","insufficient watering","herbicide contamination"], a:3, x:"Herbisida tidak disebut; tiga lainnya disebut eksplisit."},
    {q:"The author's attitude toward the 'two to five times' figure is", c:["accepting","skeptical","hostile","uninterested"], a:1, x:"'Those numbers deserve scrutiny' = skeptis, minta diperiksa ulang."},
    {q:"The passage is primarily concerned with", c:["promoting municipal tree-planting programs","qualifying the claimed benefits of urban trees","describing tree species used in cities","explaining how trees absorb rainfall"], a:1, x:"Fokus: manfaat nyata tapi bersyarat (survival & pemerataan)."}
  ]},
  {title:"The Invention of Paper Money", qs:[
    {q:"All of the following contributed to problems with privately issued notes EXCEPT", c:["shop failures","forgery","notes exceeding reserves","government prohibition"], a:3, x:"Pemerintah tidak melarang — justru mengambil alih penerbitan."},
    {q:"The author's attitude toward governments that issue paper money is", c:["admiring","wary","indifferent","optimistic"], a:1, x:"'a ruler who can print money will print too much' = waspada."},
    {q:"The tone of the final paragraph is best described as", c:["cautious and knowing","celebratory","angry","uncertain"], a:0, x:"Penulis menyimpulkan pelajaran sejarah dengan nada hati-hati tapi yakin."}
  ]},
  {title:"Magnetoreception in Migratory Animals", qs:[
    {q:"The author's attitude toward the cryptochrome hypothesis is", c:["dismissive","balanced, noting strengths and drawbacks","wholly convinced","uninformed"], a:1, x:"Penulis menyebut satu kelebihan dan satu kelemahannya secara seimbang."},
    {q:"The overall tone of the passage is", c:["speculative and cautious","hostile","humorous","dogmatic"], a:0, x:"Banyak penanda kehati-hatian: 'remains contested', 'proposed', 'may use both'."},
    {q:"Which best states the passage's central point?", c:["Magnetoreception has been definitively explained.","Evidence supports magnetic sensing, but the mechanism remains unresolved.","Monarch butterflies are the only magnetoreceptive animals.","Behavioral experiments are unreliable."], a:1, x:"Inti: bukti kuat, mekanisme masih terbuka."}
  ]}
],

/* ============ (b) iBT : Complete the Words ============
   {{kata}} = gap. Setengah awal kata ditampilkan, sisanya harus diketik. */
ctw: [
  {title:"Complete the Words 1 — Cave art", text:"Recent {{studies}} of cave art suggest that group {{dancing}} served a practical {{purpose}} long before written {{language}} existed. Anthropologists {{believe}} that coordinated {{movement}} helped early communities {{maintain}} social bonds across {{large}} distances. The {{evidence}} is indirect but {{consistent}} across several continents."},
  {title:"Complete the Words 2 — Animal navigation", text:"Scientists have long {{wondered}} how migratory birds {{navigate}} without landmarks. Recent {{research}} points to a magnetic {{sense}} located near the {{retina}}. The {{mechanism}} appears to depend on {{light}}, which {{explains}} why the ability {{weakens}} at night. Further {{experiments}} are clearly needed."},
  {title:"Complete the Words 3 — Price and value", text:"Economists often {{distinguish}} between price and {{value}}. A good may be {{cheap}} yet nearly {{worthless}} to its owner, or {{expensive}} yet {{essential}}. This {{distinction}} matters when {{governments}} design {{subsidies}} for low-income {{households}}."},
  {title:"Complete the Words 4 — Public health", text:"Public health {{officials}} rely on routine {{surveillance}} to detect outbreaks {{early}}. When clinics report {{unusual}} patterns, laboratories {{confirm}} the diagnosis and {{authorities}} trace contacts. Speed {{matters}} because {{delayed}} detection allows {{transmission}} to accelerate {{rapidly}}."},
  {title:"Complete the Words 5 — Architecture", text:"Modern {{architects}} often design buildings that {{minimize}} energy use. Thick {{insulation}}, careful {{orientation}}, and natural {{ventilation}} reduce the need for {{mechanical}} cooling. These {{measures}} cost more {{initially}} but {{repay}} the investment over {{decades}}."}
],

/* ============ (b) iBT : Read in Daily Life ============ */
daily: [
  {label:"Notice", text:"MAIN LIBRARY — NOTICE\n\nThe group study rooms on the third floor will be unavailable from Monday, March 3 through Friday, March 7 due to carpet replacement.\n\nIndividual study carrels on floors 1 and 2 remain open. Bookings for the affected rooms will be cancelled automatically; no fee will be charged.\n\nTo rebook, use the online room scheduler from March 8.",
   qs:[
     {q:"What is the purpose of this notice?", c:["To announce a temporary closure","To advertise new study rooms","To increase room fees","To recruit library staff"], a:0, x:"Tujuan: mengumumkan penutupan sementara lantai 3."},
     {q:"What will happen to existing bookings?", c:["They will be moved to floor 1","They will be cancelled without charge","They will be charged a fee","They will be extended by a week"], a:1, x:"'cancelled automatically; no fee will be charged'."},
     {q:"Where can students study during that week?", c:["On the third floor","In the basement","On floors 1 and 2","Off campus only"], a:2, x:"'Individual study carrels on floors 1 and 2 remain open'."}
   ]},
  {label:"Text messages", text:"Maya: are you still coming to the 4pm review session?\nDeni: stuck at work — can we do 6?\nMaya: 6 works. room 204 is booked till 5:30 though\nDeni: ok i'll grab the key at 5:45\nMaya: perfect. bring the chapter 7 problems",
   qs:[
     {q:"What time will they meet?", c:["4:00","5:30","5:45","6:00"], a:3, x:"Deni minta jam 6, Maya setuju ('6 works')."},
     {q:"What will Deni do before the session?", c:["Print the problems","Pick up a key","Book room 204","Leave work early"], a:1, x:"'i'll grab the key at 5:45'."},
     {q:"What does Maya ask Deni to bring?", c:["The key","A laptop","Chapter 7 problems","Review notes"], a:2, x:"'bring the chapter 7 problems'."}
   ]},
  {label:"Receipt", text:"CAMPUS COPY CENTER\n2 x Poster print (A2) ......... 24.00\n1 x Binding (spiral) ..........  6.50\nStudent discount (10%) ....... -3.05\nTOTAL ........................ 27.45\n\nPaid by card. Returns accepted within 14 days with receipt.",
   qs:[
     {q:"What did the customer buy?", c:["Two posters and one binding","One poster and two bindings","Only posters","Only printing supplies"], a:0, x:"'2 x Poster print' dan '1 x Binding'."},
     {q:"How much was the student discount?", c:["2.45","3.05","6.50","27.45"], a:1, x:"Baris 'Student discount (10%) -3.05'."},
     {q:"What is required to return an item?", c:["A student ID","The original poster","The receipt","A written request"], a:2, x:"'Returns accepted within 14 days with receipt'."}
   ]},
  {label:"Workshop schedule", text:"FREE WEEKEND WORKSHOP — CAREER CENTER\n\nSaturday 10:00  Resume clinic (bring a printed draft)\nSaturday 13:00  Interview practice (limited to 12; sign up at the front desk)\nSunday 10:00   LinkedIn profile review (online only)\nSunday 13:00   Salary negotiation (open to all, no registration)",
   qs:[
     {q:"Which session requires advance sign-up?", c:["Resume clinic","Interview practice","LinkedIn review","Salary negotiation"], a:1, x:"'limited to 12; sign up at the front desk'."},
     {q:"Which session is online only?", c:["Resume clinic","Interview practice","LinkedIn review","Salary negotiation"], a:2, x:"'LinkedIn profile review (online only)'."},
     {q:"What should attendees bring to the resume clinic?", c:["A laptop","A printed draft","A student ID","A cover letter"], a:1, x:"'bring a printed draft'."}
   ]}
],

/* ============ (b) iBT : Listen and Choose a Response ============ */
response: [
  {say:"Didn't I just see you in the library an hour ago?", q:"Pilih respons paling tepat:", c:["As a matter of fact, I was returning a book.","Yes, you can find it in the reference section.","I don't think I'll have enough time to do that.","Actually, I think I can get there a little earlier."], a:0,
   x:"Pertanyaannya menanyakan keberadaan orang. Respons A menjawab langsung. B salah konteks (merujuk ke lokasi barang), C dan D tidak nyambung."},
  {say:"Could you tell me where the registrar's office is?", q:"Pilih respons paling tepat:", c:["No, I haven't registered yet.","It's on the second floor, next to the elevator.","I'd rather not, thank you.","Yes, the office is closed today."], a:1,
   x:"Permintaan petunjuk arah → jawab dengan lokasi. 'Could you tell me' bukan pertanyaan yes/no."},
  {say:"I'm afraid the seminar has been moved to Thursday.", q:"Pilih respons paling tepat:", c:["Thanks for letting me know — I'll update my calendar.","Yes, I'd love to come on Thursday.","No, I didn't move it.","The seminar was very interesting."], a:0,
   x:"Pemberitahuan perubahan jadwal → respons yang tepat: mengonfirmasi dan menyesuaikan."},
  {say:"You didn't happen to pick up my printouts, did you?", q:"Pilih respons paling tepat:", c:["No, I printed them yesterday.","Actually, they're still sitting in the printer tray.","Yes, the printer is broken.","I don't need any printouts."], a:1,
   x:"Pertanyaan negatif 'you didn't happen to...' mengharapkan jawaban tentang lokasi barang."},
  {say:"How come you're not taking the exam with the rest of us?", q:"Pilih respons paling tepat:", c:["Because the exam was difficult.","I arranged to take it with the evening section.","Yes, I'm taking the exam.","The rest of us are fine."], a:1,
   x:"'How come' = why. Jawaban harus memberi alasan."},
  {say:"Would you mind keeping an eye on my bag for a minute?", q:"Pilih respons paling tepat:", c:["Not at all — go ahead.","Yes, I do mind a lot.","It's a nice bag.","A minute is too long."], a:0,
   x:"'Would you mind' → jawaban setuju adalah 'Not at all'. Ini jebakan klasik."},
  {say:"This coffee machine has been out of order since Monday.", q:"Pilih respons paling tepat:", c:["I know — I've been going to the one downstairs.","Yes, Monday is my favourite day.","The coffee is too expensive.","I ordered a machine last week."], a:0,
   x:"Keluhan bersama → respons yang menyambung: berbagi pengalaman serupa."},
  {say:"Are you sure you want to drop the course this late?", q:"Pilih respons paling tepat:", c:["Yes, I'm sure it's late.","I've thought about it for two weeks.","No, the course was dropped.","I want to add a course."], a:1,
   x:"Pertanyaan menantang keputusan → jawab dengan alasan yang menegaskan keputusan itu."}
]

};
