var server = require('./server');
var resources = require('./resources');

//Lists
server.get('/lists', resources.lists.list);

//Tasks
server.get('/items', resources.items.list);
server.put('/items/:item', resources.items.create);
server.del('/items/:item', resources.items.del);