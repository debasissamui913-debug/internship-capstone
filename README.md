# InternBoard: Full-Stack Internship Portal (Capstone)

A full-stack internship portal I built step by step during the EdVyro Full-Stack Development Internship. Students can browse and search internships, then send an application. The frontend and the API run together in one Node.js app.

- **Live demo:** https://YOUR-APP.onrender.com
- **Walkthrough video:** PASTE-YOUR-VIDEO-LINK-HERE
- **Health check:** https://YOUR-APP.onrender.com/health

## What I built in each task

| Task | What it added |
|---|---|
| 2 | Responsive internship board (HTML, CSS, vanilla JS) |
| 3 | REST API with validation, pagination and SQLite |
| 4 | Frontend connected to the API, secure application form, rate limiting, tests |
| 5 (this) | Logging, health check, compression, graceful shutdown, deployment, QA evidence |

## Features

- Internship cards loaded from the API, with loading, error (Try again) and empty states
- Search and domain filter
- Accessible application form with client and server validation
- API: list with pagination and filters, detail, create, update, delete, apply
- Rate limiting, secure headers (helmet), parameterized SQL, request size limit
- JSON request logs, `/health` endpoint, gzip compression, clean shutdown
- 17 automated tests

## Tech stack

HTML, CSS, JavaScript, Node.js, Express, SQLite (built into Node), helmet, express-rate-limit, compression

## Run locally

Needs Node.js 22.13 or newer.

```bash
npm install
npm start
```

Open http://localhost:3000. Run the tests with `npm test`.
(On Windows PowerShell, use `npm.cmd` instead of `npm` if it is blocked.)

## Deploy (Render)

1. Push this project to a public GitHub repository.
2. On render.com create a **New → Web Service** and connect the repository.
3. Settings: Build Command `npm install`, Start Command `npm start`, Instance type **Free**.
4. Add an environment variable: `NODE_ENV` = `production`.
5. Click **Create Web Service**. After the build, the live link is shown at the top. The file `.node-version` tells Render to use Node 22.
6. Set the health check path to `/health` in the service settings.

## API summary

| Method | URL | Purpose |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/internships` | List (`page`, `limit`, `domain`, `mode`, `q`) |
| GET | `/api/internships/:id` | One internship |
| POST / PUT / DELETE | `/api/internships` | Create, update, delete |
| POST | `/api/applications` | Send an application |

Responses use `{ "success": true, "data": ... }` or `{ "success": false, "error": { "code", "message", "details" } }`.

## Quality checks

- [QA_REPORT.md](QA_REPORT.md): test, accessibility, performance and security evidence
- [SECURITY.md](SECURITY.md): security checklist
- [docs/DECISIONS.md](docs/DECISIONS.md): engineering decisions and trade-offs
- [docs/WALKTHROUGH.md](docs/WALKTHROUGH.md): outline of the walkthrough video

## Known limits

- The free Render plan has a temporary disk. The database resets when the app restarts or redeploys, so saved applications can be lost. The 5 sample internships come back automatically. For real use I would move to PostgreSQL.
- Create, update and delete internship endpoints have no login yet.
- The free plan sleeps after a while, so the first visit can take around a minute.

## Author

Debasis Samui, https://github.com/debasissamui913-debug
