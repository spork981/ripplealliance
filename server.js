//From http://hectorcorrea.com/blog/introduction-to-node-js

var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 80;

// Log the requests
app.use(express.logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(port);
console.log('Listening on port 80');