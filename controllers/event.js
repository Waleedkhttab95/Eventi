const mongoose = require('mongoose');
const {Events} = require('../models/event');




exports.createEvent = async (req ,res) =>{
const url = req.protocol + '://' + req.get("host");
const event= new Events({
name: req.body.name,
description: req.body.description,
from:req.body.from,
hour: req.body.hour,
minute: req.body.minute,
imgUrl: url + "/images/" + req.file.filename
});

if(req.body.password) {
    event.password = req.body.password;
}


}