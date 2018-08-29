const mongoose=require('mongoose');
const {Events} = require('../models/event');
const file = require('../middleware/file');
const controller = require('../controllers/event');
module.exports=(app) =>{

app.post('/',file,controller.createEvent);

app.get('/:id',(req ,res) =>{

  //  const result= Event.findbyId(req.body._id);
   res.send({hey :'therrre'});
});

};