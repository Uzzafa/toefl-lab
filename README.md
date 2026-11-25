# TOEFL LAB

Latihan TOEFL offline di browser — ITP/Prediction + iBT 2026. Tanpa internet, tanpa install, tanpa build step.

## Cara jalanin

**Windows:** double-click `PLAY.bat` → browser kebuka otomatis di `http://localhost:8100/`.

Kalau jendela langsung nutup, klik kanan `PLAY.bat` → Properties → **Unblock** (Windows nandain file download).

Manual (kalau `PLAY.bat` gak jalan):

```bash
cd D:/hermes/toefl
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1
```

Atau pakai Python: `python -m http.server 8100` di folder ini.

> Jangan buka `index.html` langsung dengan double-click. Rekaman suara (speaking) butuh origin `http://`, dan `file://` bakal nolak akses mikrofon.

## Isi latihan

| Kategori | Soal | Timer | Jenis |
|---|---|---|---|
| Structure | 12 dari 20 | 15 mnt | Core, ITP |
| Written Expression | 10 dari 15 | 10 mnt | Core, ITP |
| Vocabulary (AWL) | 15 dari 40 | — | Core |
| Reading Comprehension | 2 passage | 16 mnt | Core |
| Listening — Short Dialogue | 8 dari 12 | 10 mnt | ITP Part A |
| Listening — Talks & Announcements | 3 set | 14 mnt | ITP Part B/C |
| Build a Sentence | 8 dari 12 | 10 mnt | iBT 2026 |
| Write an Email | 2 dari 5 | 12 mnt | iBT 2026 |
| Academic Discussion | 2 dari 4 | 12 mnt | iBT 2026 |
| Speaking (Repeat + Interview) | 6 | 8 mnt | iBT 2026 |
| **ITP Mini Test** | 28 | 40 mnt | Simulasi + estimasi skor 310–677 |

Soal diacak setiap sesi. Jawaban salah selalu keluar penjelasannya.

## Catatan teknis

- **Listening** pakai Web Speech API (`speechSynthesis`) — suara bawaan OS. Di Windows biasanya ada "Microsoft David" (pria) dan "Microsoft Zira" (wanita). Kalau audio gak keluar: klik sekali di halaman, lalu tekan Putar lagi. Tombol **Teks** buka transkrip sebagai fallback.
- **Speaking** pakai `MediaRecorder` + mikrofon. Butuh izin browser. Hasil rekaman bisa diputar ulang dan dibandingkan sendiri (skor 1–5).
- **Writing** dinilai dengan checklist mandiri + word counter, bukan AI. Tidak ada penilaian otomatis karena tanpa model bahasa lokal itu cuma ngarang.
- **Progres** disimpan di `localStorage` browser ini saja. Gak dikirim ke mana-mana. Hapus lewat halaman Progres.

## File

```
index.html          shell
css/styles.css      tema
js/questions.js     bank soal (semua konten di sini — edit buat nambah soal)
js/app.js           logika app
serve.ps1           static server PowerShell (port 8100, ASCII+CRLF)
PLAY.bat            launcher
```

Nambah soal: buka `js/questions.js`, tambah objek ke array yang sesuai. Formatnya ada di komentar paling atas file.
