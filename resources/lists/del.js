module.exports = function delList(rec, res, next) {
	res.send({hey: 'there'});
	next();
};