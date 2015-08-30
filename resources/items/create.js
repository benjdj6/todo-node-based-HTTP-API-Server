module.exports = function createItem(rec, res, next) {
	res.send({hey: 'there'});
	next();
};