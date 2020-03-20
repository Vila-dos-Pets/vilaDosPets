const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose');
  var requireDir = require('require-dir');


  bodyParser = require('body-parser');
  const logger = require('morgan')
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vilaDosPets',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); 

requireDir('./src/models');
app.use(logger('dev'));

app.use('/vilaDosPets', require('./src/routes/routes'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('Vila dos Pets RESTful API server started on: ' + port);