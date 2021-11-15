require("dotenv").config()

const express = require("express");

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
    } catch (error) {
        console.log(`SERVER ERROR: ${error}`);
    }
}

server()