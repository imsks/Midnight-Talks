const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const io = require("./socket").getIO();
const chat = require("./routes/chat");

const router = express.Router();

dotenv.config({ path: "./.env" });

const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/chat", chat);

module.exports = app;
