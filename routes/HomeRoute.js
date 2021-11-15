const { HomeGetController } = require("../controllers/HomeRouteController");

const HomeRouter = require("express").Router();

HomeRouter.get("/", HomeGetController);

module.exports = HomeRouter;