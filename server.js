//Practice 1:

var fs = require('fs');

fs.readFile('example.txt', 'utf8', function (err, data)
{
	if(err)
	{
		return console.log(err);
	}
	console.log(data);
});

/*Practice 2:

var http = require('http');

http.createServer(function(req, res)
{
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('You are a very nice person');
}).listen(3000);

console.log("Server running at http://localhost:3000/");

*/