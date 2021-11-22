const Router = require("express").Router();

const AdminRouter = require("./AdminRoute");
const CountyRouter = require("./CountryRoute");
const HomeRouter = require("./HomeRoute");
const ProjectRouter = require("./ProjectRoute");
const SkillRouter = require("./SkillRoute");
const SoftwareRouter = require("./SoftwareRoute");
const UserRouter = require("./UserRoute");


Router.use("/users", UserRouter)
Router.use("/countries", CountyRouter);
Router.use("/admin", AdminRouter);
Router.use("/skills", SkillRouter);
Router.use("/softwares", SoftwareRouter);
Router.use("/projects", ProjectRouter)
Router.use("/", HomeRouter);



module.exports = Router;