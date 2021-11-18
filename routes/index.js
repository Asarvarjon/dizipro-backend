const Router = require("express").Router();

const CountyRouter = require("./CountryRoute");
const HomeRouter = require("./HomeRoute");
const UserRouter = require("./UserRoute");

Router.use("/", HomeRouter);
Router.use("/countries", CountyRouter);
Router.use("/users", UserRouter)

module.exports = Router;