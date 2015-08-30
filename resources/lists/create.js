module.exports = function createList(rec, res, next) {
	res.send({hey: 'there'});
	next();
};