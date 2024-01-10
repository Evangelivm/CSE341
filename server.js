const express = require('express');
const connectdb = require('./db/connection');
const app = express();
const port = 8080;

// Middleware to extract and log request headers
app.use((req, res, next) => {
  const headers = req.headers;
  console.log('Request Headers:', headers);
  next();
});

// Connect to the database
// connectdb();

// app.get('/', function(req, res){
//     res.send('id: ' + req.query.id);
//   });

// Use the routes defined in the './routes' module
app.use('/', require('./routes'));

// Start the server
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});