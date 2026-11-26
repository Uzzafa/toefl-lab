/* TOEFL LAB - app logic (vanilla, no build step) */
(function () {
  "use strict";
  var app = document.getElementById("app");
  var nav = document.getElementById("nav");
  var LS = "toeflLab.v1";
  var TKEY = "toeflLab.theme";

  /* ---------------- utils ---------------- */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function mmss(s) { s = Math.max(0, s); return pad(Math.floor(s / 60)) + ":" + pad(s % 60); }
  function store() { try { return JSON.parse(localStorage.getItem(LS)) || { hist: [], best: {} }; } catch (e) { return { hist: [], best: {} }; } }
  function save(d) { try { localStorage.setItem(LS, JSON.stringify(d)); } catch (e) {} }
  function words(t) { return t.trim().split(/\s+/).filter(Boolean).length; }
  function arr(x) { return Array.isArray(x) ? x : []; }

  /* ---------------- data merge ---------------- */
  var D = window.TOEFL || {};
  var M = window.TOEFL_MORE || {};

  D.listeningA = arr(D.listeningA).concat(arr(M.listeningA));
  D.written = arr(D.written).concat(arr(M.written));
  D.listeningBC = arr(D.listeningBC).concat(arr(M.listeningB)).concat(arr(M.listeningC));
  D.reading = arr(D.reading).concat(arr(M.reading));
  D.speakRepeat = arr(D.speakRepeat).concat(arr(M.speakRepeat));
  arr(M.readingAdd).forEach(function (add) {
    var p = D.reading.filter(function (x) { return x.title === add.title; })[0];
    if (p) p.qs = p.qs.concat(add.qs);
  });

  /* ---------------- skill tagging ---------------- */
  var SK = window.SKILLS || [];
  var TAGS = window.SKILL_TAGS || {};
  var POOL = [];

  function push(list, tags, factory) {
    list.forEach(function (o, i) {
      var it = factory(o);
      it.skill = (tags && tags[i]) || "misc";
      POOL.push(it);
    });
  }
  push(D.structure, TAGS.structure, mc);
  push(D.written, TAGS.written, err);
  push(D.listeningA, TAGS.listeningA, listenA);
  D.reading.forEach(function (p, pi) {
    p.qs.forEach(function (q, qi) {
      POOL.push({
        kind: "mc", passage: { title: p.title, text: p.text }, stem: q.q, choices: q.c, answer: q.a, explain: q.x,
        skill: (TAGS.reading && TAGS.reading[pi * 10 + qi]) || "r-detail"
      });
    });
  });
  D.listeningBC.forEach(function (set) {
    var tg = (TAGS.listeningSets || {})[set.title] || [];
    set.qs.forEach(function (q, qi) {
      POOL.push({
        kind: "mc", audio: set.spk, audioTitle: set.title, stem: q.q, choices: q.c, answer: q.a, explain: q.x,
        skill: tg[qi] || "l-detail"
      });
    });
  });
  D.build.forEach(function (b) { var it = buildQ(b); it.skill = "ibt-build"; POOL.push(it); });
  D.email.forEach(function (e) { var it = emailQ(e); it.skill = "ibt-email"; POOL.push(it); });
  D.discussion.forEach(function (d) { var it = discQ(d); it.skill = "ibt-disc"; POOL.push(it); });
  D.speakRepeat.forEach(function (r) { var it = repeatQ(r); it.skill = "ibt-repeat"; POOL.push(it); });
  D.speakInter.forEach(function (q) { var it = interQ(q); it.skill = "ibt-inter"; POOL.push(it); });

  function poolOf(id) { return POOL.filter(function (x) { return x.skill === id; }); }


  /* partisi listening untuk simulasi */
  var PART_B = [D.listeningBC[2], arr(M.listeningB)[0]].filter(Boolean);
  var PART_C = [D.listeningBC[1], D.listeningBC[3], arr(M.listeningC)[0]].filter(Boolean);

  /* ---------------- theme ---------------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var b = document.getElementById("themeBtn");
    if (b) b.textContent = t === "light" ? "🌙" : "☀️";
    try { localStorage.setItem(TKEY, t); } catch (e) {}
  }
  function toggleTheme() {
    applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
  }

  /* ---------------- session state ---------------- */
  var S = { view: "home", cat: null, name: "", items: [], idx: 0, log: [], locked: false, timer: null, remain: 0, started: 0, saved: false, sim: false, sections: null, secIdx: -1 };

  /* ---------------- item builders ---------------- */
  function mc(o) { return { kind: "mc", stem: o.q, choices: o.c, answer: o.a, explain: o.x }; }
  function err(o) { return { kind: "err", parts: o.parts, answer: o.a, explain: o.x }; }
  function listenA(o) { return { kind: "mc", audio: o.spk, stem: o.q, choices: o.c, answer: o.a, explain: o.x }; }
  function listenSet(o) {
    return o.qs.map(function (q) { return { kind: "mc", audio: o.spk, audioTitle: o.title, stem: q.q, choices: q.c, answer: q.a, explain: q.x }; });
  }
  function readPass(p) {
    return p.qs.map(function (q) { return { kind: "mc", passage: { title: p.title, text: p.text }, stem: q.q, choices: q.c, answer: q.a, explain: q.x }; });
  }
  function vocabQ(v) {
    var others = shuffle(D.vocab.filter(function (x) { return x.w !== v.w; })).slice(0, 3).map(function (x) { return x.d; });
    var choices = shuffle([v.d].concat(others));
    return { kind: "mc", stem: "Arti paling tepat dari <b>" + esc(v.w) + "</b> (" + v.p + ") dalam konteks akademik:", choices: choices, answer: choices.indexOf(v.d), explain: v.w + " = " + v.d + ' — contoh: "' + v.e + '"' };
  }
  function buildQ(b) { return { kind: "build", words: shuffle(b.words), ans: b.ans, explain: b.x }; }
  function emailQ(e) { return { kind: "write", mode: "email", to: e.to, situation: e.situation, bullet: e.bullet, target: [60, 120] }; }
  function discQ(d) { return { kind: "write", mode: "discussion", course: d.course, prof: d.prof, s1: d.s1, s2: d.s2, ask: d.ask, target: [100, 150] }; }
  function repeatQ(r) { return { kind: "speak", mode: "repeat", text: r.text }; }
  function interQ(q) { return { kind: "speak", mode: "interview", q: q.q }; }

  /* ---------------- practice categories ---------------- */
  var CATS = {
    structure:   { name: "Structure", tag: "core", tagLabel: "Core · ITP + Prediction", desc: "Kalimat rumpang — pilih kata/frasa yang benar. Fondasi utama skor ITP.", time: 15 * 60, build: function () { return shuffle(D.structure).slice(0, 12).map(mc); } },
    written:     { name: "Written Expression", tag: "core", tagLabel: "Core · ITP + Prediction", desc: "Temukan bagian yang salah dari 4 pilihan bergaris bawah.", time: 10 * 60, build: function () { return shuffle(D.written).slice(0, 10).map(err); } },
    listeningA:  { name: "Listening — Short Dialogue", tag: "itp", tagLabel: "ITP Part A", desc: "Dialog pendek + pertanyaan implikasi. Diputar pakai text-to-speech browser.", time: 10 * 60, build: function () { return shuffle(D.listeningA).slice(0, 8).map(listenA); } },
    listeningBC: { name: "Listening — Talks & Announcements", tag: "itp", tagLabel: "ITP Part B/C", desc: "Percakapan panjang, pengumuman kampus, dan mini-lecture.", time: 14 * 60, build: function () { return shuffle(D.listeningBC).slice(0, 3).map(listenSet).reduce(function (a, b) { return a.concat(b); }, []); } },
    reading:     { name: "Reading Comprehension", tag: "core", tagLabel: "Core · semua jenis", desc: "Passage akademik + soal main idea, detail, inference, vocabulary.", time: 16 * 60, build: function () { return shuffle(D.reading).slice(0, 2).map(readPass).reduce(function (a, b) { return a.concat(b); }, []); } },
    vocab:       { name: "Vocabulary (AWL)", tag: "core", tagLabel: "Core · semua jenis", desc: "40 kata Academic Word List paling sering muncul. Arti + contoh kalimat.", time: 0, build: function () { return shuffle(D.vocab).slice(0, 15).map(vocabQ); } },
    build:       { name: "Build a Sentence", tag: "ibt", tagLabel: "iBT 2026 · Writing", desc: "Susun kata acak jadi kalimat benar — task baru iBT 2026.", time: 10 * 60, build: function () { return shuffle(D.build).slice(0, 8).map(buildQ); } },
    email:       { name: "Write an Email", tag: "ibt", tagLabel: "iBT 2026 · Writing", desc: "Tulis email situasional. Dinilai dengan checklist + word count.", time: 12 * 60, build: function () { return shuffle(D.email).slice(0, 2).map(emailQ); } },
    discussion:  { name: "Academic Discussion", tag: "ibt", tagLabel: "iBT 2026 · Writing", desc: "Tanggapi post profesor + 2 siswa dalam 100–150 kata.", time: 12 * 60, build: function () { return shuffle(D.discussion).slice(0, 2).map(discQ); } },
    speak:       { name: "Speaking — Repeat & Interview", tag: "ibt", tagLabel: "iBT 2026 · Speaking", desc: "Listen & Repeat + interview. Rekam suara sendiri, nilai sendiri.", time: 8 * 60, build: function () { return shuffle(D.speakRepeat).slice(0, 4).map(repeatQ).concat(shuffle(D.speakInter).slice(0, 2).map(interQ)); } }
  };

  /* ---------------- simulations ---------------- */
  function buildITP() {
    var partA = shuffle(D.listeningA).slice(0, 30).map(listenA);
    var partB = PART_B.map(listenSet).reduce(function (a, b) { return a.concat(b); }, []);
    var partC = PART_C.map(listenSet).reduce(function (a, b) { return a.concat(b); }, []);
    var listening = partA.concat(partB).concat(partC);
    var structure = shuffle(D.structure).slice(0, 15).map(mc).concat(shuffle(D.written).slice(0, 25).map(err));
    var reading = shuffle(D.reading).slice(0, 5).map(readPass).reduce(function (a, b) { return a.concat(b); }, []);
    return {
      name: "ITP Full Simulation",
      key: "sim-itp",
      sections: [
        { name: "Section 1 — Listening Comprehension", n: listening.length, time: 35 * 60, key: "L" },
        { name: "Section 2 — Structure & Written Expression", n: structure.length, time: 25 * 60, key: "S" },
        { name: "Section 3 — Reading Comprehension", n: reading.length, time: 55 * 60, key: "R" }
      ],
      items: listening.concat(structure).concat(reading)
    };
  }
  function buildIBT() {
    var writing = shuffle(D.build).slice(0, 10).map(buildQ)
      .concat(shuffle(D.email).slice(0, 1).map(emailQ))
      .concat(shuffle(D.discussion).slice(0, 1).map(discQ));
    var speaking = shuffle(D.speakRepeat).slice(0, 10).map(repeatQ)
      .concat(shuffle(D.speakInter).slice(0, 1).map(interQ));
    return {
      name: "iBT 2026 — Writing + Speaking",
      key: "sim-ibt",
      sections: [
        { name: "Section 1 — Writing", n: writing.length, time: 23 * 60, key: "W" },
        { name: "Section 2 — Speaking", n: speaking.length, time: 8 * 60, key: "P" }
      ],
      items: writing.concat(speaking)
    };
  }

  /* ---------------- router ---------------- */
  function go(view, catKey) {
    stopTimer(); stopSpeech();
    if (view === "drill") return startDrill(catKey);
    S.view = view;
    setNav(view);
    if (view === "home") renderHome();
    else if (view === "stats") renderStats();
    else if (view === "guide") renderGuide();
  }
  function setNav(v) {
    Array.prototype.forEach.call(nav.children, function (b) {
      if (!b.dataset.go) return;
      b.classList.toggle("on", b.dataset.go === v || (v === "drill" && b.dataset.go === "home"));
    });
  }
  nav.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-go]");
    if (b) go(b.dataset.go);
  });

  /* ---------------- home ---------------- */
  function card(key) {
    var c = CATS[key], st = store().best[key];
    return '<button class="card" data-start="' + key + '">' +
      '<span class="tag ' + c.tag + '">' + c.tagLabel + "</span>" +
      "<h3>" + c.name + "</h3><p>" + c.desc + "</p>" +
      '<div class="meta"><span><b>' + c.build().length + "</b> soal</span>" +
      (c.time ? "<span><b>" + Math.round(c.time / 60) + "</b> menit</span>" : "<span>tanpa timer</span>") +
      (st ? "<span>best <b>" + st + "%</b></span>" : "") +
      "</div></button>";
  }

  function skillChips(group) {
    var list = SK.filter(function (s) { return s.group === group && poolOf(s.id).length; });
    if (!list.length) return "";
    return '<div class="chiprow">' + list.map(function (s) {
      return '<button class="skillchip" data-skill="' + s.id + '">' + esc(s.name) + "<i>" + poolOf(s.id).length + "</i></button>";
    }).join("") + "</div>";
  }

  function renderHome() {
    var h = store().hist.slice(-5).reverse();
    var html = '<div class="hero"><h1>Siap latihan apa hari ini?</h1>' +
      "<p>Semua soal ada di lokal — gak butuh internet. Listening pakai suara browser, speaking direkam langsung. " +
      'Struktur materi mengikuti format <b>ITP</b> dan <b>iBT sejak 21 Jan 2026</b>.</p></div>';

    html += '<div class="sec-title">Simulasi ujian penuh</div><div class="grid">' +
      '<button class="card sim" data-start="sim-itp"><span class="tag sim">Full test</span><h3>ITP Full Simulation</h3>' +
      "<p>Persis format ETS: Listening 50 / 35 menit, Structure 40 / 25 menit, Reading 50 / 55 menit. " +
      "Satu sesi 115 menit, tanpa bocoran jawaban, review di akhir, estimasi skor 310–677.</p>" +
      '<div class="meta"><span><b>140</b> soal</span><span><b>115</b> menit</span><span><b>3</b> section</span></div></button>' +
      '<button class="card sim" data-start="sim-ibt"><span class="tag ibt">Full test</span><h3>iBT 2026 — Writing + Speaking</h3>' +
      "<p>Jumlah item &amp; waktu sesuai spec 2026: Writing 12 item / 23 menit, Speaking 11 item / 8 menit.</p>" +
      '<div class="meta"><span><b>23</b> item</span><span><b>31</b> menit</span><span><b>2</b> section</span></div></button>' +
      "</div>";

    html += '<div class="sec-title">Drill per materi — satu skill sekali klik</div>' +
      '<div class="qbox" style="padding:16px 18px">' +
      '<div class="chiphdr">Grammar · ITP Structure &amp; Written Expression</div>' + skillChips("Grammar") +
      '<div class="chiphdr">Listening · ITP</div>' + skillChips("Listening") +
      '<div class="chiphdr">Reading · ITP</div>' + skillChips("Reading") +
      '<div class="chiphdr">iBT 2026</div>' + skillChips("iBT 2026") +
      '<div class="hint" style="margin-top:12px">Angka kecil = jumlah soal di bank untuk skill itu. Soal diacak tiap sesi, jadi refresh = set berbeda.</div>' +
      "</div>";

    html += '<div class="sec-title">Latihan campur — Structure &amp; Vocabulary</div><div class="grid">' +
      card("structure") + card("written") + card("vocab") + card("reading") + "</div>";

    html += '<div class="sec-title">Listening (ITP / Prediction)</div><div class="grid">' +
      card("listeningA") + card("listeningBC") + "</div>";

    html += '<div class="sec-title">Khusus iBT 2026</div><div class="grid">' +
      card("build") + card("email") + card("discussion") + card("speak") + "</div>";

    if (h.length) {
      html += '<div class="sec-title">Sesi terakhir</div><table><tr><th>Latihan</th><th>Hasil</th><th>Waktu</th></tr>';
      h.forEach(function (r) {
        html += "<tr><td>" + esc(r.name) + '</td><td><span class="pill ' + (r.pct >= 70 ? "g" : "b") + '">' + r.score + "/" + r.total + " · " + r.pct + '%</span></td><td class="n">' + r.when + "</td></tr>";
      });
      html += "</table>";
    }
    app.innerHTML = html;
  }

  app.addEventListener("click", function (e) {
    var s = e.target.closest("[data-skill]");
    if (s) return go("drill", "sk:" + s.dataset.skill);
    var b = e.target.closest("[data-start]");
    if (b) { go("drill", b.dataset.start); }
  });

  /* ---------------- session start ---------------- */
  function startDrill(key) {
    if (key === "sim-itp") return startSim(buildITP());
    if (key === "sim-ibt") return startSim(buildIBT());
    if (key.indexOf("sk:") === 0) return startSkill(key.slice(3));
    var c = CATS[key];
    if (!c) return go("home");
    S = { view: "drill", cat: key, name: c.name, items: c.build(), idx: 0, log: [], locked: false, timer: null, remain: c.time, started: Date.now(), saved: false, sim: false, sections: null, secIdx: -1 };
    setNav("drill");
    if (S.remain > 0) startTimer();
    renderQ();
  }

  function startSkill(id) {
    var meta = SK.filter(function (s) { return s.id === id; })[0];
    var pool = shuffle(poolOf(id));
    if (!meta || !pool.length) return go("home");
    var items = pool.slice(0, Math.min(pool.length, 10));
    var n = items.length;
    var mins = 0;
    if (meta.group === "Grammar") mins = Math.max(5, Math.ceil(n * 1.2));
    else if (meta.group === "Reading") mins = Math.ceil(n * 1.7);
    else if (meta.group === "Listening") mins = Math.ceil(n * 1.4);
    else if (meta.group === "iBT 2026") mins = Math.ceil(n * 1.5);
    S = { view: "drill", cat: "sk:" + id, name: meta.name, items: items, idx: 0, log: [], locked: false, timer: null, remain: mins * 60, started: Date.now(), saved: false, sim: false, sections: null, secIdx: -1 };
    setNav("drill");
    if (S.remain > 0) startTimer();
    renderQ();
  }


  function startSim(cfg) {
    S = { view: "drill", cat: cfg.key, name: cfg.name, items: cfg.items, idx: 0, log: [], locked: false, timer: null, remain: 0, started: Date.now(), saved: false, sim: true, sections: cfg.sections, secIdx: -1 };
    setNav("drill");
    enterSection(0);
  }

  function secBounds(i) {
    var start = 0;
    for (var k = 0; k < i; k++) start += S.sections[k].n;
    return { start: start, end: start + S.sections[i].n };
  }
  function enterSection(i) {
    var b = secBounds(i);
    S.secIdx = i;
    S.idx = b.start;
    S.remain = S.sections[i].time;
    stopTimer(); startTimer();
    renderQ();
  }

  /* ---------------- timer ---------------- */
  function startTimer() {
    S.timer = setInterval(function () {
      S.remain--;
      var el = document.getElementById("clock");
      if (el) { el.textContent = mmss(S.remain); el.classList.toggle("low", S.remain < 60); }
      if (S.remain <= 0) { stopTimer(); timeUp(); }
    }, 1000);
  }
  function stopTimer() { if (S.timer) { clearInterval(S.timer); S.timer = null; } }

  function timeUp() {
    if (S.sim) {
      if (S.secIdx < S.sections.length - 1) return showTransition(S.secIdx + 1, true);
      return finish(true);
    }
    finish(true);
  }

  /* ---------------- transition between sections ---------------- */
  function showTransition(next, auto) {
    stopTimer(); stopSpeech();
    var done = S.sections[S.secIdx];
    var nx = S.sections[next];
    var h = '<div class="score-hero"><div class="lbl">Section selesai</div>' +
      '<div class="big" style="font-size:24px">' + esc(done.name.split("—")[1] || done.name) + "</div>" +
      '<div class="sub">' + done.n + " soal &middot; " + Math.round(done.time / 60) + " menit terpakai" +
      (auto ? " &middot; <b>waktu habis</b>" : "") + "</div></div>" +
      '<div class="qbox" style="text-align:center"><div style="font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:var(--tx3);font-weight:800">Selanjutnya</div>' +
      '<h3 style="margin:8px 0;font-size:18px">' + esc(nx.name) + "</h3>" +
      '<p style="color:var(--tx2);font-size:13.5px">' + nx.n + " soal &middot; " + Math.round(nx.time / 60) + " menit. Timer mulai saat kamu tekan tombol.</p>" +
      '<div class="actions" style="justify-content:center;margin-top:18px">' +
      '<button class="btn primary" id="goSec">Mulai ' + esc(nx.name.split("—")[0].trim()) + " &rarr;</button>" +
      '<button class="btn ghost" id="abort">Berhenti &amp; lihat hasil</button></div></div>';
    app.innerHTML = h;
    document.getElementById("goSec").onclick = function () { enterSection(next); };
    document.getElementById("abort").onclick = function () { finish(false); };
  }

  /* ---------------- render question ---------------- */
  function renderQ() {
    var it = S.items[S.idx], n = S.items.length;
    if (!it) return finish(false);

    var right = 0, wrong = 0;
    S.log.forEach(function (x) { if (x.ok === true) right++; else if (x.ok === false) wrong++; });

    var h = '<div class="bar"><button class="btn ghost" id="quit">&larr; Keluar</button>' +
      '<span class="title">' + esc(S.sim ? S.sections[S.secIdx].name : S.name) + "</span>" +
      '<div class="right">' +
      '<span class="tally" id="tally" title="benar / salah">' + tallyHtml(right, wrong) + "</span>" +
      '<span class="prog">' + (S.idx + 1) + " / " + n + "</span>" +
      (S.remain > 0 ? '<span class="clock" id="clock">' + mmss(S.remain) + "</span>" : "") + "</div></div>" +
      '<div class="track"><i style="width:' + Math.round((S.idx / n) * 100) + '%"></i></div>';

    if (S.sim) h += '<div class="simnote">Mode ujian — benar/salah tidak ditampilkan sampai selesai. Jawaban masih bisa diganti sebelum tekan Lanjut.</div>';

    if (it.passage) {
      h += '<div class="passage"><h4>' + esc(it.passage.title) + "</h4>" +
        it.passage.text.split("\n\n").map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";
    }
    if (it.audio) h += audioBlock(it);

    if (it.kind === "mc") h += mcBlock(it);
    else if (it.kind === "err") h += errBlock(it);
    else if (it.kind === "build") h += buildBlock(it);
    else if (it.kind === "write") h += writeBlock(it);
    else if (it.kind === "speak") h += speakBlock(it);

    h += '<div class="fb" id="fb"></div>';
    h += '<div class="actions"><div class="spacer"></div>' +
      '<button class="btn primary" id="next" style="display:none">Lanjut &rarr;</button></div>';
    if (!S.sim) h += '<div class="hint">Tip: tekan <span class="kbd">1</span>–<span class="kbd">4</span> untuk pilih, <span class="kbd">Enter</span> untuk lanjut.</div>';

    app.innerHTML = h;
    wireQ(it);
  }

  function audioBlock(it) {
    var tr = it.audio.map(function (l) {
      return '<div style="margin:5px 0"><b style="color:var(--acc);font-size:10.5px;text-transform:uppercase;letter-spacing:1.2px">' + esc(l[0]) + "</b> " + esc(l[1]) + "</div>";
    }).join("");
    return '<div class="audio-row"><button class="play" id="play">&#9654; Putar audio</button>' +
      '<button class="slow" id="slow">Lambat</button>' +
      '<button class="slow" id="trbtn">Teks</button>' +
      '<span class="plays" id="plays">' + (it.audioTitle ? esc(it.audioTitle) : "Short dialogue") + "</span></div>" +
      '<div class="prompt-card" id="tr" style="display:none;font-size:13px">' + tr + "</div>" +
      '<div id="terr" style="display:none;color:var(--warn);font-size:12.5px;margin-bottom:12px;line-height:1.6">' +
      "Text-to-speech diblokir browser (butuh satu klik dulu). Klik di mana saja pada halaman, lalu tekan <b>Putar audio</b> lagi. Sementara itu pakai tombol <b>Teks</b>.</div>";
  }

  function mcBlock(it) {
    return '<div class="qbox"><div class="stem">' + String(it.stem).replace(/____/g, '<span class="gap">?</span>') + "</div>" +
      '<div class="choices" id="choices">' +
      it.choices.map(function (c, i) {
        return '<button class="choice" data-i="' + i + '"><span class="k">' + "ABCD"[i] + "</span><span>" + esc(c) + "</span></button>";
      }).join("") + "</div></div>";
  }

  function errBlock(it) {
    return '<div class="qbox"><div class="stem">Pilih bagian yang <b>salah</b>:</div>' +
      '<div class="sentence" id="sentence">' +
      it.parts.map(function (p, i) {
        return '<span class="part" data-i="' + i + '"><span class="lbl">' + p.l + "</span>" + esc(p.t) + "</span>";
      }).join(" ") + "</div></div>";
  }

  function buildBlock(it) {
    return '<div class="qbox"><div class="stem">Susun kalimat yang benar dari kata-kata ini:</div>' +
      '<div class="answerline" id="aline"><span class="ph">klik kata di bawah &rarr;</span></div>' +
      '<div class="chips" id="chips">' +
      it.words.map(function (w, i) { return '<button class="chip" data-w="' + esc(w) + '" data-i="' + i + '">' + esc(w) + "</button>"; }).join("") +
      '</div><div class="actions" style="margin-top:0"><button class="btn" id="undo">Hapus kata terakhir</button>' +
      '<button class="btn primary" id="check">Cek jawaban</button></div></div>';
  }

  function writeBlock(it) {
    var h = '<div class="qbox">';
    if (it.mode === "email") {
      h += '<div class="prompt-card"><div class="who">Write an Email &middot; kepada ' + esc(it.to) + "</div>" +
        "<p style='margin-top:8px'>" + esc(it.situation) + "</p>" +
        '<div class="rule"></div><b style="font-size:12.5px">Wajib mencakup:</b><ul>' +
        it.bullet.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
    } else {
      h += '<div class="prompt-card"><div class="who">' + esc(it.course) + " &middot; Academic Discussion</div>" +
        '<p style="margin-top:8px"><b>Professor:</b> ' + esc(it.prof) + "</p>" +
        '<div class="rule"></div><p><span class="who s">' + esc(it.s1[0]) + ":</span> " + esc(it.s1[1]) + "</p>" +
        '<p style="margin-top:8px"><span class="who s2">' + esc(it.s2[0]) + ":</span> " + esc(it.s2[1]) + "</p>" +
        '<div class="rule"></div><p><b>Instruksi:</b> ' + esc(it.ask) + "</p></div>";
    }
    h += '<textarea id="ta" placeholder="Tulis di sini..."></textarea>' +
      '<div class="count"><span>kata: <b id="wc">0</b></span><span>target: <b>' + it.target[0] + "–" + it.target[1] + "</b></span>" +
      '<span id="warn" style="color:var(--warn)"></span></div>' +
      '<div class="actions" style="margin-top:12px"><button class="btn primary" id="check">Selesai &amp; lanjut</button></div></div>';
    return h;
  }

  function speakBlock(it) {
    var target = it.mode === "repeat" ? it.text : it.q;
    return '<div class="qbox"><div class="stem">' +
      (it.mode === "repeat" ? "Dengarkan, lalu ulangi persis (Listen and Repeat)." : "Jawab pertanyaan interview ini secara spontan, 45 detik.") +
      "</div>" +
      '<div class="audio-row"><button class="play" id="play">&#9654; Putar</button>' +
      '<button class="slow" id="slow">Lambat</button></div>' +
      '<div class="prompt-card" id="script" style="display:none">' + esc(target) + "</div>" +
      '<div class="rec-row"><button class="rec" id="rec">&#9679; Mulai rekam</button>' +
      '<span class="plays" id="rectime">00:00</span><span id="rerr" style="color:var(--bad);font-size:12.5px"></span></div>' +
      '<div id="player"></div>' +
      '<div class="actions" style="margin-top:16px"><button class="btn primary" id="done">Selesai</button></div></div>';
  }

  /* ---------------- wiring ---------------- */
  var built = [];

  function markSimPick() {
    var nx = document.getElementById("next");
    if (nx) { nx.style.display = ""; nx.textContent = isLast() ? "Selesai →" : "Lanjut →"; }
  }

  function wireQ(it) {
    built = [];
    var q = document.getElementById("quit");
    if (q) q.onclick = function () {
      if (confirm(S.sim ? "Keluar dari simulasi? Hasil tidak akan disimpan." : "Keluar dari sesi ini? Progres tidak disimpan.")) go("home");
    };

    if (it.audio) {
      var pl = document.getElementById("play"), sl = document.getElementById("slow"), tb = document.getElementById("trbtn");
      if (pl) pl.onclick = function () { speak(it.audio, 1); };
      if (sl) sl.onclick = function () { speak(it.audio, 0.72); };
      if (tb) tb.onclick = function () {
        var d = document.getElementById("tr");
        d.style.display = d.style.display === "none" ? "block" : "none";
      };
    }

    if (it.kind === "mc") {
      document.getElementById("choices").addEventListener("click", function (e) {
        var b = e.target.closest(".choice");
        if (!b) return;
        if (S.sim) {
          Array.prototype.forEach.call(document.querySelectorAll("#choices .choice"), function (x) { x.classList.remove("pick"); });
          b.classList.add("pick");
          it._pick = +b.dataset.i;
          markSimPick();
        } else {
          if (S.locked) return;
          answerMC(it, +b.dataset.i);
        }
      });
    } else if (it.kind === "err") {
      document.getElementById("sentence").addEventListener("click", function (e) {
        var b = e.target.closest(".part");
        if (!b) return;
        if (S.sim) {
          Array.prototype.forEach.call(document.querySelectorAll("#sentence .part"), function (x) { x.classList.remove("sel"); });
          b.classList.add("sel");
          it._pick = +b.dataset.i;
          markSimPick();
        } else {
          if (S.locked) return;
          answerERR(it, +b.dataset.i);
        }
      });
    } else if (it.kind === "build") {
      wireBuild(it);
    } else if (it.kind === "write") {
      wireWrite(it);
    } else if (it.kind === "speak") {
      wireSpeak(it);
    }

    var nx2 = document.getElementById("next");
    if (nx2) nx2.onclick = nextQ;
  }

  function isLast() { return S.idx === S.items.length - 1; }

  function tallyHtml(r, w) {
    return '<b class="t-ok">&#10003; ' + r + '</b><b class="t-bad">&#10007; ' + w + "</b>";
  }
  function updateTally() {
    var el = document.getElementById("tally");
    if (!el) return;
    var r = 0, w = 0;
    S.log.forEach(function (x) { if (x.ok === true) r++; else if (x.ok === false) w++; });
    el.innerHTML = tallyHtml(r, w);
  }

  function showFB(ok, title, body) {
    var fb = document.getElementById("fb");
    fb.className = "fb show " + (ok ? "ok" : "no");
    fb.innerHTML = '<span class="hd">' + title + "</span>" + body;
  }

  function lockNext() {
    var n = document.getElementById("next");
    if (n) { n.style.display = ""; n.textContent = isLast() ? "Lihat hasil →" : "Lanjut →"; }
    S.locked = true;
  }

  function answerMC(it, i) {
    var btns = document.querySelectorAll("#choices .choice");
    Array.prototype.forEach.call(btns, function (b) { b.classList.add("locked"); });
    var ok = i === it.answer;
    btns[i].classList.add(ok ? "good" : "bad");
    if (!ok) btns[it.answer].classList.add("good");
    S.log.push({ ok: ok, kind: "mc", item: it, chosen: i });
    updateTally();
    showFB(ok, ok ? "Benar" : "Salah — jawaban: " + "ABCD"[it.answer], esc(it.explain));
    lockNext();
  }

  function answerERR(it, i) {
    var parts = document.querySelectorAll("#sentence .part");
    Array.prototype.forEach.call(parts, function (p) { p.style.pointerEvents = "none"; });
    var ok = i === it.answer;
    parts[i].classList.add(ok ? "good" : "bad");
    if (!ok) parts[it.answer].classList.add("good");
    S.log.push({ ok: ok, kind: "err", item: it, chosen: i });
    updateTally();
    showFB(ok, ok ? "Benar" : "Salah — bagian " + it.parts[it.answer].l, esc(it.explain));
    lockNext();
  }

  function wireBuild(it) {
    var chips = document.getElementById("chips");
    var aline = document.getElementById("aline");
    function paint() {
      aline.innerHTML = built.length
        ? built.map(function (t, k) { return '<span class="tok" data-k="' + k + '">' + esc(t) + "</span>"; }).join("")
        : '<span class="ph">klik kata di bawah &rarr;</span>';
    }
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b || S.locked) return;
      b.classList.add("used");
      built.push(b.dataset.w);
      paint();
    });
    aline.addEventListener("click", function (e) {
      var t = e.target.closest(".tok");
      if (!t || S.locked) return;
      var k = +t.dataset.k, w = built[k];
      built.splice(k, 1);
      var chip = Array.prototype.filter.call(chips.children, function (c) { return c.dataset.w === w && c.classList.contains("used"); })[0];
      if (chip) chip.classList.remove("used");
      paint();
    });
    document.getElementById("undo").onclick = function () {
      if (S.locked || !built.length) return;
      var w = built.pop();
      var chip = Array.prototype.filter.call(chips.children, function (c) { return c.dataset.w === w && c.classList.contains("used"); })[0];
      if (chip) chip.classList.remove("used");
      paint();
    };
    document.getElementById("check").onclick = function () {
      if (S.locked) return;
      var mine = built.join(" ").toLowerCase().replace(/[.,!?]/g, "");
      var ok = mine === it.ans.toLowerCase().replace(/[.,!?]/g, "");
      S.log.push({ ok: ok, kind: "build", item: it });
      updateTally();
      showFB(ok, ok ? "Benar" : "Belum tepat", "Jawaban benar: <b>" + esc(it.ans) + "</b><br>" + esc(it.explain));
      document.getElementById("check").disabled = true;
      lockNext();
    };
  }

  function wireWrite(it) {
    var ta = document.getElementById("ta"), wc = document.getElementById("wc"), warn = document.getElementById("warn");
    function upd() {
      var n = words(ta.value);
      wc.textContent = n;
      warn.textContent = n === 0 ? "" : (n < it.target[0] ? "kurang " + (it.target[0] - n) + " kata" : n > it.target[1] ? "kelebihan " + (n - it.target[1]) + " kata" : "panjang oke ✓");
      warn.style.color = (n >= it.target[0] && n <= it.target[1]) ? "var(--ok)" : "var(--warn)";
    }
    ta.addEventListener("input", upd);
    ta.focus();
    document.getElementById("check").onclick = function () {
      var n = words(ta.value);
      if (n < 10) { alert("Tulis dulu minimal beberapa kalimat."); return; }
      var crit = it.mode === "email"
        ? ["Semua poin wajib tercakup", "Sapaan & penutup sesuai (Dear ... / Best regards)", "Grammar: subject-verb agreement, tense konsisten", "Kalimat tidak ada yang run-on / fragment", "Nada sopan & langsung ke tujuan"]
        : ["Ada posisi/jawaban yang jelas di kalimat pertama", "Merespons minimal satu siswa (sebut namanya)", "Ada alasan atau contoh spesifik", "Grammar & pilihan kata akademik", "Panjang 100–150 kata, tanpa basa-basi berlebih"];
      var fb = document.getElementById("fb");
      fb.className = "fb show ok";
      fb.innerHTML = '<span class="hd">Self-check</span>Centang yang sudah kamu penuhi:<div style="margin-top:8px;display:flex;flex-direction:column;gap:6px">' +
        crit.map(function (c, i) { return '<label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer"><input type="checkbox" data-c="' + i + '" style="margin-top:5px"> <span>' + c + "</span></label>"; }).join("") +
        "</div><div style='margin-top:10px;font-size:12.5px;opacity:.8'>Word count: <b>" + n + "</b></div>";
      function tally() {
        var done = fb.querySelectorAll("input:checked").length;
        var pct = Math.round(done / crit.length * 100);
        S.log = S.log.filter(function (x) { return x.kind !== "write"; });
        S.log.push({ ok: pct >= 80, kind: "write", self: true, pct: pct });
        updateTally();
        var nx = document.getElementById("next"); nx.style.display = "";
        nx.textContent = isLast() ? "Lihat hasil →" : "Lanjut →";
        S.locked = true;
      }
      fb.querySelectorAll("input").forEach(function (cb) { cb.addEventListener("change", tally); });
      tally();
    };
  }

  function wireSpeak(it) {
    var target = it.mode === "repeat" ? it.text : it.q;
    document.getElementById("play").onclick = function () { speak([[it.mode === "repeat" ? "Narrator" : "Interviewer", target]], 1, true); };
    document.getElementById("slow").onclick = function () { speak([[it.mode === "repeat" ? "Narrator" : "Interviewer", target]], 0.7, true); };
    var btn = document.getElementById("rec"), tm = document.getElementById("rectime"), err = document.getElementById("rerr");
    var rec = null, chunks = [], t0 = 0, iv = null;
    btn.onclick = function () {
      if (rec && rec.state === "recording") { rec.stop(); return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) { err.textContent = "Browser tidak mendukung rekaman. Pakai Chrome/Edge."; return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        chunks = [];
        rec = new MediaRecorder(stream);
        rec.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
        rec.onstop = function () {
          clearInterval(iv);
          stream.getTracks().forEach(function (t) { t.stop(); });
          var blob = new Blob(chunks, { type: "audio/webm" });
          var url = URL.createObjectURL(blob);
          document.getElementById("player").innerHTML = '<audio controls src="' + url + '"></audio>' +
            '<div class="hint">Bandingkan dengan audio asli. Nilai sendiri 1–5 di bawah.</div>';
          btn.classList.remove("on"); btn.innerHTML = "&#9679; Rekam ulang";
          document.getElementById("player").insertAdjacentHTML("beforeend",
            '<div class="rec-row">' + [1, 2, 3, 4, 5].map(function (n) { return '<button class="btn" data-rate="' + n + '">' + n + "</button>"; }).join("") +
            '<span class="plays">1 = jauh, 5 = hampir identik</span></div>');
          document.querySelectorAll("[data-rate]").forEach(function (b) {
            b.onclick = function () {
              var v = +b.dataset.rate;
              S.log = S.log.filter(function (x) { return x.kind !== "speak"; });
              S.log.push({ ok: v >= 4, kind: "speak", self: true, score: v });
              updateTally();
              var n = document.getElementById("next"); n.style.display = "";
              n.textContent = isLast() ? "Lihat hasil →" : "Lanjut →";
              S.locked = true;
              b.style.borderColor = "var(--ok)"; b.style.color = "var(--ok)";
            };
          });
        };
        rec.start();
        t0 = Date.now();
        btn.classList.add("on"); btn.innerHTML = "&#9632; Stop";
        iv = setInterval(function () { tm.textContent = mmss(Math.floor((Date.now() - t0) / 1000)); }, 250);
      }).catch(function () { err.textContent = "Izin mikrofon ditolak."; });
    };
    document.getElementById("done").onclick = function () {
      S.log.push({ ok: null, kind: "speak", skipped: true });
      var n = document.getElementById("next"); n.style.display = "";
      n.textContent = isLast() ? "Lihat hasil →" : "Lanjut →";
      S.locked = true;
    };
  }

  function nextQ() {
    stopSpeech();
    var it = S.items[S.idx];

    if (S.sim) {
      if (it && (it.kind === "mc" || it.kind === "err")) {
        var pick = (it._pick === undefined) ? -1 : it._pick;
        S.log = S.log.filter(function (x) { return x.item !== it; });
        S.log.push({ ok: pick === it.answer, kind: it.kind, item: it, chosen: pick, sec: S.sections[S.secIdx].key });
      }
      var b = secBounds(S.secIdx);
      var nextIdx = S.idx + 1;
      if (nextIdx >= b.end) {
        if (S.secIdx < S.sections.length - 1) return showTransition(S.secIdx + 1, false);
        return finish(false);
      }
      S.idx = nextIdx;
      S.locked = false;
      return renderQ();
    }

    S.idx++;
    S.locked = false;
    if (S.idx >= S.items.length) return finish(false);
    renderQ();
  }

  /* ---------------- speech ---------------- */
  var voiceMale = null, voiceFemale = null;
  function loadVoices() {
    if (!window.speechSynthesis) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); });
    voiceMale = vs.filter(function (v) { return /male|david|guy|george|daniel/i.test(v.name) && !/female/i.test(v.name); })[0] || vs[0] || null;
    voiceFemale = vs.filter(function (v) { return /female|zira|samantha|aria|jenny/i.test(v.name); })[0] || vs[1] || vs[0] || null;
  }
  if (window.speechSynthesis) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

  function speak(lines, rate, reveal) {
    if (!window.speechSynthesis) { alert("Browser ini tidak punya text-to-speech."); return; }
    speechSynthesis.cancel();
    if (reveal) { var sc = document.getElementById("script"); if (sc) sc.style.display = "block"; }
    var i = 0;
    function next() {
      if (i >= lines.length) return;
      var sp = lines[i][0], txt = lines[i][1]; i++;
      var u = new SpeechSynthesisUtterance(txt);
      var female = /^woman|narrator|interviewer|announcer/i.test(sp);
      u.voice = female ? voiceFemale : voiceMale;
      u.rate = rate || 1;
      u.pitch = /^professor|announcer/i.test(sp) ? 0.85 : 1;
      u.onend = next;
      u.onerror = function () { var t = document.getElementById("terr"); if (t) t.style.display = "block"; };
      speechSynthesis.speak(u);
    }
    next();
  }
  function stopSpeech() { if (window.speechSynthesis) speechSynthesis.cancel(); }

  /* ---------------- finish / result ---------------- */
  function finish(byTime) {
    stopTimer(); stopSpeech();
    var auto = S.log.filter(function (x) { return x.ok !== null; });
    var score = auto.filter(function (x) { return x.ok; }).length;
    var total = auto.length;
    var pct = total ? Math.round(score / total * 100) : 0;

    var h = "";
    if (byTime) h += '<div class="fb show no" style="margin-bottom:16px"><span class="hd">Waktu habis</span>Section terakhir ditutup otomatis.</div>';

    var cls = pct >= 80 ? "good" : pct >= 60 ? "mid" : "low";
    var msg = pct >= 80 ? "Solid. Naikkan kecepatan." : pct >= 60 ? "Dasar sudah ada, yang bocor masih bisa ditambal." : "Fondasi masih tipis — ulangi section ini sebelum lanjut.";

    if (total === 0) {
      h += '<div class="score-hero"><div class="lbl">Sesi selesai</div><div class="big">—</div><div class="sub">Tidak ada soal yang dinilai otomatis.</div></div>';
    } else {
      h += '<div class="score-hero ' + cls + '"><div class="lbl">Skor sesi</div><div class="big">' + pct + "<small>%</small></div>" +
        '<div class="sub">' + score + " benar dari " + total + " soal dinilai &middot; " + msg + "</div></div>";
    }

    if (S.sim) h += simReport();

    var selfLog = S.log.filter(function (x) { return x.ok !== null && x.self; });
    if (selfLog.length) {
      h += '<div class="sec-title">Tugas mandiri</div><table><tr><th>Tugas</th><th>Hasil</th></tr>';
      selfLog.forEach(function (x) {
        h += "<tr><td>" + (x.kind === "write" ? "Writing" : "Speaking") + "</td><td>" +
          (x.kind === "write" ? "checklist " + x.pct + "%" : "self-score " + x.score + "/5") + "</td></tr>";
      });
      h += "</table>";
    }

    var wrong = S.log.filter(function (x) { return x.ok === false && x.item; });
    if (wrong.length) {
      h += '<div class="sec-title">Pembahasan (' + wrong.length + " salah)</div>";
      wrong.slice(0, 60).forEach(function (x, i) {
        var it = x.item;
        h += '<div class="qbox" style="margin-bottom:10px"><div style="font-size:12px;color:var(--tx3);margin-bottom:6px">' + (i + 1) + (x.sec ? " · " + x.sec : "") + "</div>" +
          '<div style="font-size:14px;margin-bottom:8px">' + String(it.stem || "").replace(/<[^>]+>/g, "") + "</div>";
        if (it.kind === "mc") {
          h += '<div style="font-size:13px;color:var(--bad)">Jawaban lu: ' + (x.chosen >= 0 ? "ABCD"[x.chosen] + ". " + esc(it.choices[x.chosen]) : "<i>kosong</i>") + "</div>" +
            '<div style="font-size:13px;color:var(--ok)">Benar: ' + "ABCD"[it.answer] + ". " + esc(it.choices[it.answer]) + "</div>";
        } else if (it.kind === "err") {
          h += '<div style="font-size:13px;color:var(--bad)">Jawaban lu: ' + (x.chosen >= 0 ? it.parts[x.chosen].l + ". " + esc(it.parts[x.chosen].t) : "<i>kosong</i>") + "</div>" +
            '<div style="font-size:13px;color:var(--ok)">Benar: ' + it.parts[it.answer].l + ". " + esc(it.parts[it.answer].t) + "</div>";
        }
        h += '<div class="hint" style="margin-top:6px">' + esc(it.explain || "") + "</div></div>";
      });
      if (wrong.length > 60) h += '<div class="hint">…dan ' + (wrong.length - 60) + " soal lain. Latihan per bagian untuk pembahasan lengkap.</div>";
    }

    h += '<div class="actions"><button class="btn primary" data-start="' + S.cat + '">Ulangi</button>' +
      '<button class="btn" data-go2="home">Pilih latihan lain</button>' +
      '<button class="btn ghost" data-go2="stats">Lihat progres</button></div>';

    S.view = "result";
    app.innerHTML = h;

    app.querySelectorAll("[data-start]").forEach(function (b) { b.onclick = function () { go("drill", b.dataset.start); }; });
    app.querySelectorAll("[data-go2]").forEach(function (b) { b.onclick = function () { go(b.dataset.go2); }; });

    if (!S.saved) {
      S.saved = true;
      var db = store();
      db.hist.push({ name: S.name, score: score, total: total, pct: pct, when: new Date().toLocaleString("id-ID", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) });
      if (db.hist.length > 60) db.hist = db.hist.slice(-60);
      if (total > 0 && pct > (db.best[S.cat] || 0)) db.best[S.cat] = pct;
      save(db);
    }
  }

  function itpScore(l, lt, s, st, r, rt) {
    function scale(c, t, lo, hi) { return Math.round(lo + (t ? c / t : 0) * (hi - lo)); }
    var L = scale(l, lt, 31, 68), Sx = scale(s, st, 31, 68), R = scale(r, rt, 31, 67);
    return { L: L, S: Sx, R: R, total: Math.round((L + Sx + R) * 10 / 3 / 5) * 5 };
  }

  function simReport() {
    var agg = {};
    S.log.forEach(function (x) {
      if (!x.sec || x.ok === null) return;
      agg[x.sec] = agg[x.sec] || { c: 0, t: 0 };
      agg[x.sec].t++; if (x.ok) agg[x.sec].c++;
    });
    var declared = {};
    S.sections.forEach(function (s) { declared[s.key] = s.n; });

    var h = '<div class="sec-title">Rincian per section</div><table><tr><th>Section</th><th>Benar</th><th>Nilai</th></tr>';
    S.sections.forEach(function (s) {
      var a = agg[s.key] || { c: 0, t: 0 };
      h += "<tr><td>" + esc(s.name.replace(/^Section \d+ — /, "")) + "</td><td class='n'>" + a.c + " / " + declared[s.key] + "</td><td class='n'>" + (declared[s.key] ? Math.round(a.c / declared[s.key] * 100) + "%" : "—") + "</td></tr>";
    });
    h += "</table>";

    if (S.cat === "sim-itp") {
      var sc = itpScore(agg.L ? agg.L.c : 0, declared.L, agg.S ? agg.S.c : 0, declared.S, agg.R ? agg.R.c : 0, declared.R);
      h += '<div class="score-hero mid" style="margin-top:16px;padding:24px"><div class="lbl">Estimasi skor ITP</div>' +
        '<div class="big">' + sc.total + "</div>" +
        '<div class="sub">L ' + sc.L + " &middot; S " + sc.S + " &middot; R " + sc.R + " &middot; skala 310–677</div>" +
        '<div class="sub" style="font-size:12px;opacity:.75;margin-top:8px">Estimasi dari konversi linear, bukan skor resmi ETS. ' +
        "Skor resmi memakai tabel equating yang tidak dipublikasikan.</div></div>";
    }
    return h;
  }

  /* ---------------- stats ---------------- */
  function renderStats() {
    var db = store();
    var h = '<div class="hero"><h1>Progres lu</h1><p>Semua tersimpan di browser ini (localStorage). Gak dikirim ke mana-mana.</p></div>';
    if (!db.hist.length) {
      h += '<div class="empty">Belum ada riwayat. Selesaikan satu latihan dulu.</div>';
      app.innerHTML = h; return;
    }
    var avg = Math.round(db.hist.reduce(function (a, r) { return a + r.pct; }, 0) / db.hist.length);
    var best = db.hist.reduce(function (a, r) { return r.pct > a.pct ? r : a; }, db.hist[0]);
    h += '<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr));margin-bottom:22px">' +
      stat("Sesi", db.hist.length) + stat("Rata-rata", avg + "%") + stat("Terbaik", best.pct + "%") + "</div>";
    h += '<div class="sec-title">Riwayat</div><table><tr><th>Latihan</th><th>Hasil</th><th>Waktu</th></tr>';
    db.hist.slice().reverse().forEach(function (r) {
      h += "<tr><td>" + esc(r.name) + '</td><td><span class="pill ' + (r.pct >= 70 ? "g" : "b") + '">' + r.score + "/" + r.total + " · " + r.pct + '%</span></td><td class="n">' + esc(r.when) + "</td></tr>";
    });
    h += "</table>";
    h += '<div class="actions"><button class="btn danger" id="reset">Hapus semua riwayat</button></div>';
    app.innerHTML = h;
    document.getElementById("reset").onclick = function () {
      if (confirm("Hapus semua riwayat latihan?")) { save({ hist: [], best: {} }); renderStats(); }
    };
  }
  function stat(l, v) { return '<div class="qbox" style="text-align:center"><div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:var(--tx3);font-weight:800">' + l + '</div><div style="font-size:30px;font-weight:800;margin-top:4px">' + v + "</div></div>"; }

  /* ---------------- guide ---------------- */
  var GUIDE = [
    { t: "Beda tesnya dulu", items: [
      "<b>ITP</b> — 140 soal, 115 menit: Listening 50, Structure & Written Expression 40, Reading 50. Skor 310–677. Tanpa speaking/writing. Untuk wisuda, CPNS, BUMN, beasiswa dalam negeri.",
      "<b>iBT (sejak 21 Jan 2026)</b> — Reading & Listening <b>multistage adaptive</b>, Writing 12 item, Speaking 11 item. Total ~1,5 jam. Skor skala 1–6 per skill. Untuk luar negeri.",
      "<b>Prediction</b> — bukan ETS. Tiruan ITP buatan lembaga. Materinya ikut ITP, skornya tidak standar."
    ]},
    { t: "Cara pakai simulasi", items: [
      "Mode ujian tidak menampilkan benar/salah saat menjawab — persis tes asli. Jawaban tetap bisa diganti sebelum tekan Lanjut.",
      "Timer per section: Listening 35 menit, Structure 25 menit, Reading 55 menit. Waktu habis = section ditutup paksa, tidak bisa kembali.",
      "Antar section ada jeda singkat. Di tes asli jeda ini dipakai untuk instruksi — jangan dipakai buka kamus.",
      "Setelah selesai: rincian per section + estimasi skor + pembahasan semua soal yang salah.",
      "Jangan kerjakan simulasi 115 menit sambil multitasking. Duduk sekali, matikan notifikasi."
    ]},
    { t: "Structure — pola yang paling sering keluar", items: [
      "Subject-verb agreement + frasa penyela: <i>along with, as well as, together with</i> tidak mengubah jumlah verb.",
      "<i>The number of</i> = singular, <i>a number of</i> = plural. <i>Neither/either of</i> = singular.",
      "Reduced clause: <i>which was completed → completed</i>, <i>who was running → running</i>.",
      "Inversi setelah adverb negatif: <i>Rarely / Hardly / Not until / Not only</i> → auxiliary pindah ke depan.",
      "Subjunctive setelah <i>require / suggest / demand / insist that</i> → base verb (be, take, submit).",
      "Cleft: <i>It was not until X that Y</i> — wajib 'that', bukan 'when'.",
      "Pola <i>the more ..., the more ...</i> dan <i>so ... that / such ... that</i>."
    ]},
    { t: "Written Expression — target error yang dicari", items: [
      "Verb salah bentuk setelah modal (<i>must to submit</i> → must submit).",
      "Preposisi salah: <i>since</i> + durasi → <i>for</i>; <i>despite of</i> → despite.",
      "Pronoun berlebih: <i>the book which I borrowed it</i>.",
      "Parallel structure: semua item dalam daftar harus bentuk sama.",
      "Word form: noun vs adjective vs adverb (<i>extreme</i> vs <i>extremely</i>)."
    ]},
    { t: "Listening", items: [
      "Part A: jawabannya hampir selalu <b>implikasi</b>, bukan arti literal. Waspadai idiom dan nada suara.",
      "Part B/C: catat <b>siapa</b> yang bicara dan <b>apa yang mereka putuskan</b> — bukan semua detail.",
      "Pertanyaan attitude/tone: dengarkan kata sifat dan penekanan.",
      "Latihan di app ini pakai text-to-speech. Untuk tes asli, tambah latihan dengan audio native (ETS free practice test)."
    ]},
    { t: "Reading", items: [
      "Kecepatan adalah soal utamanya: ITP 50 soal / 55 menit ≈ 1 menit per soal.",
      "Baca pertanyaan dulu, baru scan passage untuk kata kunci.",
      "Vocabulary-in-context: uji pilihan di dalam kalimat aslinya.",
      "Inference: jawaban tidak tertulis eksplisit — harus didukung satu kalimat.",
      "EXCEPT / NOT questions: eliminasi tiga yang benar."
    ]},
    { t: "iBT 2026 — yang baru & sering dilewatkan", items: [
      "Reading & Listening <b>adaptif</b>: performa modul pertama menentukan tingkat kesulitan modul kedua. Tidak bisa balik.",
      "Writing: <i>Build a Sentence</i> (10 item), <i>Write an Email</i>, <i>Write for an Academic Discussion</i>. Esai integrated sudah tidak ada.",
      "Speaking: <i>Listen and Repeat</i> + <i>Take an Interview</i>. Latih pronunciation dengan shadowing.",
      "Skor 1–6 per section. Masa transisi masih menampilkan konversi 0–120."
    ]},
    { t: "Urutan belajar 4 minggu", items: [
      "Minggu 1: Structure + Written Expression tiap hari 30 menit, plus 20 kata AWL/hari.",
      "Minggu 2: Listening per part, 1 set/hari. Fokus idiom Part A.",
      "Minggu 3: Reading timed. Paksa 1 menit/soal.",
      "Minggu 4: iBT writing + speaking (rekam diri sendiri), lalu 1× ITP Full Simulation."
    ]}
  ];
  function renderGuide() {
    var h = '<div class="hero"><h1>Materi &amp; peta skill</h1>' +
      "<p>Daftar lengkap apa yang diuji, dipetakan ke skill resmi ETS. Tiap baris bisa langsung di-drill.</p></div>";

    h += '<div class="simnote" style="color:var(--tx2);background:var(--bg3);border-color:var(--line)">' +
      "Struktur daftar mengikuti <b>TOEFL ITP Level 1 — Structure &amp; Written Expression (Skill 1–60)</b> dan " +
      "<b>task type resmi iBT 2026</b>. Semua soal di app ini <b>ditulis sendiri</b> dan dipetakan ke skill tersebut — " +
      "bukan salinan soal ETS, karena bank soal resmi ber-copyright dan tidak boleh disebar ulang.</div>";

    ["Grammar", "Listening", "Reading", "iBT 2026"].forEach(function (g) {
      var list = SK.filter(function (s) { return s.group === g; });
      if (!list.length) return;
      var label = g === "Grammar" ? "Grammar · ITP Structure &amp; Written Expression (Skill 1–60)"
        : g === "Listening" ? "Listening · ITP Part A / B / C"
          : g === "Reading" ? "Reading · ITP"
            : "iBT 2026 · task type resmi";
      h += '<div class="sec-title">' + label + "</div>";
      h += '<table class="skilltable"><tr><th>Skill</th><th>Ref</th><th>Bank</th><th></th></tr>';
      list.forEach(function (s) {
        var n = poolOf(s.id).length;
        h += "<tr><td><b>" + esc(s.name) + "</b><div class='sdesc'>" + esc(s.desc) + "</div></td>" +
          "<td class='ref'>" + esc(s.ref) + "</td>" +
          "<td class='n'>" + (n || "—") + "</td>" +
          "<td class='n'>" + (n ? '<button class="minibtn" data-skill="' + s.id + '">Drill</button>' : "") + "</td></tr>";
      });
      h += "</table>";
    });

    h += '<div class="sec-title">Pola &amp; strategi</div>';
    GUIDE.forEach(function (g) {
      h += '<div class="qbox" style="margin-bottom:12px"><h3 style="font-size:15px;margin-bottom:10px;color:var(--acc)">' + g.t + "</h3>" +
        '<ul style="margin-left:18px;color:var(--tx2);font-size:13.5px;line-height:1.75">' +
        g.items.map(function (i) { return "<li style='margin:5px 0'>" + i + "</li>"; }).join("") + "</ul></div>";
    });
    app.innerHTML = h;
  }

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", function (e) {
    if (S.view !== "drill") return;
    var tag = (document.activeElement || {}).tagName;
    if (tag === "TEXTAREA" || tag === "INPUT") return;
    if (e.key === "Enter") {
      var n = document.getElementById("next");
      if (n && n.style.display !== "none") { e.preventDefault(); nextQ(); }
      return;
    }
    var it = S.items[S.idx];
    if (!it) return;
    if (!S.sim && S.locked) return;
    if (it.kind === "mc" && /^[1-4]$/.test(e.key)) {
      var b = document.querySelector('#choices .choice[data-i="' + (+e.key - 1) + '"]');
      if (b) b.click();
    }
    if (it.kind === "err" && /^[1-4]$/.test(e.key)) {
      var p = document.querySelector('#sentence .part[data-i="' + (+e.key - 1) + '"]');
      if (p) p.click();
    }
  });

  /* ---------------- boot ---------------- */
  var btn = document.getElementById("themeBtn");
  if (btn) btn.onclick = toggleTheme;
  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
  renderHome();
})();
