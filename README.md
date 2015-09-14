This is a ReSTful HTTP API Server implemented using Restify

<h2>Requirements</h2>
In order to run this server you need the following installed.
<ul>
	<li>node.js - https://nodejs.org/en/</li>
	<li>restify - http://mcavage.me/node-restify/</li>
	<li>pg - https://github.com/brianc/node-postgres</li>
	<li>PostgreSQL - http://www.postgresql.org</li>
</ul>

<h2>Setup</h2>
To setup the Postgres Database such that it will work with this server, please follow the setup instructions of PostgreSQL on their site. I recommend using Postgres.app for faster setup as it will run on the proper port 5432 by default. Then do the following.

run from the todo directory:
>psql createdb todo

>psql \c todo

>psql \i SQL/todo.sql

>CREATE USER testuser WITH PASSWORD password;

>GRANT ALL PRIVILEGES ON tasks TO testuser;


<h2>Running and Using</h2>
To run the service simply run
'node .'
from the todo directory

Here are some sample curl calls to use on the service:

<b>GET all Items</b>

curl -i -X GET localhost:8080/items


<b>GET all Lists</b>

>curl -i -X GET localhost:8080/lists


<b>PUT a new Item</b>

>curl -i -X PUT localhost:8080/items/myItem --data '{"content":"sample task 9", "list":"samplelist3", "complete":"false"}' -H 'content-type: application/json'


<b>DELETE an Item by ID</b>

>curl -X DELETE -i localhost:8080/items/itemID --data '{"id":"1"}' -H 'content-type: application/json'


<h2>To Come</h2>
I'm currently working on: 
* allowing updates to already existing tasks
* recognizing Postgres command tags
