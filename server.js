var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(require.main.filename) + require.main.children[0] + '\n')
}).listen(port);
