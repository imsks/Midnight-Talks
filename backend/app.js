const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./.env" });

const bodyParser = require("body-parser");

// const report = require("./routes/reports");
// const startup = require("./routes/startups");
// const collect = require("./routes/collect");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// For React App
// app.use(express.static(path.join(__dirname, "public")));

// Will check for API route first
// app.use("/api/report", report);
// app.use("/api/startup", startup);
// app.use("/api/collect", collect);

// Middleware to check the path
// const checkRoute = (req, res, next) => {
//   if (req.path === "/api") return next();

//   // next();
// };
// app.get("/*", checkRoute, (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

module.exports = app;
