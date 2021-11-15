const { Sequelize } = require("sequelize");

if(!process.env.CONNECTION_STRING){
    throw new Error("PG CONNECTION STRING NOT FOUND")
};


const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    logging: false
});


module.exports = async function pg(){
    try {
        await sequelize.authenticate();
        let db = {}



        return db;

    } catch (error) {
        console.log("SQL ERROR", error);
    }
}