require("dotenv").config();

const { DB_NAME, DB_URL } = process.env;

module.exports = {
  DB_NAME,
  DB_URL,
};
