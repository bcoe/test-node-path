var http = require('http')
var port = process.env.PORT || 1337;
var pkgConf = require('pkg-conf')

http.createServer(function(req, res) {
  var conf = pkgConf.sync('yargs', {
    defaults: {},
    cwd: require.main.filename
  })
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(conf) + '\n')
}).listen(port);
