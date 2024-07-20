const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", require("./routes/routes"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

module.exports = app;
