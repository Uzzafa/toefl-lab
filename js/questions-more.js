/* TOEFL LAB - bank soal tambahan (dimuat sebelum app.js)
   Dipakai untuk melengkapi Full ITP Simulation (140 soal) + iBT Writing/Speaking set.
   Format sama dengan questions.js.
*/
window.TOEFL_MORE = {

/* ============ LISTENING PART A : 18 dialog baru ============ */
listeningA: [
  {spk:[["Man","I can't believe the bookstore is out of the textbook again."],["Woman","Third time this month."]],
   q:"What do the speakers imply about the textbook?", c:["It is very popular this week.","It is frequently unavailable.","It was recently reprinted.","It is cheaper online."], a:1,
   x:"'Third time this month' = sudah berkali-kali kosong. Nada keluhan."},
  {spk:[["Woman","Should I wait for the professor or just leave the paper on her desk?"],["Man","She usually comes back after lunch."]],
   q:"What does the man suggest?", c:["Leaving the paper and going home","Waiting until the professor returns","Coming back tomorrow","Emailing the paper"], a:1,
   x:"Dia memberi info bahwa profesor kembali setelah makan siang → implikasinya tunggu."},
  {spk:[["Man","The concert starts at eight, right?"],["Woman","Seven-thirty, actually. Better leave earlier than you planned."]],
   q:"What does the woman tell the man?", c:["The concert was cancelled","He has the wrong start time","She will meet him at eight","Tickets are sold out"], a:1,
   x:"'Seven-thirty, actually' = koreksi jam mulai."},
  {spk:[["Woman","I heard you turned down the internship."],["Man","Only because it was unpaid."]],
   q:"Why did the man decline the internship?", c:["It was too far away","It offered no salary","He was not qualified","He preferred another offer"], a:1,
   x:"'Only because it was unpaid' = satu-satunya alasan: tidak dibayar."},
  {spk:[["Man","How did you manage to get all that reading done?"],["Woman","I skimmed the last two chapters."]],
   q:"What does the woman mean?", c:["She read everything carefully","She read part of the material quickly","She skipped the whole book","She had help from a friend"], a:1,
   x:"'Skimmed' = baca cepat/seleksi, bukan detail."},
  {spk:[["Woman","Do you have the notes from Tuesday's lecture?"],["Man","I was hoping you did."]],
   q:"What can be inferred?", c:["The man has the notes","Neither of them has the notes","The lecture was cancelled","The woman took detailed notes"], a:1,
   x:"'I was hoping you did' = dia juga tidak punya."},
  {spk:[["Man","The printer in the lab is jammed again."],["Woman","There's one on the second floor that actually works."]],
   q:"What does the woman recommend?", c:["Repairing the lab printer","Using a different printer","Printing at home","Waiting for a technician"], a:1,
   x:"Dia menunjuk printer lain yang berfungsi."},
  {spk:[["Woman","You look like you haven't slept."],["Man","The deadline got moved up two days."]],
   q:"What does the man explain?", c:["He has insomnia","He stayed up working","He was traveling","He overslept"], a:1,
   x:"Deadline dimajukan → dia lembur."},
  {spk:[["Man","Is Professor Ito strict about attendance?"],["Woman","Let's just say he noticed when I missed one class."]],
   q:"What does the woman imply about the professor?", c:["He does not take attendance","He pays close attention to attendance","He cancels classes often","He is new to the department"], a:1,
   x:"'He noticed when I missed one class' = sangat memperhatikan kehadiran."},
  {spk:[["Woman","I thought you were going to major in chemistry."],["Man","I was, until I took organic."]],
   q:"What happened to the man's plans?", c:["He graduated in chemistry","He changed his major","He is still undecided","He failed the course"], a:1,
   x:"'until I took organic' = mata kuliah itu mengubah rencananya."},
  {spk:[["Man","Can you review my draft before I submit it?"],["Woman","Give me until tomorrow morning."]],
   q:"What does the woman mean?", c:["She refuses to help","She will review it by tomorrow","She already read it","She wants him to submit now"], a:1,
   x:"Minta waktu sampai besok pagi = setuju dengan penundaan."},
  {spk:[["Woman","The cafeteria's new menu is getting a lot of complaints."],["Man","Not from me. I've eaten there every day this week."]],
   q:"What is the man's opinion of the new menu?", c:["He dislikes it","He thinks it is acceptable","He has not tried it","He complains too"], a:1,
   x:"'Not from me ... every day this week' = dia suka."},
  {spk:[["Man","Did the shipment arrive?"],["Woman","It's supposed to be here Thursday."]],
   q:"What does the woman say about the shipment?", c:["It has arrived","It is expected later in the week","It was cancelled","It arrived damaged"], a:1,
   x:"'supposed to be here Thursday' = belum tiba."},
  {spk:[["Woman","I'm not sure I follow the second part of your argument."],["Man","Let me back up a bit."]],
   q:"What will the man probably do?", c:["End the discussion","Repeat an earlier explanation","Change his conclusion","Ask the woman a question"], a:1,
   x:"'Back up a bit' = kembali ke penjelasan sebelumnya."},
  {spk:[["Man","How's the group project going?"],["Woman","Two of the four of us have dropped the course."]],
   q:"What is the problem with the project?", c:["The deadline was moved","The group is now too small","The topic was rejected","The professor is unavailable"], a:1,
   x:"Dari 4 jadi 2 anggota → kelompok menyusut."},
  {spk:[["Woman","Are you applying for the exchange program?"],["Man","I'd need a much better GPA than mine."]],
   q:"What does the man imply?", c:["He has already applied","He is unlikely to qualify","He does not want to go","The program is not competitive"], a:1,
   x:"'I'd need a much better GPA' = tidak memenuhi syarat."},
  {spk:[["Man","This chair is so uncomfortable."],["Woman","You should try the ones by the window."]],
   q:"What does the woman suggest?", c:["Standing for a while","Moving to a different seat","Bringing a cushion","Leaving the room"], a:1,
   x:"Dia menyarankan pindah ke kursi dekat jendela."},
  {spk:[["Woman","The library's online database has been down all morning."],["Man","So that's why nobody's in the reference room."]],
   q:"What does the man mean?", c:["The library is closed","The outage explains the empty room","He was unable to log in","The room is being renovated"], a:1,
   x:"'So that's why' = menyimpulkan sebab dari akibat yang dia lihat."}
],

/* ============ WRITTEN EXPRESSION : 10 tambahan ============ */
written: [
  {parts:[{l:"A",t:"The students were"},{l:"B",t:"very interesting in"},{l:"C",t:"the lecture"},{l:"D",t:"about volcanoes."}], a:1,
   x:"Untuk orang yang merasa tertarik pakai 'interested in', bukan 'interesting'. 'Interesting' menggambarkan benda."},
  {parts:[{l:"A",t:"She has been studying"},{l:"B",t:"English"},{l:"C",t:"for she was"},{l:"D",t:"ten years old."}], a:2,
   x:"Titik awal di masa lalu pakai 'since she was', bukan 'for she was'."},
  {parts:[{l:"A",t:"The more"},{l:"B",t:"easier"},{l:"C",t:"the test is,"},{l:"D",t:"the faster students finish."}], a:1,
   x:"Double comparative: 'the more easier' salah. Cukup 'the easier'."},
  {parts:[{l:"A",t:"Neither the manager"},{l:"B",t:"or"},{l:"C",t:"the employees"},{l:"D",t:"were informed."}], a:1,
   x:"Pasangan yang benar 'neither ... nor', bukan 'neither ... or'."},
  {parts:[{l:"A",t:"The research findings"},{l:"B",t:"suggests"},{l:"C",t:"a strong correlation"},{l:"D",t:"between the variables."}], a:1,
   x:"'Findings' plural → suggest, bukan suggests."},
  {parts:[{l:"A",t:"He explained"},{l:"B",t:"me"},{l:"C",t:"the procedure"},{l:"D",t:"in detail."}], a:1,
   x:"'Explain' butuh 'to': 'explained the procedure to me'."},
  {parts:[{l:"A",t:"It is important"},{l:"B",t:"that every student"},{l:"C",t:"brings"},{l:"D",t:"an identification card."}], a:2,
   x:"Subjunctive setelah 'It is important that' → bring (base form)."},
  {parts:[{l:"A",t:"The amount of"},{l:"B",t:"students"},{l:"C",t:"in the auditorium"},{l:"D",t:"was surprising."}], a:0,
   x:"Benda yang bisa dihitung (students) pakai 'the number of', bukan 'the amount of'."},
  {parts:[{l:"A",t:"She is used to"},{l:"B",t:"work"},{l:"C",t:"late"},{l:"D",t:"every night."}], a:1,
   x:"'Be used to + V-ing' → working. (Beda dengan 'used to work' = dulu biasa)."},
  {parts:[{l:"A",t:"The woman"},{l:"B",t:"which"},{l:"C",t:"called yesterday"},{l:"D",t:"was my advisor."}], a:1,
   x:"Antecedent orang → who, bukan which."}
],

/* ============ LISTENING PART B : percakapan panjang ============ */
listeningB: [
  {title:"Part B - Housing office",
   spk:[["Student","Hi, I'm here about the room reassignment. My roommate moved out at the end of last term and I've been paying the full double rate by myself since September."],
        ["Officer","I see. That happens more than you'd think. Let me check whether the room has been flagged for reassignment. ... It hasn't. That's our error."],
        ["Student","So what happens now?"],
        ["Officer","I can retroactively adjust your billing to the single rate from September, and I'll put your room at the top of the reassignment list. The credit should show on your account within two billing cycles."],
        ["Student","Two cycles? The next payment is due in ten days."],
        ["Officer","I'll attach a note to your file so the payment office holds the charge until the credit clears. Just bring this reference number with you."]],
   qs:[
     {q:"What is the student's problem?", c:["He was assigned the wrong room","He has been paying double the correct rate","His roommate damaged the room","He wants to move off campus"], a:1, x:"Dia membayar tarif kamar double padahal tinggal sendiri."},
     {q:"What does the officer admit?", c:["The student owes extra money","The office failed to flag the room","The building is being renovated","The student missed a deadline"], a:1, x:"'It hasn't. That's our error.'"},
     {q:"What will the officer do about the billing?", c:["Refund the entire term","Adjust the rate retroactively to September","Charge a processing fee","Cancel the next payment permanently"], a:1, x:"'retroactively adjust your billing to the single rate from September'."},
     {q:"Why does the student mention the next payment?", c:["He wants to pay early","He is worried the credit will arrive too late","He cannot afford the deposit","He is leaving the program"], a:1, x:"Kredit butuh dua siklus, pembayaran berikutnya 10 hari → timing jadi masalah."},
     {q:"What does the officer give the student at the end?", c:["A new room key","A reference number","A refund check","A billing statement"], a:1, x:"'Just bring this reference number with you.'"}
   ]}],

/* ============ LISTENING PART C : mini lecture ============ */
listeningC: [
  {title:"Part C - Geology",
   spk:[["Professor","In 1815 a volcano called Tambora erupted in what is now Indonesia. It was the largest eruption in recorded history, and its effects were felt for years afterward. The eruption injected so much sulfur dioxide into the stratosphere that global average temperatures dropped by roughly half a degree Celsius. In 1816, parts of New England and Europe had snow in June and frost in every summer month. Crops failed across the northern hemisphere. Historians sometimes call 1816 the year without a summer.\n\nNow here is the part that surprises students. A single volcanic event changed agriculture, prices, and migration patterns across three continents. It also, indirectly, produced some famous literature. A group of writers stranded indoors by the bad weather in Switzerland in 1816 challenged each other to write ghost stories. One of them, Mary Shelley, produced Frankenstein. The point is not that volcanoes cause novels. The point is that the climate system connects things that look unrelated."]],
   qs:[
     {q:"What is the main topic of the talk?", c:["The causes of volcanic eruptions","The far-reaching effects of a single eruption","The history of European agriculture","The writing of Frankenstein"], a:1, x:"Fokus: dampak luas dari satu letusan."},
     {q:"How did the eruption affect global temperature?", c:["It raised it slightly","It lowered it by about half a degree","It had no measurable effect","It caused a permanent shift"], a:1, x:"'dropped by roughly half a degree Celsius'."},
     {q:"Why does the professor mention Mary Shelley?", c:["To show an unexpected consequence of the event","To prove the eruption caused the novel","To explain the weather in Switzerland","To criticize literary history"], a:0, x:"Dia sendiri bilang: bukan sebab-akibat langsung, tapi contoh keterkaitan."},
     {q:"What is the professor's main point at the end?", c:["Volcanoes are unpredictable","Climate links apparently unrelated events","Literature depends on weather","1816 was unusually cold"], a:1, x:"'the climate system connects things that look unrelated'."},
     {q:"Why were the writers in Switzerland together in 1816?", c:["They were attending a conference","They were stranded indoors by the weather","They were researching volcanoes","They were employed by a publisher"], a:1, x:"'stranded indoors by the bad weather in Switzerland'."}
   ]}
],

/* ============ READING : 2 passage baru, 10 soal masing-masing ============ */
reading: [
  {title:"The Invention of Paper Money",
   text:"The first paper currency did not appear in Europe but in Song dynasty China, in the eleventh century. Its ancestor was the deposit receipt. Merchants trading in iron coins faced a practical problem: the coins were heavy, and a large transaction could require a cart. Receipts issued by reputable shops, promising payment on demand, began circulating instead of the metal itself.\n\nPrivate issuance created a predictable difficulty. Shops failed, receipts were forged, and the supply of notes outran the reserves backing them. In the 1020s the Sichuan government took over issuance, and for a time the system worked: notes were accepted for tax payments, their supply was limited, and they carried a printed warning that counterfeiting was punishable by death.\n\nThe weakness was not technological but political. A note issue costs almost nothing to produce, and governments under fiscal pressure discover this quickly. By the thirteenth century, Song and then Yuan authorities were issuing notes far in excess of reserves. The result was the pattern that would recur for the next eight centuries: rapid inflation, loss of confidence, and eventual abandonment of the currency.\n\nMarco Polo reported the system to Europe with evident astonishment, but Europe did not adopt it for another three hundred years. The delay was not ignorance. European rulers had watched what happened to Chinese paper money, and the lesson they drew was that a ruler who can print money will print too much.",
   qs:[
     {q:"What was the immediate ancestor of paper money in China?", c:["Tax receipts","Iron coins","Deposit receipts issued by merchants","Government bonds"], a:2, x:"'Its ancestor was the deposit receipt.'"},
     {q:"Why did merchants prefer receipts to coins?", c:["Coins were counterfeit","Coins were heavy and inconvenient","Receipts earned interest","Coins were taxed"], a:1, x:"'the coins were heavy, and a large transaction could require a cart'."},
     {q:"The word 'reputable' in paragraph 1 is closest in meaning to", c:["well known and trusted","wealthy","large","licensed"], a:0, x:"Konteks: toko yang dipercaya mengeluarkan resi."},
     {q:"Why did the government take over issuance in the 1020s?", c:["To increase tax revenue","To address failures of private issuance","To fund military campaigns","To standardize handwriting"], a:1, x:"Sebab: toko bangkrut, pemalsuan, uang beredar melebihi cadangan."},
     {q:"According to the passage, the printed warning on notes was intended to", c:["inform users of exchange rates","deter counterfeiting","identify the issuing office","record the date of issue"], a:1, x:"'a printed warning that counterfeiting was punishable by death'."},
     {q:"What does the author identify as the fundamental weakness of the system?", c:["Poor printing technology","Political pressure to overissue","Lack of public acceptance","Competition from coins"], a:1, x:"'The weakness was not technological but political.'"},
     {q:"The word 'abandonment' in paragraph 3 is closest in meaning to", c:["giving up","redesigning","expanding","taxing"], a:0, x:"Inflasi → kepercayaan hilang → mata uang ditinggalkan."},
     {q:"What does the passage say about Marco Polo's report?", c:["It convinced Europe to adopt paper money","It described the system with surprise","It was ignored entirely","It exaggerated the inflation"], a:1, x:"'with evident astonishment' = heran/kagum."},
     {q:"Why does the author say the European delay was 'not ignorance'?", c:["Europeans had no contact with China","Europeans had learned from China's inflation","Europe lacked paper","Europe preferred barter"], a:1, x:"'the lesson they drew was that a ruler who can print money will print too much'."},
     {q:"Which statement best summarizes the passage?", c:["Paper money succeeded because of printing technology","Paper money emerged from trade needs and failed when overissued","China invented banking","Coins were superior to paper in every respect"], a:1, x:"Ringkasan: asal dari kebutuhan dagang, gagal karena overissue."}
   ]},
  {title:"Magnetoreception in Migratory Animals",
   text:"How a monarch butterfly finds a specific grove in central Mexico after a journey of four thousand kilometers, having never made the trip before, is a question that resisted explanation for most of the twentieth century. The leading candidate is magnetoreception: the ability to detect the earth's magnetic field.\n\nThe evidence is largely behavioral and, by the standards of molecular biology, indirect. Researchers place an animal in a chamber surrounded by coils that cancel or rotate the ambient field, and observe whether its orientation changes. In many species it does. But demonstrating that an animal responds to a magnetic field is not the same as identifying the sensor that detects it.\n\nTwo mechanisms have been proposed. The first is a chain of magnetite crystals, an iron mineral, found in various tissues and capable of physically aligning with a field. The second is a chemical process in the retina involving a protein called cryptochrome, in which a light-driven reaction produces pairs of radicals whose fate depends on magnetic orientation. The cryptochrome hypothesis has the advantage of explaining why many magnetic responses require light; it has the disadvantage of being extraordinarily difficult to test in a living animal.\n\nWhat has changed recently is that researchers have stopped expecting a single answer. Some evidence suggests birds may use both systems for different tasks, with the magnetite pathway providing a compass sense and the cryptochrome pathway contributing something more like a map. If that is correct, the question is not which mechanism is right but how the two are integrated.",
   qs:[
     {q:"What is the passage mainly about?", c:["The migration route of monarch butterflies","Competing explanations for magnetic sensing in animals","The chemistry of the retina","How to build magnetic coils"], a:1, x:"Fokus: dua mekanisme yang bersaing + sintesis."},
     {q:"Why is the monarch butterfly mentioned?", c:["It is the only animal with magnetoreception","It illustrates a navigational feat that needs explanation","It was the first species tested in coils","It has no cryptochrome"], a:1, x:"Contoh pembuka: kemampuan navigasi yang sulit dijelaskan."},
     {q:"The word 'ambient' in paragraph 2 is closest in meaning to", c:["surrounding","artificial","weak","changing"], a:0, x:"'ambient field' = medan di sekeliling."},
     {q:"What does the author say about the behavioral evidence?", c:["It is conclusive","It is indirect","It has been disproven","It relies on genetics"], a:1, x:"'largely behavioral and ... indirect'."},
     {q:"What is the magnetite hypothesis based on?", c:["A protein in the retina","Iron crystals that align with a field","Light sensitivity","Radical pairs"], a:1, x:"'a chain of magnetite crystals ... capable of physically aligning with a field'."},
     {q:"What advantage does the cryptochrome hypothesis have?", c:["It is easy to test","It explains why light is often required","It requires no protein","It works without a magnetic field"], a:1, x:"'explaining why many magnetic responses require light'."},
     {q:"The word 'extraordinarily' in paragraph 3 is closest in meaning to", c:["unusually","quickly","slightly","deliberately"], a:0, x:"'extraordinarily difficult' = luar biasa sulit."},
     {q:"What has changed in researchers' expectations recently?", c:["They now reject magnetoreception","They no longer expect a single mechanism","They focus only on butterflies","They have abandoned laboratory work"], a:1, x:"'researchers have stopped expecting a single answer'."},
     {q:"According to the passage, the two systems may serve", c:["identical functions","different functions, compass and map","no function at all","only nocturnal navigation"], a:1, x:"'magnetite ... compass sense and cryptochrome ... something more like a map'."},
     {q:"Which question does the passage say remains open?", c:["Whether animals migrate at all","How the two mechanisms are integrated","Whether the earth has a magnetic field","Why monarchs are orange"], a:1, x:"'the question is not which mechanism is right but how the two are integrated'."}
   ]}
],

/* ============ READING : soal tambahan untuk 3 passage lama (digabung by title) ============ */
readingAdd: [
  {title:"The Great Dying", qs:[
    {q:"The author mentions 'perhaps two million years' primarily to", c:["date the extinction precisely","indicate the long duration of the eruptions","compare it with human history","suggest the volcanoes were small"], a:1, x:"Angka itu menekankan lamanya periode erupsi."},
    {q:"According to paragraph 2, what happens to sulfur aerosols over time?", c:["They remain for millennia","They fall out of the atmosphere within a few years","They convert to carbon dioxide","They cool the ocean permanently"], a:1, x:"'they fall out within a few years'."},
    {q:"The phrase 'geologically instantaneous' in the final paragraph suggests the extinction pulse was", c:["very short by geological standards","impossible to date","gradual over millions of years","caused by a single eruption"], a:0, x:"'well under a hundred thousand years' = singkat dalam skala geologi."},
    {q:"Which of the following is NOT mentioned as a possible source of the carbon?", c:["Volcanism","Burning coal deposits","Destabilized methane hydrates","Decaying vegetation"], a:3, x:"Tiga sumber disebut; vegetasi membusuk tidak."},
    {q:"The passage supports which statement about the deep ocean?", c:["It stayed well oxygenated","It may have lost dissolved oxygen","It cooled the atmosphere","It absorbed all the sulfur"], a:1, x:"'the deep ocean can become anoxic'."}
  ]},
  {title:"Sleep and Memory Consolidation", qs:[
    {q:"The word 'vigorously' in paragraph 1 is closest in meaning to", c:["energetically","briefly","quietly","rarely"], a:0, x:"'remains vigorously argued' = diperdebatkan dengan keras."},
    {q:"Why does the author call modern designs 'more careful'?", c:["They use larger samples","They control for time of day and interference","They rely on self-report","They avoid laboratory settings"], a:1, x:"Kedua kelompok diuji pada jam yang sama dan kondisi dikontrol."},
    {q:"According to the passage, procedural skills appear to depend on", c:["slow-wave sleep","REM sleep","total sleep time","nap duration"], a:1, x:"'procedural skills ... appear to depend on REM sleep'."},
    {q:"What does testing 'at the same clock time' control for?", c:["Participant motivation","Circadian timing differences","Vocabulary difficulty","Room temperature"], a:1, x:"Supaya perbedaan jam biologis tidak jadi variabel pengganggu."},
    {q:"Which best states the author's conclusion about all-nighters?", c:["They are effective for short exams","They remove the sleep stage most useful for the material","They improve procedural skills","They have no effect on memory"], a:1, x:"'removes exactly the sleep stage most useful for the material being tested'."}
  ]},
  {title:"The Cost of Urban Trees", qs:[
    {q:"The word 'interception' in paragraph 1 is closest in meaning to", c:["catching","replacing","filtering","heating"], a:0, x:"'interception of rainfall that reduces runoff' = menangkap air hujan."},
    {q:"Why does the author question the 'two to five times' figure?", c:["It was never published","Benefits depend on survival and are unevenly distributed","It ignores property values","It was measured in one city"], a:1, x:"Angka itu dianggap perlu diperiksa karena bergantung pada survival & pemerataan."},
    {q:"A tree that dies in year three is mentioned to illustrate", c:["the low survival rate of new plantings","the cost of pesticides","the value of mature trees","the effect of soil quality"], a:0, x:"Contoh bahwa pohon mati tetap memakan biaya tanpa memberi manfaat."},
    {q:"According to the passage, canopy cover correlates most strongly with", c:["rainfall","income","latitude","soil type"], a:1, x:"'correlates more strongly with income than with any biophysical variable'."},
    {q:"What does the author suggest about planting in low-income neighborhoods?", c:["It always closes the gap","It may fail without maintenance budgets","It is unnecessary","It costs more per tree"], a:1, x:"'lack the staff and budgets to maintain them'."}
  ]}
],

/* ============ SPEAKING : tambahan untuk set penuh ============ */
speakRepeat: [
  {text:"The registration deadline has been extended by one week."},
  {text:"Researchers observed a marked decrease in the population over two seasons."},
  {text:"Please leave your bags at the front of the lecture hall."},
  {text:"The committee will announce its decision at the end of the semester."}
]

};
