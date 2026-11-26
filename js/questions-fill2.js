/* TOEFL LAB - bank soal tambahan #3
   Menutup sisa skill yang bank-nya masih di bawah 8 soal, supaya setiap chip drill
   punya minimal 8 soal. Semua soal ditulis sendiri, dipetakan ke skill resmi ETS.
*/
window.TOEFL_FILL2 = {

/* ============ STRUCTURE +9 : clause x1, verbform x2, compsubj x3, formusage x3 ============ */
structure: [
  {q:"____ the experiment failed remains unclear even after the review.", c:["Why","That","Which","What"], a:0,
   x:"Noun clause sebagai subject: 'Why the experiment failed' = kenapa gagal. 'That' akan mengubah makna jadi pernyataan, bukan pertanyaan sebab."},
  {q:"By next June, she ____ in this laboratory for ten years.", c:["will have been working","will be working","has worked","worked"], a:0,
   x:"'By next June' + durasi 'for ten years' → future perfect continuous: will have been working."},
  {q:"The samples ____ at minus eighty degrees until they are needed.", c:["are kept","keep","keeping","were keeping"], a:0,
   x:"Sampel disimpan (pasif) + kebiasaan sekarang → simple present passive: are kept."},
  {q:"The results were ____ than we had anticipated.", c:["more encouraging","most encouraging","encouraging","the more encouraging"], a:0,
   x:"Perbandingan dua hal + 'than' → comparative: more encouraging. 'The more' hanya untuk pola 'the more ..., the more ...'."},
  {q:"Of the three proposals submitted, hers was ____ practical.", c:["the most","most","more","the more"], a:0,
   x:"Tiga item → superlative: the most practical. 'More' hanya untuk dua item."},
  {q:"The committee demanded that the report ____ before Friday.", c:["be submitted","is submitted","will submit","submitting"], a:0,
   x:"Subjunctive setelah 'demanded that' + pasif → base form 'be submitted'."},
  {q:"She has ____ experience in fieldwork than her colleague does.", c:["less","fewer","little","least"], a:0,
   x:"'Experience' uncountable → less. 'Fewer' untuk benda yang bisa dihitung."},
  {q:"____ of the two theories fully explains the observed data.", c:["Neither","Both","All","Each of"], a:0,
   x:"Hanya dua teori + verb singular 'explains' → Neither. 'Both' butuh verb plural."},
  {q:"The laboratory equipment ____ replaced at considerable expense last year.", c:["was","were","have been","are"], a:0,
   x:"'Equipment' uncountable → singular: was replaced."}
],

/* ============ LISTENING PART A +6 : suggestion x3, meaning x3 ============ */
listeningA: [
  {spk:[["Man","I can't figure out which elective to take next term."],["Woman","Why not sit in on a class before you decide?"]],
   q:"What does the woman suggest?", c:["Dropping the elective requirement","Attending a class as a trial","Asking a different advisor","Waiting until next year"], a:1,
   x:"'Why not ...?' = bentuk saran. Menyarankan mencoba ikut kelas dulu sebelum memutuskan."},
  {spk:[["Woman","My laptop keeps shutting down without warning."],["Man","You might want to back up your files first."]],
   q:"What does the man suggest?", c:["Buying a new laptop","Backing up files immediately","Restarting the laptop","Contacting the manufacturer"], a:1,
   x:"'You might want to ...' = saran halus. Prioritas: amankan file dulu."},
  {spk:[["Man","I'm not sure my essay actually answers the question."],["Woman","Have you tried reading the prompt out loud?"]],
   q:"What does the woman suggest the man do?", c:["Rewrite the entire essay","Read the prompt aloud","Ask another student","Shorten the essay"], a:1,
   x:"'Have you tried ...?' = saran lewat pertanyaan. Membaca prompt keras-keras membantu mengecek kesesuaian."},

  {spk:[["Woman","How was the field trip to the wetland reserve?"],["Man","It was called off at the last minute."]],
   q:"What does the man mean?", c:["The trip was shortened","The trip did not take place","The trip was rescheduled","The trip was crowded"], a:1,
   x:"'Called off' = dibatalkan. Bukan ditunda."},
  {spk:[["Man","Did you get the research grant you applied for?"],["Woman","Not exactly — they offered about half of what I requested."]],
   q:"What does the woman mean?", c:["She received no funding","She received partial funding","She received more than requested","She has not heard yet"], a:1,
   x:"'Not exactly' + 'about half' = dapat, tapi tidak penuh."},
  {spk:[["Woman","Is the reading list for the seminar final?"],["Man","It's still up in the air."]],
   q:"What does the man mean?", c:["The list is already published","The list has not been decided","The list was cancelled","The list is too long"], a:1,
   x:"Idiom 'up in the air' = belum pasti / belum diputuskan."}
],

/* ============ LISTENING SETS +2 (8 soal) ============ */
listeningSets: [
  {title:"Part C - Psychology",
   spk:[["Professor","Today I want to talk about one of the most reliable findings in the psychology of learning: the spacing effect. Put simply, if you have four hours to study something, you will remember more if you spread those four hours across four days than if you do them all in one evening. This has been replicated hundreds of times over more than a century, and it holds across ages, subjects, and cultures.\n\nThe puzzling part is that students rarely do it. When researchers ask learners to predict which schedule will work better, the majority choose the massed schedule, the single long session. The reason seems to be that massed study feels more fluent. Material becomes familiar quickly within one session, and that feeling of familiarity is mistaken for learning. Spacing, by contrast, involves re-forgetting and re-retrieving, which feels effortful and therefore feels less productive, even though it produces better retention."]],
   qs:[
     {q:"What is the main topic of the talk?", c:["Why students dislike studying","The spacing effect in learning","How memory declines with age","Different study subjects compared"], a:1, x:"Fokus utama: spacing effect."},
     {q:"According to the professor, how do most learners predict the two schedules?", c:["They correctly prefer spacing","They incorrectly prefer massed study","They see no difference","They refuse to predict"], a:1, x:"'the majority choose the massed schedule'."},
     {q:"Why does massed study feel more effective?", c:["It involves more retrieval practice","Familiarity is mistaken for learning","It takes less total time","It reduces interference"], a:1, x:"'that feeling of familiarity is mistaken for learning'."},
     {q:"What is the professor's overall point about spacing?", c:["It feels harder but works better","It only helps young learners","It is a recent discovery","It works only for languages"], a:0, x:"'feels effortful ... even though it produces better retention'."}
   ]},
  {title:"Part B - Library fines",
   spk:[["Student","Hi — I got an email saying I owe forty dollars in fines, but I returned everything on time."],
        ["Staff","Let me pull up your record. ... I see two items still checked out from March."],
        ["Student","That can't be right. I handed both of them to a staff member at the front desk."],
        ["Staff","Was that during the renovation week? Because we were processing returns manually then, and some of them never got scanned back in."],
        ["Student","That would explain it. Do I need to pay while you sort it out?"],
        ["Staff","No. I'll put a hold on the account and mark the items as returned pending review. Check your email in about three days."]],
   qs:[
     {q:"What is the student's problem?", c:["He lost two library books","He was charged for items he already returned","He cannot access his account","He owes a late renewal fee"], a:1, x:"Dia ditagih denda untuk buku yang sudah dikembalikan."},
     {q:"What does the staff member discover?", c:["The books were never borrowed","Two items are still listed as checked out","The student owes more than forty dollars","The record was deleted"], a:1, x:"'two items still checked out from March'."},
     {q:"What probably caused the error?", c:["A computer virus","Manual processing during a renovation","The student's late return","A missing barcode"], a:1, x:"'we were processing returns manually then, and some of them never got scanned'."},
     {q:"What will happen to the student's account?", c:["It will be closed","A hold will be placed pending review","The fine will be doubled","It will be transferred to another department"], a:1, x:"'I'll put a hold on the account and mark the items as returned pending review'."}
   ]}
],

/* ============ READING +1 ============ */
readingAdd: [
  {title:"The Great Dying", qs:[
    {q:"What can be inferred about the Siberian Traps eruptions relative to the extinction pulse?", c:["The eruptions lasted far longer than the extinction pulse.","The eruptions began after the extinction was complete.","The eruptions lasted less than a thousand years.","The two cannot be compared from the evidence given."], a:0, x:"Erupsi 'perhaps two million years' vs kepunahan 'well under a hundred thousand years' → erupsi jauh lebih lama."}
  ]}
],

/* ============ iBT WRITING +3 email, +4 discussion ============ */
email: [
  {situation:"You are applying to graduate school and need a letter of recommendation from a professor who taught you two years ago.",
   to:"Professor Alvarez", bullet:["remind her which course you took and when","state the program and deadline","ask whether she is willing to write it"]},
  {situation:"The heating in your rented apartment has been broken for a week. Write to the property manager.",
   to:"Property Manager", bullet:["describe the problem and when it started","explain the impact on you","ask for a repair date"]},
  {situation:"A course you need is full. Write to the instructor asking to be added.",
   to:"Dr. Okafor", bullet:["name the course and section","explain why you need it this term","offer to complete any extra work"]}
],

discussion: [
  {course:"Introduction to History",
   prof:"This week we discussed public monuments. Some argue that monuments to contested figures should be removed; others argue they should stay with added context. Where do you stand, and why?",
   s1:["Hana","Removal erases history. Adding a plaque that explains the context teaches more than taking the statue down ever could."],
   s2:["Omar","A plaque doesn't undo the fact that public space is honoring someone. We can preserve the history in a museum without keeping the honor in a park."],
   ask:"Respond to Hana and Omar. State your own position and support it with a specific example."},
  {course:"Molecular Biology",
   prof:"Gene editing tools now make it possible to alter human embryos. Some researchers call for a moratorium; others argue the potential to prevent inherited disease is too great to delay. What is your assessment?",
   s1:["Wei","A moratorium is prudent. We don't understand off-target effects well enough, and the consequences would be inherited by people who never consented."],
   s2:["Sara","Every medical advance carried unknown risk at first. A complete moratorium just pushes the work to jurisdictions with weaker oversight."],
   ask:"Respond to Wei and Sara. State your assessment and give a reason."},
  {course:"Principles of Economics",
   prof:"We examined proposals to raise the minimum wage. Supporters point to reduced poverty; critics point to reduced hiring. How should a city decide?",
   s1:["Diego","The evidence on employment effects is mixed and small, while the poverty reduction is large and immediate. That asymmetry matters."],
   s2:["Nina","The workers who lose hours or jobs are a minority, but they bear the entire cost. Aggregate gains don't compensate them."],
   ask:"Respond to Diego and Nina. State your position and support it."},
  {course:"Introduction to Linguistics",
   prof:"Roughly half the world's languages may disappear this century. Some argue that documentation is enough; others argue that revitalization should be funded. What do you think?",
   s1:["Leila","Documentation preserves the data, but a language is a community practice. A grammar book is not a living language."],
   s2:["Jonas","Revitalization is expensive and rarely succeeds. Spending the same money on thorough documentation preserves far more linguistic knowledge."],
   ask:"Respond to Leila and Jonas. Explain your view and give a reason."}
],

/* ============ iBT SPEAKING +3 interview ============ */
speakInter: [
  {q:"Describe a time you changed your mind after hearing a good argument. What convinced you?"},
  {q:"What is one thing your school does well, and one thing it should change? Explain both."},
  {q:"Some people prefer to work in teams; others prefer to work alone. Which do you prefer, and why?"}
]

};
