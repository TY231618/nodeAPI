let express = require('express');
let app = express();
let mongoose = require('mongoose');

let port = process.env.PORT || 3000;

let db = mongoose.connect('mongodb://localhost:27017/node-api', (err) => {
  if(err) console.log(err);

  console.log('mongoose connected');
});

app.get('/', (req, res) => {

  res.send('hello');
});

app.listen(port, (err) => {
  if(err) console.log(err);

  console.log('Running api on port: ', port);
});
