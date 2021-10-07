const express = require ("express");
const logger = require ('morgan');

const indexRouter = require('./routes/index');
const http = require('http');



const app = express();

app.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.statusCode = 201;
    next();
});
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
const port =  '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;
