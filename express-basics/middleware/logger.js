/**
 * Each middleware function has access to these 3 parameters.
 * The middleware can either stop and send response from here itself or pass the
 * control over to the next middleware
 */
const logger = (req, _res, next) => {
	const path = req.path;
	const time = new Date().toUTCString();
	console.log({ path, time });
	/**
	 * Either call next to pass control over to the next middleware or send the response
	 * Doing neither will break the app - the request will be left hanging and
	 * the server will not be able to respond.
	 */
	next();
};

module.exports = logger;
