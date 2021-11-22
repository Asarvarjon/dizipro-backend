
const ProjectRouter = require("express").Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const ProjectsController = require("../controllers/ProjectsController");
const fileUpload = require("express-fileupload");


ProjectRouter.use(AuthMiddleware); 


ProjectRouter.post("/",fileUpload({
    safeFileNames: false
}) ,ProjectsController.CreateProjectPostController)
 

module.exports = ProjectRouter;