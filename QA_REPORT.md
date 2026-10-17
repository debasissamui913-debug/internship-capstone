# QA Report

## 1. Regression tests (automated)

- Command: `npm test`
- Result: **17 tests, 17 passed, 0 failed**

| Area | Tests |
|---|---|
| Internship API | List and pagination, filters, bad query values, detail and 404, create, update, delete, broken JSON |
| Applications | Valid application (201), server validation (400), unknown internship (404), duplicate (409) |
| Security | SQL injection text, security headers, rate limit (429) |
| Operations | `/health` check, gzip compression |
| Frontend | Page is served at `/` |

## 2. Security

See [SECURITY.md](SECURITY.md). Validation, parameterized queries, rate limits, helmet headers, body size limit and `textContent` rendering are covered by tests or code review.

## 3. Accessibility 



| Check | Result |
|---|---|
| Lighthouse Accessibility score | 100 / 100 |
| Every form field has a label | Yes |
| Whole journey works with keyboard only (search, filter, open form, submit, close with Esc) | Yes |
| Visible focus outline on all controls | Yes |
| Errors are announced (`role="alert"`) | Yes |

## 4. Performance 



| Metric | Mobile | Desktop |
|---|---|---|
| Performance score | 97 | 85 |
| Best Practices score | 100 | 100 |
| SEO score | 100 | 100 |

Measured with PageSpeed Insights on the live link (Oct 17, 2026). The app runs on Render's free plan, which sleeps when idle, so the first request can be slow. This probably lowered the desktop performance score.

Already done for speed: gzip compression, 1 hour caching for static files in production, no framework or large libraries, no images.

## 5. Mobile experience

| Check | Result |
|---|---|
| Layout works at 375px, 768px and 1280px | Yes |
| Menu button works on small screens | Yes |
| Buttons and inputs are at least 44px tall | Yes (CSS) |
| Form dialog fits a small phone screen | Yes |

## 6. Production checks

| Check | Result |
|---|---|
| Live link opens | Yes |
| `/health` returns `{"status":"ok"}` on the live link | Yes |
| Request logs visible in the Render **Logs** tab | Yes |
| Apply form works on the live link | Yes |
