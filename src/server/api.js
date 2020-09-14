var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/save', function(req,res){
  console.log('/save');
  var fContents = req.body.base64;
  var fName = req.body.fileName;
  var buffer = new Buffer(fContents, 'base64');
  res.setHeader('Content-Transfer-Encoding', 'binary');
  res.setHeader('Content-Length', fContents.length);
  res.setHeader('Content-Disposition', 'inline; filename=' + fName);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(buffer);
})

app.listen(8081);
console.info('Listening at http://localhost:8081');
