# เกมนักสืบหินอัคนี 50 ด่าน

เว็บเกมคำถามจากภาพสำหรับนักเรียนอายุประมาณ 13 ปี ฝึกจำแนกหินแกรนิต แกบโบร บะซอลต์ ออบซิเดียน พัมมิซ และสคอเรีย ผ่านคำถาม 50 ข้อ ตัวเลือก A–E พร้อมคำอธิบายภาษาไทยและศัพท์ภาษาอังกฤษ

## เว็บไซต์

GitHub Pages: https://tinala-ct.github.io/igneous-rock-quiz/

ทุกครั้งที่มีการอัปเดตสาขา `main` ระบบ GitHub Actions จะ deploy เว็บไซต์ให้อัตโนมัติ

## ไฟล์สำหรับ GitHub Pages

- `index.html` — หน้าเว็บหลัก
- `styles.css` — รูปแบบและการแสดงผลบนมือถือ
- `app.js` — คำถาม ตัวเลือก การตรวจคำตอบ และคะแนน
- `public/rocks/` — รูปภาพหินทั้ง 6 ชนิด
- `.github/workflows/deploy-pages.yml` — ระบบ deploy อัตโนมัติ

---

## โครงสร้างเดิมสำหรับ ChatGPT Sites

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout`

## Sites Lifecycle

The Sites lifecycle CLI runs the locked dependency install before returning this checkout. Edit the source under `app/`, then checkpoint when a coherent milestone is ready to inspect or share. The remote Sites builder runs `npm run build` against the pushed commit. Do not repeat install or build as a normal pre-checkpoint step.

This starter does not use `wrangler.jsonc`.

`install:ci` is intentionally a single, non-retrying `npm ci`. It refuses a concurrent install for the same project, consumes a matching image-seeded npm cache with `--prefer-offline` while retaining registry fallback for a missing cache object, otherwise downloads and verifies the complete vinext tarball recorded in `package-lock.json`, limits npm to one socket, and terminates a stalled install. `build` applies a short timeout and then validates the Sites artifact. These helpers target Linux and use GNU `timeout`; they are not native macOS scripts.

Scripts that need writable project-scoped home, npm, XDG, and temporary paths use `scripts/sites-env.sh`. The `dev` and `start` scripts honor the caller's runtime environment and keep Wrangler logs inside the checkout. The generated `.sites-runtime/` directory is disposable and ignored by Git.
