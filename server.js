const GREETING = process.env.GREETING || 'Hello'

require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(GREETING + ' from ' + require('os').hostname() + '\n');
}).listen(8080);
console.log('Server running on 8080');
