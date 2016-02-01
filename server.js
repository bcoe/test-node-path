var http = require('http')
var port = process.env.PORT || 1337;
var yargs = require('yargs')

http.createServer(function(req, res) {
  var argv = yargs('--config ./config.json')
    .config('config')
    .argv
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(argv) + '\n')
}).listen(port);
