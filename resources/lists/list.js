/**module.exports = function listLists(rec, res, next) {
	res.send({hey: 'there'});
	next();
};**/

var http = require('http');
var pg = require('pg');

var conString = "postgres://testuser:password@localhost:5432/todo";

module.exports = function listLists(req, res, next) {

	//params = req.query;

	pg.connect(conString, function(err, client, done) {

		var handleError = function(err) {
    	// no error occurred, continue with the request
    		if(!err) return false;

    		// An error occurred, remove the client from the connection pool.
    		// A truthy value passed to done will remove the connection from the pool
    		// instead of simply returning it to be reused.
    		// In this case, if we have successfully received a client (truthy)
    		// then it will be removed from the pool.
    		if(client){
    		  done(client);
    		}
    		console.log(err);
   			res.writeHead(500, {'content-type': 'text/plain'});
    		res.end('An error occurred');
    		return true;
  		};

    	// handle an error from the connection
    	if(handleError(err)) {
    		return;
    	}
    	/**else {
    		console.log("No error");
    		return;
    	}**/

    	// record the visit
    	/**client.query('INSERT INTO tasks (content, list, complete) VALUES (%s, %s, %b)', 
    		(params.content,), (params.list,), (params.complete), function(err, result)**/

      	// get the total number of visits today (including the current visit)
      	client.query('SELECT * FROM tasks;', function(err, result) {

        	// handle an error from the query
        	if(handleError(err)) return;

        	// return the client to the connection pool for other requests to reuse
        	done();
        	console.log(result);
        	res.writeHead(200, {'content-type': 'text/plain'});
        	res.end('The lists are: ' + result);
        	res.send();
    	});
	});
	next();
};