# TOEFL LAB

Latihan TOEFL offline di browser — ITP/Prediction + iBT 2026. Tanpa internet, tanpa install, tanpa build step.

**Live:** https://uzzafa.github.io/toefl-lab/

## Cara jalanin

**Online:** buka link di atas. Gak perlu install apa pun.

**Offline (Windows):** double-click `PLAY.bat` → browser kebuka di `http://localhost:8100/`.

Kalau jendela langsung nutup, klik kanan `PLAY.bat` → Properties → **Unblock** (Windows nandain file download).

Manual:

```bash
cd D:/hermes/toefl
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1
```

> Jangan buka `index.html` langsung dengan double-click. Rekaman suara (speaking) butuh origin `http`/`https`, dan `file://` bakal nolak akses mikrofon.

## Simulasi ujian penuh

| Simulasi | Section | Soal | Waktu |
|---|---|---|---|
| **ITP Full** | Listening Comprehension | 50 | 35 mnt |
| | Structure & Written Expression | 40 | 25 mnt |
| | Reading Comprehension | 50 | 55 mnt |
| | **total** | **140** | **115 mnt** |
| **iBT 2026** | Writing (10 Build a Sentence + 1 Email + 1 Discussion) | 12 | 23 mnt |
| | Speaking (10 Listen & Repeat + 1 Interview) | 11 | 8 mnt |
| | **total** | **23** | **31 mnt** |

Jumlah soal dan waktu mengikuti spesifikasi ETS. Mode ujian:

- benar/salah **tidak** ditampilkan saat menjawab (jawaban masih bisa diganti sebelum tekan Lanjut)
- timer per section, waktu habis = section ditutup paksa, tidak bisa kembali
- jeda antar section, tidak bisa balik ke section sebelumnya
- setelah selesai: rincian per section, estimasi skor ITP (310-677), dan pembahasan semua soal salah

Estimasi skor ITP dihitung dari konversi linear — **bukan skor resmi ETS**, karena tabel equating resmi tidak dipublikasikan.

## Peta materi & drill per skill

Tab **Materi** memuat daftar lengkap apa yang diuji, dipetakan ke skill resmi:

- **Grammar** — TOEFL ITP Level 1 Structure & Written Expression **Skill 1–60**, diringkas jadi 8 grup drill (SVA, preposition, clause, reduced clause, inversion, verb form, comparative/subjunctive, form & usage)
- **Listening** — Part A (inference, suggestion, meaning/idiom, prediction, attitude) + Part B/C (main idea, detail)
- **Reading** — main idea, stated detail, inference, vocabulary in context, rhetorical purpose, negative fact, author's tone
- **iBT 2026** — Build a Sentence, Write an Email, Academic Discussion, Listen and Repeat, Take an Interview

Tiap baris punya tombol **Drill** sendiri. Di layar latihan ada penghitung **✓ benar / ✗ salah** yang jalan langsung, plus skor akhir di akhir sesi.

> **Soal bukan salinan ETS.** Bank soal resmi (ITP Practice Tests, iBT Practice Test) ber-copyright dan tidak boleh disebar ulang — apalagi di repo publik. Semua 180 soal di sini ditulis sendiri, lalu dipetakan ke skill resmi di atas. Item type & struktur tesnya yang mengikuti ETS, bukan teks soalnya.

## Latihan per bagian

| Kategori | Soal/sesi | Bank | Timer |
|---|---|---|---|
| Structure | 12 | 20 | 15 mnt |
| Written Expression | 10 | 25 | 10 mnt |
| Vocabulary (AWL) | 15 | 40 | — |
| Reading Comprehension | 2 passage | 5 passage / 50 soal | 16 mnt |
| Listening — Short Dialogue | 8 | 30 | 10 mnt |
| Listening — Talks & Announcements | 3 set | 5 set | 14 mnt |
| Build a Sentence | 8 | 12 | 10 mnt |
| Write an Email | 2 | 5 | 12 mnt |
| Academic Discussion | 2 | 4 | 12 mnt |
| Speaking (Repeat + Interview) | 6 | 10 + 5 | 8 mnt |

Soal diacak setiap sesi. Di mode latihan, jawaban salah langsung keluar penjelasannya.

## Tema

Tombol ☀️/🌙 di kanan atas. Pilihan disimpan di `localStorage`; default mengikuti `prefers-color-scheme` OS.

## Catatan teknis

- **Listening** pakai Web Speech API (`speechSynthesis`) — suara bawaan OS. Di Windows biasanya ada "Microsoft David" (pria) dan "Microsoft Zira" (wanita). Kalau audio gak keluar: klik sekali di halaman, lalu tekan Putar lagi. Tombol **Teks** buka transkrip sebagai fallback.
- **Speaking** pakai `MediaRecorder` + mikrofon. Butuh izin browser. Hasil rekaman bisa diputar ulang dan dibandingkan sendiri (skor 1-5).
- **Writing** dinilai dengan checklist mandiri + word counter, bukan AI. Tidak ada penilaian otomatis karena tanpa model bahasa lokal itu cuma ngarang.
- **Progres** disimpan di `localStorage` browser masing-masing. Gak dikirim ke mana-mana.

## File

```
index.html            shell + set tema sebelum paint
css/styles.css        tema gelap/terang
js/questions.js       bank soal inti
js/questions-more.js  bank soal tambahan (dipakai untuk simulasi 140 soal)
js/skills.js          taksonomi skill + tag per soal (index-aligned)
js/app.js             logika app (merge data, drill, simulasi, skor, tema)
serve.ps1             static server PowerShell (port 8100, ASCII+CRLF)
PLAY.bat              launcher
```

Nambah soal: tambah objek ke array yang sesuai di `js/questions.js` atau `js/questions-more.js`, **lalu tambah satu tag skill di `js/skills.js` pada posisi index yang sama**. Tanpa tag, soal tetap jalan tapi masuk grup "misc" dan tidak muncul di drill per materi.
