const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.render("index");
});
routes.get("/about", (req, res) => {
  res.render("about");
});

routes.get("/property", (req, res) => {
  res.render("property");
});

module.exports = routes;
