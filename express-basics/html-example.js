const express = require("express");
const path = require("path");

const app = express();

/**
 * Here we are sending all the static files, without line below,
 * the app will look for styles path in index.html but will never find it
 */
app.use(express.static("./express-basics/public"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.all("*", (req, res) => {
	const errorResponse =
		"<p>Error! Page you're looking for does not exist! <a href='/'>Home</a></p>";
	res.status(404).send(errorResponse);
});

app.listen(8000, () => {
	console.log("Listening on port 8000");
});

// Without express, the setup will look similar to this
// const http = require("http");
// const { readFileSync } = require("fs");
// const path = require("path");
// const html = readFileSync(path.join(__dirname, "/index.html"));
// const css = readFileSync(path.join(__dirname, "/public/styles.css"));

// const server = http.createServer((req, res) => {
// 	if (req.url === "/") {
// 		res.write(html);
// 		res.end();
// 	} else if (req.url === "/styles.css") {
// 		res.writeHead(200, { "content-type": "text/css" });
// 		res.write(css);
// 		res.end();
// 	} else {
// 		res.write("<p>404 page not found</p><a href='/'>Home</a>");
// 		res.end();
// 	}
// });

// server.listen(8000, () => {
// 	console.log("Listening on port 8000");
// });
