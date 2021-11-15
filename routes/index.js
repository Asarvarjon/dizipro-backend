const Router = require("express").Router();

const HomeRouter = require("./HomeRoute");

Router.use("/", HomeRouter);

module.exports = Router;