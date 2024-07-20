const express = require("express");
const cors = require("cors");
const app = express();

const connect = require("./config/db.connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3200;

connect()
  .then((res) => {
    app.listen(port, function () {
      console.log(`Server is running at ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
