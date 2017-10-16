var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {Produto} = require('./models/Produto');

app.use(bodyParser.json())

app.get('/', (req, resp) => {
  console.log(resp.send('Hello World!'));
})




app.listen(3000);
