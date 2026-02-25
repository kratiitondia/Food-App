//Start server
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./src/db/db');

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});


app.listen(3000, () => {
  console.log("Server running at 3000");
});