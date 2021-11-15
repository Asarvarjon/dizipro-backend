const Router = require("express").Router();

const CountyRouter = require("./CountryRoute");
const HomeRouter = require("./HomeRoute");

Router.use("/", HomeRouter);
Router.use("/countries", CountyRouter);

module.exports = Router;