const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require('./app');

dotenv.config({ path: "./.env" });

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server has started on port localhost:${PORT}`)
);
