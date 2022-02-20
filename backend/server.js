require('dotenv').config({path: "./config.env"})
const express = require('express')
const bodyparser = require("body-parser");
const cors=require("cors");
const errorHandler = require("./middleware/errorHander");
const connectDB = require('./config/mongoDB')

connectDB()


const app = express();

const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.urlencoded({ extended : true}))

app.use(errorHandler);

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () =>
    console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
});