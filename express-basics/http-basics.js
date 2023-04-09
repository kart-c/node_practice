// Express is minimalist framework for Node
const express = require("express");

const app = express();

/**
 * Common methods
 * app.get        HTTP GET
 * app.post       HTTP POST
 * app.put        HTTP PUT
 * app.delete     HTTP DELETE
 * app.all        Matches with all HTTP methods
 * app.use        Middleware
 * app.listen     To listen on specified port
 */

app.listen(8000, () => {
	console.log("Server is listening on port 8000...");
});

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/about", (req, res) => {
	res.send("About Page");
});

app.all("*", (req, res) => {
	const errorResponse =
		'<p>Error! Page you\'re looking for does not exist! <a href="/">Home</a></p>';
	res.status(404).send(errorResponse);
});
