const app = require("./app");
const connect = require("./config/db.connection");
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
