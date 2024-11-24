const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

// using express for the middlewares
const app = express();
app.use(bodyParser.json());

// connect the database
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
