var express = require('express');
//var forever = require('forever');
var app = express();

var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res) {
    res.render('index.html');
});

// Handle 404
app.use(function(req, res) {
    res.status(404);
    res.render('404.html');

});

//app.get('/about', function(req, res) {
//    res.render('about.html');
//});

app.listen(app.get('port'), function() {
   console.log('App listening on port ' + app.get('port'));
});

module.exports = app;