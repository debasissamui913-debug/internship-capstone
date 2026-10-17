const db = require("./db");
const { seed } = require("./seed");
const { createApp } = require("./app");

// Add the sample data automatically if the table is empty
if (db.prepare("SELECT COUNT(*) AS c FROM internships").get().c === 0) seed(db);

const PORT = process.env.PORT || 3000;
const server = createApp().listen(PORT, () => console.log("Portal running at http://localhost:" + PORT));

// Stop cleanly when the platform restarts or stops the app
function shutdown(signal) {
  console.log(JSON.stringify({ time: new Date().toISOString(), event: "shutdown", signal }));
  server.close(() => { db.close(); process.exit(0); });
  setTimeout(() => process.exit(1), 5000).unref();
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
