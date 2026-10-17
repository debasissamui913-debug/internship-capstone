# Engineering Decisions

| Decision | Why | Trade-off |
|---|---|---|
| Plain HTML, CSS and JavaScript for the frontend | The task was to learn the basics (DOM, fetch, accessibility) without a framework | More code than React for bigger apps |
| Express serves both the API and the frontend | One app, one deploy, no CORS problems | Frontend and backend cannot be scaled separately |
| SQLite through `node:sqlite` | No database server to install, and no native build tools (my first choice, `better-sqlite3`, failed to compile on Windows with Node 24) | Needs Node 22.13+, and on free hosting the file is not permanent |
| Same validation on client and server | The client gives fast feedback, the server is the real protection | Rules are written twice, so they must be kept in sync |
| Parameterized SQL everywhere | Stops SQL injection | None |
| `textContent` instead of `innerHTML` | Stops XSS from API data | None |
| helmet, rate limits, 10 KB body limit | Cheap, standard protection | In-memory rate limits reset on restart |
| Native `<dialog>` for the form | Built-in focus handling and Esc key, good for accessibility | Looks plain without CSS |
| JSON logs without request bodies | Easy to search, and personal data like emails is not logged | Less detail when debugging |
| `/health` endpoint with a database check | Lets the host restart a broken app and lets me monitor it | None |
| Built-in Node test runner with an in-memory database | No extra libraries, tests are fast and never touch real data | Does not test the real database file |

## What I would do next

1. PostgreSQL so applications survive restarts
2. Admin login for create, update and delete
3. Email confirmation after applying
4. Browser tests (Playwright) for the full user journey
