const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//importing routes
const indexRoutes = require('./routes/index'); 

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});