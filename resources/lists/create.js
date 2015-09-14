module.exports = function createList(rec, res, next) {
	var body = req.body;
	console.log('body', body);
	res.send({hey: 'there'});
	next();
};