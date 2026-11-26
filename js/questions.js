/* TOEFL LAB - question bank
   Format:
   structure   : {q, c:[4], a:index, x:explanation}
   written     : {parts:[{l:'A',t:'...'},...], a:index, x:explanation}
   listeningA  : {spk:[[speaker,line],...], q, c:[4], a:index, x}
   listeningBC : {title, spk:[[speaker,line],...], qs:[{q,c,a,x}]}
   reading     : [{title, text, qs:[{q,c,a,x}]}]
   vocab       : [{w,p,d,e}]
   build       : {words:[...], ans:"...", x}
   email       : {situation, to, bullet:[...]}
   discussion  : {course, prof, s1:[name,text], s2:[name,text], ask}
   speakRepeat : [{text}]
   speakInter  : [{q}]
*/
window.TOEFL = {

structure: [
  {q:"The professor, along with his research assistants, ____ the experiment next week.", c:["plan","plans","planning","are planning"], a:1,
   x:"Subject-nya 'The professor' (singular). Frasa 'along with ...' bukan bagian subject, jadi verb tetap singular: plans."},
  {q:"____ in 1889, the Eiffel Tower was originally criticized by artists and writers.", c:["Completed","Completing","It was completed","To complete"], a:0,
   x:"Reduced adjective clause pasif: '(which was) completed in 1889'. Pakai past participle."},
  {q:"Not until the late nineteenth century ____ electricity widely available to the public.", c:["was","it was","when was","was it"], a:0,
   x:"'Not until' di awal kalimat memicu inversi. Subject-nya 'electricity', jadi urutannya was + electricity. Pilihan 'was it' salah karena 'it' dobel subject."},
  {q:"The number of students enrolled in online courses ____ significantly over the past decade.", c:["have increased","has increased","have been increasing","are increasing"], a:1,
   x:"'The number of' = singular → has increased. Bandingkan 'a number of students' = plural."},
  {q:"____ that the company would relocate its headquarters surprised no one.", c:["The announcement","Announcing","It announced","That announced"], a:0,
   x:"Butuh noun phrase sebagai subject: 'The announcement that ...'. Clause 'that ...' jadi appositive."},
  {q:"The committee requires that every proposal ____ submitted by Friday.", c:["is","be","will be","being"], a:1,
   x:"Subjunctive setelah 'require that': require that + subject + base verb (be)."},
  {q:"____ of the two candidates has released a detailed economic plan.", c:["Both","Neither","All","Each of"], a:1,
   x:"Verb 'has' singular + hanya dua kandidat → Neither. 'Both' butuh verb plural."},
  {q:"Fossils ____ in sedimentary rock are usually better preserved than those found in volcanic ash.", c:["found","finding","which found","they are found"], a:0,
   x:"Reduced relative clause pasif: 'fossils (that are) found in ...'. Pakai past participle 'found'."},
  {q:"The more carefully the data ____ , the more reliable the conclusions will be.", c:["analyze","are analyzed","analyzing","analyzed"], a:1,
   x:"Pola 'the more ... the more ...'. Data bersifat pasif (dianalisis), jadi 'are analyzed'."},
  {q:"____ hard she tried, she could not solve the equation.", c:["However","Whatever","Although","Despite"], a:0,
   x:"'However + adjective/adverb + subject + verb' = sekeras apa pun. 'Although' tidak boleh diikuti adverb langsung."},
  {q:"It was not until 1920 ____ women in the United States gained the right to vote.", c:["when","that","which","so"], a:1,
   x:"Cleft sentence: 'It was not until X that Y'. Wajib pakai 'that'."},
  {q:"Rarely ____ such a dramatic improvement in test scores.", c:["we have seen","have we seen","we saw","did we saw"], a:1,
   x:"Adverb negatif di awal (rarely) → inversi auxiliary + subject: have we seen."},
  {q:"The report, ____ findings were widely publicized, was later retracted.", c:["which","that","whose","of which"], a:2,
   x:"Kepemilikan: 'whose findings' = findings-nya (milik report). 'of which' butuh urutan 'the findings of which'."},
  {q:"____ the heavy rain, the outdoor ceremony proceeded as planned.", c:["Despite","Although","Even though","However"], a:0,
   x:"'Despite + noun phrase'. 'Although/Even though' harus diikuti clause lengkap."},
  {q:"Neither the students nor the instructor ____ aware of the schedule change.", c:["were","was","have been","are"], a:1,
   x:"Neither ... nor → verb ikut subject terdekat: 'the instructor' (singular) → was."},
  {q:"The company is looking for an engineer ____ can design and test prototypes.", c:["which","who","whom","whose"], a:1,
   x:"Antecedent orang + berfungsi sebagai subject → who. 'Whom' untuk object."},
  {q:"____ from the top of the hill, the village looks tiny.", c:["Viewing","Viewed","To view","View"], a:1,
   x:"Village dilihat (pasif) → past participle 'Viewed'. Kalau 'Viewing', yang melihat harus subject."},
  {q:"By the time the results ____ , the funding had already been withdrawn.", c:["were announced","announced","had announced","are announcing"], a:0,
   x:"Hasil diumumkan (pasif) + past event → 'were announced'. Past perfect 'had been withdrawn' menandai kejadian setelahnya."},
  {q:"Scientists have found that ____ regular exercise improves memory.", c:["doing","do","to doing","does"], a:0,
   x:"Subject clause butuh gerund: 'doing regular exercise'. 'That doing ... improves' = clause lengkap."},
  {q:"The museum's collection is ____ to include works by contemporary artists.", c:["expand","expanding","expanded","expansion"], a:1,
   x:"Present continuous setelah 'is': is expanding to include (sedang berkembang)."}
],

written: [
  {parts:[{l:"A",t:"A large number of"},{l:"B",t:"tourists"},{l:"C",t:"visits"},{l:"D",t:"the temple every year."}], a:2,
   x:"'A large number of + plural noun' butuh verb plural → visit, bukan visits."},
  {parts:[{l:"A",t:"The information"},{l:"B",t:"that she provided"},{l:"C",t:"were"},{l:"D",t:"extremely helpful."}], a:2,
   x:"'Information' uncountable → singular: was."},
  {parts:[{l:"A",t:"He has been working"},{l:"B",t:"at the same company"},{l:"C",t:"since"},{l:"D",t:"ten years."}], a:2,
   x:"Durasi (ten years) pakai 'for'. 'Since' untuk titik waktu (since 2014)."},
  {parts:[{l:"A",t:"Neither"},{l:"B",t:"of the answers"},{l:"C",t:"were"},{l:"D",t:"correct."}], a:2,
   x:"'Neither of + plural noun' → verb singular: was."},
  {parts:[{l:"A",t:"She is one of the few scientists"},{l:"B",t:"who"},{l:"C",t:"has received"},{l:"D",t:"the award twice."}], a:2,
   x:"'Who' merujuk ke 'scientists' (plural) → have received."},
  {parts:[{l:"A",t:"The number of"},{l:"B",t:"accidents"},{l:"C",t:"have decreased"},{l:"D",t:"sharply this year."}], a:2,
   x:"'The number of' singular → has decreased."},
  {parts:[{l:"A",t:"I look forward"},{l:"B",t:"to meet"},{l:"C",t:"you"},{l:"D",t:"at the conference."}], a:1,
   x:"Di sini 'to' BUKAN penanda infinitive, tapi PREPOSISI (bagian dari 'look forward to'). Setelah preposisi wajib noun atau V-ing, tidak boleh bare infinitive. Jadi 'to meet' -> 'to meeting'. Bandingkan: 'I want to meet you' (infinitive, benar) vs 'I look forward to meeting you' (preposisi, wajib -ing). Pola sama: be used to working, object to changing, in addition to doing, accustomed to waking up early."},
  {parts:[{l:"A",t:"Despite of"},{l:"B",t:"the bad weather,"},{l:"C",t:"the flight"},{l:"D",t:"departed on time."}], a:0,
   x:"'Despite' tidak diikuti 'of'. Yang benar 'Despite the bad weather' atau 'In spite of the bad weather'."},
  {parts:[{l:"A",t:"The book"},{l:"B",t:"which"},{l:"C",t:"I borrowed it"},{l:"D",t:"from the library was overdue."}], a:2,
   x:"'It' berlebihan — 'which' sudah jadi object: 'the book which I borrowed from the library'."},
  {parts:[{l:"A",t:"Hardly"},{l:"B",t:"had she finished speaking"},{l:"C",t:"when"},{l:"D",t:"the audience begin to applaud."}], a:3,
   x:"Kalimat lampau → begin harus 'began'."},
  {parts:[{l:"A",t:"Each of the participants"},{l:"B",t:"must to submit"},{l:"C",t:"a form"},{l:"D",t:"before Monday."}], a:1,
   x:"Modal 'must' langsung diikuti base verb → must submit."},
  {parts:[{l:"A",t:"The professor suggested"},{l:"B",t:"that she"},{l:"C",t:"takes"},{l:"D",t:"the advanced course."}], a:2,
   x:"Subjunctive setelah 'suggest that' → take (base form)."},
  {parts:[{l:"A",t:"It was"},{l:"B",t:"such a beautiful day"},{l:"C",t:"that we decided"},{l:"D",t:"going to the beach."}], a:3,
   x:"'Decide + to-infinitive' → to go."},
  {parts:[{l:"A",t:"The reason"},{l:"B",t:"why he failed"},{l:"C",t:"is because"},{l:"D",t:"he did not study."}], a:2,
   x:"'The reason ... is that ...', bukan 'is because' (redundant)."},
  {parts:[{l:"A",t:"Although"},{l:"B",t:"he was tired,"},{l:"C",t:"but he"},{l:"D",t:"finished the report."}], a:2,
   x:"'Although' dan 'but' tidak boleh dipakai bersamaan. Hapus 'but'."}
],

listeningA: [
  {spk:[["Man","Did you finish the lab report for Professor Ellis?"],["Woman","Finish it? I haven't even started the data analysis."]],
   q:"What does the woman mean?", c:["She has already submitted the report.","She is much further along than the man.","She has not begun a required step.","She lost the data."], a:2,
   x:"'I haven't even started the data analysis' = dia belum mulai bagian penting. Nada 'Finish it?' menunjukkan rasa tidak percaya."},
  {spk:[["Woman","Are you going to the library after class?"],["Man","I would, if I hadn't lent my student ID to my roommate."]],
   q:"What does the man imply?", c:["He has already been to the library.","He cannot enter the library right now.","His roommate works at the library.","He lost his student ID."], a:1,
   x:"Conditional unreal past: dia tidak bisa masuk karena ID-nya dipinjam."},
  {spk:[["Man","How was the chemistry exam?"],["Woman","Let's just say I should have studied the chapter on thermodynamics."]],
   q:"What does the woman mean?", c:["The exam was easier than expected.","She did not prepare adequately.","Thermodynamics was not on the exam.","She studied too much."], a:1,
   x:"'Should have studied' = penyesalan karena tidak belajar cukup."},
  {spk:[["Woman","Do you think the department will approve my research proposal?"],["Man","With those preliminary results? They'd be crazy not to."]],
   q:"What does the man suggest?", c:["The proposal is likely to be rejected.","The results are not convincing.","The proposal will probably be approved.","She should collect more data first."], a:2,
   x:"'They'd be crazy not to' = double negative bermakna pasti disetujui."},
  {spk:[["Man","I'm thinking of dropping the statistics course."],["Woman","But it's a prerequisite for everything in the program."]],
   q:"What is the woman's attitude toward the man's plan?", c:["Supportive","Disapproving","Indifferent","Confused"], a:1,
   x:"'But it's a prerequisite' = protes halus, dia tidak setuju."},
  {spk:[["Woman","The deadline for the scholarship application is next Friday, isn't it?"],["Man","Friday? I thought it was the end of the month."]],
   q:"What does the man mean?", c:["He has already applied.","He has a different understanding of the deadline.","He does not want the scholarship.","He will apply on Friday."], a:1,
   x:"'I thought it was...' = dia punya pemahaman lain, jadi perlu dikoreksi."},
  {spk:[["Man","Professor Lang's office hours are always packed."],["Woman","Tell me about it. I waited an hour and a half just to ask one question."]],
   q:"What does the woman imply?", c:["She was unable to see the professor.","She waited a long time for a short meeting.","The professor answers questions poorly.","She has never been to office hours."], a:1,
   x:"'Tell me about it' = setuju/sependapat, lalu dia cerita pengalaman menunggu lama."},
  {spk:[["Woman","Should I take the internship in Chicago or the one in Boston?"],["Man","The Boston one pays better, but Chicago is where you want to end up, isn't it?"]],
   q:"What does the man suggest the woman consider?", c:["The salary only","Her long-term career location","The size of the companies","The cost of living in both cities"], a:1,
   x:"Dia menimbang gaji vs tempat tujuan karier jangka panjang — implikasinya pertimbangkan lokasi karier."},
  {spk:[["Man","Did Professor Ruiz say when the midterm would be?"],["Woman","She's supposed to post the syllabus update tonight."]],
   q:"What does the woman mean?", c:["The information is not available yet.","The midterm was cancelled.","The professor forgot the midterm.","She knows the date already."], a:0,
   x:"'Supposed to post tonight' = belum ada, tunggu update."},
  {spk:[["Woman","I heard the new cafeteria is open 24 hours."],["Man","That's the rumor, anyway."]],
   q:"What does the man mean?", c:["He confirms the rumor is true.","He doubts the information is confirmed.","He has been to the cafeteria.","He started the rumor."], a:1,
   x:"'That's the rumor, anyway' = belum terkonfirmasi, cuma katanya."},
  {spk:[["Man","Are you taking Professor Nguyen's seminar on urban planning?"],["Woman","I'd love to, but it conflicts with my fieldwork."]],
   q:"What will the woman probably do?", c:["Take the seminar anyway","Skip her fieldwork","Not take the seminar","Ask the professor to reschedule"], a:2,
   x:"'I'd love to, but...' = tidak bisa, jadi kemungkinan tidak mengambil seminar."},
  {spk:[["Woman","How did you get the data analyzed so quickly?"],["Man","A friend in the computer science department ran it for me overnight."]],
   q:"What does the man say about the data analysis?", c:["He completed it himself.","Someone else helped him.","It is still in progress.","It required new software."], a:1,
   x:"Dia dibantu teman yang menjalankannya semalaman."}
],

listeningBC: [
  {title:"Campus announcement",
   spk:[["Announcer","Good morning, students. This is a reminder that the library will close at six o'clock this evening instead of eleven, due to scheduled electrical maintenance. The twenty-four-hour study lounge in the basement will remain open, but you will need your student ID to enter after six. If you have reserved group study rooms for tonight, please contact the circulation desk to reschedule. Normal hours resume tomorrow morning at seven."]],
   qs:[
     {q:"Why will the library close early?", c:["A holiday","Electrical maintenance","A staffing shortage","A fire inspection"], a:1, x:"Disebut langsung: 'due to scheduled electrical maintenance'."},
     {q:"What will remain available to students?", c:["The group study rooms","The circulation desk","The basement study lounge","The book stacks"], a:2, x:"'The twenty-four-hour study lounge in the basement will remain open'."},
     {q:"What should students with room reservations do?", c:["Enter through the basement","Contact the circulation desk","Wait until tomorrow","Pay a late fee"], a:1, x:"'please contact the circulation desk to reschedule'."}
   ]},
  {title:"Academic talk - biology",
   spk:[["Professor","Today we are going to look at how some desert plants survive extreme heat. Most plants open their pores, called stomata, during the day to take in carbon dioxide for photosynthesis. But opening stomata also releases water vapor. In a desert, that is a fatal trade-off. So a group of plants we call CAM plants reversed the schedule. They open their stomata at night, when the air is cooler and more humid, and store the carbon dioxide in a chemical form. During the day, with stomata tightly shut, they release that stored carbon dioxide internally and complete photosynthesis. The cost is speed: CAM plants grow very slowly compared with plants that photosynthesize all day. But in an environment where water is the limiting factor, slow growth is a very good bargain."]],
   qs:[
     {q:"What problem do desert plants face during the day?", c:["Too little sunlight","Water loss through open stomata","Insufficient carbon dioxide at night","Damage from insects"], a:1, x:"Membuka stomata melepas uap air — berbahaya di gurun."},
     {q:"What do CAM plants do at night?", c:["They close their stomata and rest","They store carbon dioxide in chemical form","They grow rapidly","They absorb water from the air"], a:1, x:"'open their stomata at night ... and store the carbon dioxide in a chemical form'."},
     {q:"What disadvantage of CAM photosynthesis is mentioned?", c:["It requires more sunlight","It only works in cold climates","Growth is slow","It produces less oxygen"], a:2, x:"'The cost is speed: CAM plants grow very slowly'."},
     {q:"What is the professor's attitude toward the CAM strategy?", c:["Critical","Neutral but approving","Confused","Dismissive"], a:1, x:"'slow growth is a very good bargain' — dia menilai strategi itu masuk akal."}
   ]},
  {title:"Campus conversation - advising",
   spk:[["Advisor","So you're thinking about switching from economics to public policy?"],["Student","I am, but I'm worried I'd lose a semester."],["Advisor","Not necessarily. Three of your economics courses count as electives in the policy program, and the statistics requirement overlaps. If you take the policy seminar this spring, you could still graduate on time."],["Student","That's a relief. What about the internship requirement?"],["Advisor","That one's firm. Two hundred hours, and it has to be completed before your final semester."]],
   qs:[
     {q:"What is the student considering?", c:["Adding a second major","Changing majors","Taking a semester off","Dropping statistics"], a:1, x:"'switching from economics to public policy'."},
     {q:"Why might the student not lose time?", c:["The programs share some requirements","The advisor will waive courses","Summer classes are available","The policy program is shorter"], a:0, x:"Tiga mata kuliah dihitung sebagai elective dan statistik overlap."},
     {q:"What does the advisor say about the internship?", c:["It can be waived","It is flexible in length","It must be done before the final semester","It counts as a course"], a:2, x:"'That one's firm ... before your final semester'."}
   ]},
  {title:"Academic talk - art history",
   spk:[["Professor","When we talk about the Renaissance, we usually talk about perspective, anatomy, and classical revival. But there is a quieter revolution in the same period: the shift in how artists were paid and who they answered to. In the medieval period, a painter was essentially a craftsman. He joined a guild, worked on commission, and used the colors the contract specified, because ultramarine cost more than the painter earned in a month. By the sixteenth century, the most successful artists were negotiating their own contracts, choosing their own subjects, and signing their work. That shift, from craftsman to author, is arguably as important to the history of art as any technical innovation."]],
   qs:[
     {q:"What is the professor mainly discussing?", c:["The invention of perspective","A change in artists' professional status","The cost of pigments","Guild regulations in the medieval period"], a:1, x:"Fokus utama: pergeseran dari craftsman ke author."},
     {q:"Why does the professor mention ultramarine?", c:["To show how expensive materials constrained artists","To explain a painting technique","To date a particular work","To criticize modern restoration"], a:0, x:"Contoh bahwa seniman dulu terikat kontrak soal warna karena bahan mahal."},
     {q:"How did successful sixteenth-century artists differ from medieval painters?", c:["They avoided signing their work","They negotiated their own contracts","They stopped using guilds entirely","They painted only religious subjects"], a:1, x:"'negotiating their own contracts, choosing their own subjects, and signing their work'."}
   ]}
],

reading: [
  {title:"The Great Dying",
   text:"The Permian-Triassic extinction, often called the Great Dying, eliminated roughly ninety percent of marine species about 252 million years ago. For decades the leading suspect was the Siberian Traps, a vast volcanic province that erupted for perhaps two million years, releasing enormous quantities of carbon dioxide and sulfur dioxide.\n\nThe mechanism is not simply a matter of heat. Sulfur aerosols injected into the upper atmosphere reflect sunlight and cool the planet, but they fall out within a few years, while carbon dioxide persists for millennia. The likely sequence is a short, sharp cooling followed by sustained warming. Warmer oceans hold less dissolved oxygen, and the deep ocean can become anoxic; evidence from organic-rich sediments suggests exactly this, along with a spike in hydrogen sulfide produced by anaerobic bacteria.\n\nA second line of evidence comes from the carbon isotope record. Marine sediments across the boundary show a pronounced negative excursion in carbon-13, consistent with a massive injection of isotopically light carbon into the ocean-atmosphere system. Whether that carbon came mainly from volcanism, from the burning of coal deposits intruded by magma, or from the destabilization of methane hydrates remains contested. What is no longer contested is the speed: the main pulse of extinction appears to have occurred in well under a hundred thousand years, geologically instantaneous.",
   qs:[
     {q:"What is the main purpose of the passage?", c:["To argue that volcanism alone explains the extinction","To describe the probable causes and evidence for a mass extinction","To compare the Permian extinction with modern climate change","To criticize isotope analysis as a method"], a:1, x:"Passage menjelaskan mekanisme + bukti, bukan mengklaim satu penyebab tunggal."},
     {q:"According to the passage, sulfur aerosols and carbon dioxide differ in that", c:["sulfur aerosols cool the planet for millennia","carbon dioxide remains in the atmosphere far longer","sulfur aerosols are produced only by coal fires","carbon dioxide does not affect temperature"], a:1, x:"'sulfur ... fall out within a few years, while carbon dioxide persists for millennia'."},
     {q:"The word 'anoxic' in paragraph 2 is closest in meaning to", c:["lacking oxygen","unusually warm","highly saline","chemically acidic"], a:0, x:"Konteks: 'hold less dissolved oxygen, and the deep ocean can become anoxic' → tanpa oksigen."},
     {q:"The negative carbon-13 excursion is presented as evidence of", c:["a sudden drop in sea level","an influx of isotopically light carbon","increased volcanic sulfur","the extinction of anaerobic bacteria"], a:1, x:"Disebut eksplisit: 'consistent with a massive injection of isotopically light carbon'."},
     {q:"What does the author say is now settled?", c:["The source of the carbon","The duration of the extinction pulse","The role of methane hydrates","The number of species lost"], a:1, x:"'What is no longer contested is the speed' — sumber karbon masih diperdebatkan."}
   ]},
  {title:"Sleep and Memory Consolidation",
   text:"The idea that sleep serves memory has moved in thirty years from speculation to something close to consensus, though the details remain vigorously argued. Early studies simply compared recall after a night of sleep with recall after an equivalent period of wakefulness, and found an advantage for sleep. Critics pointed out that the wake condition was confounded: participants were tired, distracted, and exposed to interference.\n\nModern designs are more careful. In a typical experiment, participants learn a list of word pairs in the evening. One group sleeps in the laboratory, with polysomnography recording brain activity; another stays awake under supervision. Both groups are tested at the same clock time the next day. The sleep advantage survives these controls, and it is not uniform: declarative memories, such as facts and word pairs, benefit most from slow-wave sleep early in the night, while procedural skills, such as playing a musical sequence, appear to depend on REM sleep in the early morning.\n\nThis division has a practical corollary. Pulling an all-nighter before an exam removes exactly the sleep stage most useful for the material being tested. Students who study until three in the morning and sleep for four hours may retain less than those who stop at eleven and sleep seven.",
   qs:[
     {q:"What was the main criticism of early sleep-and-memory studies?", c:["They used too few participants","The comparison condition was not equivalent","They relied on unreliable brain recordings","They tested only procedural skills"], a:1, x:"'the wake condition was confounded' — tidak sebanding."},
     {q:"The word 'confounded' in paragraph 1 is closest in meaning to", c:["confirmed","confused with other factors","replicated","measured precisely"], a:1, x:"Konteks: peserta mengantuk & terganggu → variabel lain ikut masuk."},
     {q:"According to the passage, slow-wave sleep is most associated with", c:["procedural skills","declarative memory","emotional regulation","physical recovery"], a:1, x:"'declarative memories ... benefit most from slow-wave sleep early in the night'."},
     {q:"Why does the author mention an all-nighter before an exam?", c:["To illustrate a practical implication of the findings","To criticize students' study habits","To introduce a new experiment","To question the value of exams"], a:0, x:"Contoh konsekuensi praktis dari pembagian tahap tidur."},
     {q:"Which of the following can be inferred about REM sleep?", c:["It occurs mostly in the first half of the night","It is more important for facts than for skills","It is concentrated in the early morning hours","It has no role in memory"], a:2, x:"'REM sleep in the early morning' — implikasinya terkonsentrasi di jam-jam itu."}
   ]},
  {title:"The Cost of Urban Trees",
   text:"Municipal tree-planting programs are popular because the benefits are easy to describe: shade that lowers surface temperature, interception of rainfall that reduces runoff, filtration of particulates, and measurable effects on property values and even on residents' reported well-being. A widely cited figure holds that a mature street tree returns two to five times its planting cost in services each year.\n\nThose numbers deserve scrutiny. The benefits are real but unevenly distributed, and they depend heavily on survival. In many cities, a third or more of newly planted street trees die within five years, most often from drought stress during the establishment period, mechanical damage, or simply insufficient watering by the agency that planted them. A tree that dies in year three has delivered almost nothing and cost as much as one that lives.\n\nThere is also a distributional question. Canopy cover in most North American cities correlates more strongly with income than with any biophysical variable. Wealthier neighborhoods have more trees, and therefore more shade, cleaner air, and lower summer electricity bills. Planting programs that ignore this pattern can widen the gap they are meant to close, particularly when new trees go to neighborhoods that lack the staff and budgets to maintain them.",
   qs:[
     {q:"What is the author's main point about the benefits of urban trees?", c:["They are exaggerated beyond any real value","They are real but conditional on survival and distribution","They apply only to wealthy neighborhoods","They cannot be measured"], a:1, x:"Manfaat nyata, tapi bergantung pada survival & pemerataan."},
     {q:"The word 'scrutiny' in paragraph 2 is closest in meaning to", c:["close examination","enthusiastic support","financial accounting","public criticism"], a:0, x:"'Those numbers deserve scrutiny' = perlu diperiksa teliti."},
     {q:"According to the passage, what is the most common reason newly planted trees fail?", c:["Pests","Drought stress during establishment","Vandalism","Soil contamination"], a:1, x:"'most often from drought stress during the establishment period'."},
     {q:"What does the author suggest about canopy cover and income?", c:["They are unrelated","They are strongly correlated","Income causes trees to grow faster","Wealthy areas have fewer trees"], a:1, x:"'correlates more strongly with income than with any biophysical variable'."},
     {q:"The author's attitude toward planting programs that ignore distribution is", c:["approving","cautious and critical","neutral","enthusiastic"], a:1, x:"'can widen the gap they are meant to close' — kritik yang hati-hati."}
   ]}
],

vocab: [
  {w:"abandon", p:"v", d:"meninggalkan sepenuhnya", e:"The researchers abandoned the hypothesis after the second trial."},
  {w:"abstract", p:"adj", d:"abstrak, tidak konkret", e:"Abstract concepts are harder to memorize than concrete examples."},
  {w:"accumulate", p:"v", d:"menumpuk, mengumpulkan", e:"Sediment accumulated slowly over millions of years."},
  {w:"adequate", p:"adj", d:"memadai, cukup", e:"The sample size was not adequate for a reliable conclusion."},
  {w:"adjacent", p:"adj", d:"berdekatan", e:"The laboratory is adjacent to the main lecture hall."},
  {w:"advocate", p:"v", d:"mendukung, menganjurkan", e:"She advocates a shift toward renewable energy."},
  {w:"alleviate", p:"v", d:"meringankan", e:"The new policy is intended to alleviate traffic congestion."},
  {w:"ambiguous", p:"adj", d:"ambigu, bermakna ganda", e:"The results were ambiguous and required further testing."},
  {w:"anticipate", p:"v", d:"mengantisipasi, memperkirakan", e:"Economists did not anticipate the sharp decline in demand."},
  {w:"arbitrary", p:"adj", d:"sewenang-wenang, sembarang", e:"The cutoff score seemed arbitrary rather than principled."},
  {w:"attribute", p:"v", d:"mengaitkan, menghubungkan", e:"Researchers attribute the decline to habitat loss."},
  {w:"coherent", p:"adj", d:"koheren, runtut", e:"A coherent argument needs evidence, not just assertion."},
  {w:"compensate", p:"v", d:"mengimbangi, memberi kompensasi", e:"The plant compensates for low light by growing taller."},
  {w:"comprehensive", p:"adj", d:"menyeluruh", e:"The report offers a comprehensive review of the literature."},
  {w:"constitute", p:"v", d:"membentuk, merupakan", e:"Women constitute more than half of the graduating class."},
  {w:"contradict", p:"v", d:"bertentangan dengan", e:"The new data contradict the earlier findings."},
  {w:"controversy", p:"n", d:"kontroversi, perdebatan", e:"The excavation sparked controversy among local historians."},
  {w:"correlate", p:"v", d:"berkorelasi", e:"Income correlates strongly with years of schooling."},
  {w:"derive", p:"v", d:"memperoleh, berasal dari", e:"The word derives from a Latin root."},
  {w:"diminish", p:"v", d:"berkurang, menyusut", e:"Public interest diminished after the first month."},
  {w:"distinct", p:"adj", d:"berbeda, jelas", e:"The two species are morphologically distinct."},
  {w:"elaborate", p:"v", d:"menjelaskan lebih rinci", e:"Could you elaborate on the second point?"},
  {w:"empirical", p:"adj", d:"berbasis pengamatan/data", e:"The theory lacks empirical support."},
  {w:"enhance", p:"v", d:"meningkatkan", e:"Regular review enhances long-term retention."},
  {w:"explicit", p:"adj", d:"tersurat, jelas", e:"The instructions were explicit about the deadline."},
  {w:"facilitate", p:"v", d:"memfasilitasi, mempermudah", e:"Small group discussion facilitates participation."},
  {w:"feasible", p:"adj", d:"layak, dapat dilakukan", e:"The plan is feasible only with additional funding."},
  {w:"framework", p:"n", d:"kerangka kerja", e:"The study uses a comparative framework."},
  {w:"hypothesis", p:"n", d:"hipotesis", e:"The hypothesis was tested against three datasets."},
  {w:"implication", p:"n", d:"implikasi, konsekuensi", e:"The policy has serious implications for rural schools."},
  {w:"incentive", p:"n", d:"insentif, dorongan", e:"Tax breaks create an incentive to invest."},
  {w:"inevitable", p:"adj", d:"tak terhindarkan", e:"Some loss of accuracy is inevitable in the conversion."},
  {w:"integrate", p:"v", d:"memadukan", e:"The course integrates theory with field practice."},
  {w:"intrinsic", p:"adj", d:"melekat, intrinsik", e:"Curiosity has intrinsic value beyond grades."},
  {w:"justify", p:"v", d:"membenarkan, mendasari", e:"The cost is hard to justify given the modest gains."},
  {w:"manipulate", p:"v", d:"memanipulasi, mengolah", e:"Students learn to manipulate large datasets."},
  {w:"notion", p:"n", d:"gagasan, anggapan", e:"The notion that talent is fixed has been challenged."},
  {w:"obscure", p:"adj", d:"tidak jelas, samar", e:"The cause of the collapse remains obscure."},
  {w:"preliminary", p:"adj", d:"pendahuluan, awal", e:"Preliminary results look promising."},
  {w:"profound", p:"adj", d:"mendalam, besar", e:"The invention had a profound effect on trade."}
],

build: [
  {words:["the","has","research","shown","that","sleep","improves","memory"], ans:"the research has shown that sleep improves memory",
   x:"Subject 'the research' (singular) + has shown + that-clause."},
  {words:["neither","of","the","students","had","read","the","assignment"], ans:"neither of the students had read the assignment",
   x:"'Neither of + plural noun' + verb singular (had)."},
  {words:["it","was","not","until","1990","that","the","law","was","changed"], ans:"it was not until 1990 that the law was changed",
   x:"Cleft: It was not until X that Y."},
  {words:["despite","the","delay","the","project","was","completed","on","time"], ans:"despite the delay the project was completed on time",
   x:"'Despite + noun phrase', tanpa 'of'."},
  {words:["the","professor","suggested","that","we","submit","the","draft","early"], ans:"the professor suggested that we submit the draft early",
   x:"Subjunctive: suggest that + subject + base verb (submit)."},
  {words:["she","is","one","of","the","few","researchers","who","have","published","twice"], ans:"she is one of the few researchers who have published twice",
   x:"'Who' merujuk ke 'researchers' (plural) → have."},
  {words:["the","more","you","practice","the","more","confident","you","become"], ans:"the more you practice the more confident you become",
   x:"Pola 'the more ..., the more ...'."},
  {words:["rarely","have","we","seen","such","a","rapid","change"], ans:"rarely have we seen such a rapid change",
   x:"Adverb negatif di awal → inversi: have we seen."},
  {words:["the","data","that","were","collected","last","year","are","still","being","analyzed"], ans:"the data that were collected last year are still being analyzed",
   x:"'Data' plural → were / are. Passive continuous: are being analyzed."},
  {words:["if","i","had","known","about","the","deadline","i","would","have","applied"], ans:"if i had known about the deadline i would have applied",
   x:"Conditional type 3: if + past perfect, would have + V3."},
  {words:["not","only","did","she","finish","the","report","but","she","also","presented","it"], ans:"not only did she finish the report but she also presented it",
   x:"'Not only' di awal clause → inversi did + subject + base verb."},
  {words:["the","building","which","was","designed","in","1920","has","been","renovated"], ans:"the building which was designed in 1920 has been renovated",
   x:"Relative clause pasif + present perfect passive di main clause."}
],

email: [
  {situation:"You missed a midterm exam because you were hospitalized. You need to ask your professor for a make-up exam.",
   to:"Professor Martinez", bullet:["explain why you missed the exam","say what documentation you can provide","ask about a make-up date"]},
  {situation:"You are a student who wants to join a research group. Write to the lab coordinator.",
   to:"Dr. Chen, lab coordinator", bullet:["state your program and year","explain your relevant background","ask whether there are openings"]},
  {situation:"You received a book from the library that is damaged. Write to the library.",
   to:"Circulation Desk", bullet:["describe the damage","state when you borrowed it","ask what you should do"]},
  {situation:"You want to switch one of your elective courses. Write to your academic advisor.",
   to:"Advisor", bullet:["name the course you want to drop","name the course you want to add","give one reason for the change"]},
  {situation:"You are organizing a student seminar and want a local business to sponsor refreshments.",
   to:"Owner of a local cafe", bullet:["introduce the event","explain what sponsorship would involve","ask for a meeting"]}
],

discussion: [
  {course:"Introduction to Sociology",
   prof:"This week we discussed whether standardized testing measures ability or merely resources. Some researchers argue that test scores mostly reflect access to preparation. Others point out that scores still predict later academic performance. What do you think: should universities keep requiring standardized tests?",
   s1:["Daniel","I think they should drop the requirement. My school offered no test prep at all, and my score reflected that gap, not my ability. Numbers look objective but they carry the resources behind them."],
   s2:["Priya","I understand that, but dropping the test doesn't remove the advantage — it just moves it to essays and extracurriculars, which cost more. At least a test is a common yardstick. Maybe the answer is free prep, not abolition."],
   ask:"Respond to Daniel and Priya. State your own position and explain why, using a specific example or reason."},
  {course:"Environmental Science",
   prof:"We looked at individual vs. systemic approaches to reducing emissions. Personal choices matter, but their aggregate effect is limited without infrastructure change. Should policy focus on changing consumer behavior or on changing the systems consumers depend on?",
   s1:["Marco","Systems first. I can recycle all I want, but if my city has no public transit, I still need a car. Individual action without infrastructure is mostly symbolic."],
   s2:["Lena","That's fair, but systems don't change unless enough individuals demand it. Policy follows public pressure. Personal choices are how that pressure becomes visible and political."],
   ask:"Respond to Marco and Lena. State your position and support it with a specific example."},
  {course:"Developmental Psychology",
   prof:"We examined whether early childhood education programs produce lasting cognitive gains. Some longitudinal studies show effects fading by adolescence; others show persistent effects on outcomes like graduation rates. How should we interpret this?",
   s1:["Aisha","If the test-score gains fade, the program failed. The point was cognitive improvement, and it didn't hold."],
   s2:["Tom","I think that's too narrow. A program can change trajectories without permanently raising test scores — better habits, better peer networks, better self-concept. Those aren't measured by an IQ test."],
   ask:"Respond to Aisha and Tom. Explain your view and give a reason."},
  {course:"Introduction to Economics",
   prof:"We discussed congestion pricing: charging drivers to enter a busy city center during peak hours. Proponents cite reduced traffic; critics cite regressive effects on lower-income drivers. What is your assessment?",
   s1:["Sofia","It's efficient but unfair. A flat fee takes a bigger share of a low-income driver's budget, and many people have no alternative to driving."],
   s2:["Kai","The revenue can be recycled into transit, which mostly serves lower-income riders. Judged as a package rather than a fee, it can be progressive."],
   ask:"Respond to Sofia and Kai. State your assessment and support it."}
],

speakRepeat: [
  {text:"The library will be closed on Monday for maintenance."},
  {text:"Students are encouraged to submit their applications before the end of the month."},
  {text:"The experiment produced results that contradicted the original hypothesis."},
  {text:"Please remember to bring your student identification card to the examination."},
  {text:"Most of the participants reported a significant improvement in concentration."},
  {text:"The professor postponed the lecture until the following Wednesday afternoon."}
],

speakInter: [
  {q:"Tell me about a subject you found difficult at first but eventually enjoyed. What changed?"},
  {q:"Describe a time you had to explain something complicated to someone who did not know the topic."},
  {q:"Some students prefer studying alone; others prefer groups. Which do you prefer and why?"},
  {q:"What is one skill you would like to learn in the next year, and how would you approach it?"},
  {q:"Do you think university grades are a fair measure of a student's ability? Why or why not?"}
]
};
