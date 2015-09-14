var pg = require('pg');

var conString = "postgres://testuser:password@localhost:5432/todo";

module.exports = function delItem(req, res, next) {

	body = req.body;

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

    	// Delete the specified task
    	client.query('DELETE FROM tasks WHERE id=$1;', 
    		[body.id], function(err, result) {

        	// handle an error from the query
        	if(handleError(err)) return;

        	// return the client to the connection pool for other requests to reuse
        	done();
    		res.writeHead(202, {'content-type':'text/plain'}); 
    		res.end('Deletion successful');
        	res.send();
    	});
	});
	next();
};