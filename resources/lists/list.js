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

      	// get all of the different lists
      	client.query('SELECT list from tasks group by list;', function(err, result) {

        	// handle an error from the query
        	if(handleError(err)) return;

        	// return the client to the connection pool for other requests to reuse
        	done();
        	var json = JSON.stringify(result.rows);
    		res.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)}); 
    		res.end(json);
        	res.send();
    	});
	});
	next();
};