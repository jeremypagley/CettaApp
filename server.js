var express = require('express');
var app = express();

require('./router/main')(app);

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.send('Hello User!');
});

app.listen(3000, function() {
   console.log('App listening on port 3000...');
});