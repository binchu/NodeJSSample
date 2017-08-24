var http = require('http');

const host = '127.0.0.1';
const port = 8080;

var server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	//res.write('This is my Node.js website!\n');
	res.end('This is my Node.js website!\nHello World!');
}
);

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}`);
})

