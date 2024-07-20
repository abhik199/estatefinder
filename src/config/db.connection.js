const { connect } = require("mongoose");
const conf = require("./conf");

function connects() {
  return connect(`${conf.DB_URL}/${conf.DB_NAME}`, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection failed:", err));
}

module.exports = connects;
