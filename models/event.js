const mongoose=require('mongoose');


const eventSchema= new mongoose.Schema({
name: {type:String,require:true,},
description: {type:String,require:true,},
from: {type:String,require:true,},
imgUrl: {type:String},
time: {type:String,require:true,},
Date: {type:Date,require:true,},
password : String
});

const Events =  mongoose.model('Events', eventSchema);
module.exports.Events= Events ;
