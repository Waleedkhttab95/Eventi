const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
const bodyParser = require('body-parser');
const path = require('path');
const app =express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("/images")));


mongoose.connect(keys.mongoUri)
.then(() =>{
    console.log("Connected to database!");
})
.catch(() =>{
    console.log("faild connect!!");
});

require('./routes/eventsRoutes')(app);  


  module.exports = app;