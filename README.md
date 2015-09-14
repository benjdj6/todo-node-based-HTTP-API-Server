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
'''
>psql createdb todo

>psql \c todo

>psql \i SQL/todo.sql

>CREATE USER testuser WITH PASSWORD password;

>GRANT ALL PRIVILEGES ON tasks TO testuser;
'''
