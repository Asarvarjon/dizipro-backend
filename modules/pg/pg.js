const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");
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


        await sequelize.sync({ force: false });

	    await init(db)


        return db; 
    } catch (error) {
        console.log("SQL ERROR", error);
    }
}