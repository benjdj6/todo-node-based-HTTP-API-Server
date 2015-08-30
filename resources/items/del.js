module.exports = function delItem(rec, res, next) {
	res.send({hey: 'there'});
	next();
};