require("dotenv").config()

const express = require("express");
const { errorHandlerMiddleware } = require("./helpers/CustomError");
const { customErrorMiddleware } = require("./middlewares/customErrorMiddleware"); 
const pg = require("./modules/pg/pg");
const Routes = require("./routes");
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3030;

async function server(){
    try {
        const db = await pg();
        app.listen(PORT, ()=> {
            console.log(`Server is ready at ${PORT}`);
        })

        app.use(cors())

        app.use(express.json());

        

        app.use(async(req, res, next) =>{ 
            req.db = db;
            next()
        }) 
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(customErrorMiddleware)  

        app.use("/v1", Routes)

        app.use(errorHandlerMiddleware)
    } catch (error) {
        console.log(`SERVER ERROR: ${error}`);
    }
}

server()