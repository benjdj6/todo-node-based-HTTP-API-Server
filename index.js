var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 8080;

server.listen(port, function() {
	console.log('ToDo API Server listening on port %j', server.address());
});