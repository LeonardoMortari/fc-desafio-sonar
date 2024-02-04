const { Console } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, World')
});

server.listen(3000, () => {
    Console.log('Server running at http://localhost:3000/')
})