const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");
const UsersModel = require("../../models/UsersModel");
const init = require("./init");
const relations = require("./relations");

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


        await relations(db)
        await sequelize.sync({ force: false });

	    // await init(db)


        return db; 
    } catch (error) {
        console.log("SQL ERROR", error);
    }
}