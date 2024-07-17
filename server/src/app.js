const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3200;

app.listen(port, function () {
  console.log(`Server is runnig at ${port}`);
});
