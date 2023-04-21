const express = require("express");
const morgan = require("morgan");

const logger = require("./logger");
const addParams = require("./addParamsMiddleware");

/**
 * Middleware is a function that sits between the request and response cycle
 * request => middleware => response
 * middleware functions can be used to modify the request or response objects, handle errors, etc
 *
 * Middleware can be either
 *  - Custom middleware e.g. logger and addParams
 *  - Built-in middleware e.g. express.static used in html-example.js file
 *  - Third party middleware e.g. morgan
 */

const app = express();

app.use(morgan("tiny"));

// To use middleware to all the routes starting from below
// app.use(logger);

// To use multiple middlewares
// app.use([logger, addParams]);

// To use middleware on a particular path
// app.use("/api", logger);

// To use middleware to one particular route, for multiple middlewares in single route - add in an array
// app.get("/", logger, (req, res) => {
// 	res.send("Home");
// });
app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/api/products", (req, res) => {
	res.send("Products");
});

app.listen("8000", () => {});
