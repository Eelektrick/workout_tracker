const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    //thanks to my groupmate showing our group this is needed to help connect to heroku
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));

//port
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`);
});