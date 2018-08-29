const app = require('./app');
const http = require("http");



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*' , (req , res )=>{
res.sendfile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const server = http.createServer(app);

const PORT  = process.env.PORT || 5000;
app.listen(PORT);

