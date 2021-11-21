const Router = require("express").Router();

const CountyRouter = require("./CountryRoute");
const HomeRouter = require("./HomeRoute");
const UserRouter = require("./UserRoute");


Router.use("/users", UserRouter)

Router.use("/", HomeRouter);
Router.use("/countries", CountyRouter);


module.exports = Router;