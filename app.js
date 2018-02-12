let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.send('hello');
});

app.listen(port, (err) => {
  if(err) console.log(err);

  console.log('Running api on port: ', port);
});
