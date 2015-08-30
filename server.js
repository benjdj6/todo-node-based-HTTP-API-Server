var restify = require('restify');
var bunyan = require('bunyan');

var options = {
	name: "ToDo API"
};

var server = restify.createServer(options);

server.on('after', restify.auditLogger({
	log: bunyan.createLogger({
		name: 'audit',
		stream: process.stdout
	});
}));

module.exports = server;

require('./routes');