var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join( __dirname +'/views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.html');
});

//app.get('/about', function(req, res) {
//    res.render('about.html');
//});

app.listen(3000, function() {
   console.log('App listening on port 3000...');
});

module.exports = app;