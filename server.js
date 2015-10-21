/*Practice 1:============================================================================================================
//Read data from a text file and display in console.
var fs = require('fs');

fs.readFile('example.txt', 'utf8', function (err, data)
{
	if(err)
	{
		return console.log(err);
	}
	console.log(data);
});

*/

/*Practice 2:============================================================================================================
//Simple server response
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

/*Practice 3==============================================================================================================
//Reading data from a file. This time using the connect middleware.

var connect = require('connect');
var fs = require('fs');
var app = connect();
var textdata = "";

fs.readFile('example.txt', 'utf8', function(err, data){
		if(err)
		{
			return err;
		}
		textdata = data;
		//processfile(data);
		showDataInConsole();
});

function showDataInConsole()
{
	console.log(textdata);
}


//function processfile(data)
//{
//	textdata = data;
//	console.log(textdata);
//}

var showData = function(req, res, next)
{	
	res.setHeader('content-type', 'text/plain');
	res.end(textdata);	
};

app.use(showData);
app.listen(3000);
console.log("Server runnning at http://localhost:3000");

*/

/*Practice 4:=============================================================================================================

//An important lesson I learned is that fs.readFile is an asynchronous function and hence the console log has to be in the function fs.readfile function.

var connect = require('connect');
var fs = require('fs');
var app = connect();
var textdata = "";

var setData = function()
{
	fs.readFile('example.txt', 'utf8', function(err, data){
			if(err)
			{
				return err;
			}
			textdata = data;
			console.log(textdata);
	});
	
	return textdata;
}

var showData = function(req, res, next)
{	
	setData();
	res.setHeader('content-type', 'text/plain');
	res.end(textdata);	
};

app.use(showData);
app.listen(3000);
console.log("Server runnning at http://localhost:3000");
*/



/*Practice 5:==============================================================================================================
//Using simple mounting using connect only.

var connect = require('connect');
var app = connect();

var logger = function(req, res, next)
{
	console.log(req.method, req.url);
	next();
};

var nicePerson = function(req, res, next)
{
	res.setHeader('content-type', 'text/plain');
	res.end('You are a very nice person');
};

app.use(logger);
//app.use('/', nicePerson); Mounting a default function for root else it will show a message cannot get when accessing root.
app.use('/nice', nicePerson);
app.listen(3000);

console.log('Server running at http://localhost:3000/');*/

/*Practice 6:=============================================================================================================
//Simple Express server that responds with a text message on server request.
//In express unlike connect we don't have to setheaders as it is automatically done for you.

var express = require('express');
var app = express();

app.use('/', function(req, res)
{
	res.send("I like watching Agents of Shield");
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;

*/

//Practice 7:=============================================================================================================
//Simple express server that reponds to the corresponding route with the relevant data for that route.

var express = require('express');
var app = express();

app.get('/', function(req, res)
{
	res.send("Favorites Home");
});

app.get('/book', function(req, res){
	res.send("Favorite Book: Harry Potter and the Goblet of Fire");
});

app.get('/movie', function(req, res){
	res.send("Favorite Movie: Her");
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;