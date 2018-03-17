var express = require('express');
var logger = require('morgan');
var soap = require('soap');
var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

var url = 'http://localhost:8520/test?wsdl';

app.get('/send_command/:cmd', (req, res) => {
  var args = {arg0: req.params.cmd};
  soap.createClient(url, function(err, client) {
      client.add(args, function(err, result) {
        console.log(result)
    });
  });
});

app.listen(3012);
