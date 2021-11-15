require("dotenv").config()

const express = require("express");
const { customErrorMiddleware } = require("./middlewares/customErrorMiddleware"); 
const pg = require("./modules/pg/pg");
const Routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3030;

async function server(){
    try {
        app.listen(PORT, ()=> {
            console.log(`Server is ready at ${PORT}`);
        })

        app.use(express.json());

        app.use(express.urlencoded({
            extended: true
        }))
        app.use(customErrorMiddleware)
        app.use("/v1", Routes)

        app.use((req, res, next) =>{
            const db = await pg;
            req.db = db;
            next()
        })
    } catch (error) {
        console.log(`SERVER ERROR: ${error}`);
    }
}

server()