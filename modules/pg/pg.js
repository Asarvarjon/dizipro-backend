const { Sequelize } = require("sequelize");
const BanModel = require("../../models/BanModel");
const CountryModel = require("../../models/CountryModel");
const EmailAttemptsModel = require("../../models/EmailAttemptsModel");
const ProjectModel = require("../../models/ProjectModel");
const ProjectsFilesModel = require("../../models/ProjectsFilesModel");
const ProjectsSkillModel = require("../../models/ProjectsSkillModel");
const ProjectsSoftwaresModel = require("../../models/ProjectsSoftwaresModel");
const Relations = require("../../models/Relations");
const SkillModel = require("../../models/SkillModel");
const SoftwareModel = require("../../models/SoftwareModel");
const UserSessionModel = require("../../models/UserSessionModel");
const UsersModel = require("../../models/UsersModel");
const init = require("./init"); 

if(!process.env.PG_CONNECTION_STRING){
    throw new Error("PG CONNECTION STRING NOT FOUND")
};


const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
    logging: false
});


module.exports = async function pg(){
    try {
        await sequelize.authenticate();
        let db = {};

        db.countries = await CountryModel(sequelize, Sequelize)
        db.users = await UsersModel(sequelize, Sequelize) 
        db.sessions = await UserSessionModel(sequelize, Sequelize);
        db.attempts = await EmailAttemptsModel(sequelize, Sequelize);
        db.user_bans = await BanModel(sequelize, Sequelize);
        db.skills = await SkillModel(sequelize, Sequelize);
        db.softwares = await SoftwareModel(sequelize, Sequelize);
        db.projects = await ProjectModel(sequelize, Sequelize);
        db.projects_skills = await ProjectsSkillModel(sequelize, Sequelize);
        db.projects_softwares = await ProjectsSoftwaresModel(sequelize, Sequelize);
        db.projects_files = await ProjectsFilesModel(sequelize, Sequelize);
        db.sequelize = sequelize;

        await Relations(db);
        await sequelize.sync({ force: false });

	    await init(db)


        return db; 
    } catch (error) {
        console.log("SQL ERROR", error);
    }
}