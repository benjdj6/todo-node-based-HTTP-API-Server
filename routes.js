var server = require('./server');
var resources = require('./resources');

//Lists
server.get('/lists', resources.lists.list);

//Tasks
server.get('/lists/:list/items', resources.items.list);
server.post('/lists/:list/items', resources.items.create);
server.del('/lists/:list/items/:item', resources.items.del);