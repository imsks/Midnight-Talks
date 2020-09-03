const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const router = express.Router();

dotenv.config({ path: "./.env" });

const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

router.get("/", (req, res) => {
  res.status(200).send({ response: "I am alive" });
});

module.exports = app;
