// imports
const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const app = express();
const port = process.env.port || 80;

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

// router
var router = express.Router();

// route middleware [alle requests]
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
    //app.use(favicon(__dirname + '/public/img/favicon.ico'));
});

// views
//start pagina (http://localhost:80)
router.get('/', function(req, res) {
    res.render('index');
});

app.use('/', router);
app.listen(port);
console.log('http://localhost:' + port);