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

const userController = require("../controllers/authController");

routes.post("/users", userController.createUser);
routes.get("/users", userController.getAllUsers);
routes.get("/users/:id", userController.getUserById);
routes.patch("/users/:id", userController.updateUser);
routes.delete("/users/:id", userController.deleteUser);

module.exports = routes;
