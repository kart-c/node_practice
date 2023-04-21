const addParams = (req, _res, next) => {
	const params = req.params;
	params.id = 123;
	console.log({ params });
	next();
};

module.exports = addParams;
