var fs = require('fs')
var net = require('net')

net.createServer(function (c) {
  fs.createReadStream(process.env.QOTD || 'qotd.txt').pipe(c)
}).listen(17)
