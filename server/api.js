var express = require('express');
const router = express.Router();

router.post('/save', function(req,res){
  console.log('/save', req);
  var fileContent = req.body.base64;
  var fileName = req.body.fileName;
  var buffer = new Buffer(fileContent, 'base64');
  res.setHeader('Content-Transfer-Encoding', 'binary');
  res.setHeader('Content-Length', fileContent.length);
  res.setHeader('Content-Disposition', 'inline; filename=' + fileName);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(buffer);
})

module.exports = router;