const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true

});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection Success!");
})

app.listen(5000, ()=> {
    console.log(`Server is up and running on port number: ${PORT}`)
})

const appointmentRouter = require("./routes/appointments.js");

// http://localhost:5000/appointment

app.use("/appointment", appointmentRouter);