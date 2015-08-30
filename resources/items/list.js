module.exports = function listItems(rec, res, next) {
	res.send({hey: 'there'});
	next();
};