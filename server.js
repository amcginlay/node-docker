require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from ' + require('os').hostname() + '\n');
}).listen(8080);
console.log('Server running on 8080');
