const AuthMiddleware = require("../middlewares/AuthMiddleware");
const AdminMiddleware = require("../middlewares/AdminMiddleware"); 
const { AddSkillPostController, SkillsGetController } = require("../controllers/SkillController");

const SkillRouter = require("express").Router();

SkillRouter.use(AuthMiddleware);

SkillRouter.post("/", AdminMiddleware, AddSkillPostController);
SkillRouter.get("/", SkillsGetController);

module.exports = SkillRouter;