var http = require('http');
var options = {
	host: '127.0.0.1',
	port: 8080,
	method: 'GET'
};
var req = http.request(options, function (res){
	console.log('Status: ' + res.statusCode);
	console.log('Headers: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('Body: ' + chunk);
	});
});
req.on('error', function (e) {
	console.log('Problem with request: ' + e.message);
});
//req.write('data\n');
//req.write('data\n');
req.end();