const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5000;

// MongoDB Connection Setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

// const getApiAndEmit = "TODO";

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  // if (interval) {
  //   clearInterval(interval);
  // }
  getApiAndEmit(socket);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const getApiAndEmit = (socket) => {
  const response = "Sachin";
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(PORT, () =>
  console.log(`Server has started on port localhost:${PORT}`)
);
