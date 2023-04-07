const http = require("http");

const products = [
	{
		id: 1,
		title: "iPhone 9",
		price: 549,
	},
	{
		id: 2,
		title: "iPhone X",
		price: 899,
	},
	{
		id: 3,
		title: "Samsung Universe 9",
		price: 1249,
	},
	{
		id: 4,
		title: "OPPOF19",
		price: 280,
	},
];

const server = http.createServer((req, res) => {
	console.log("Starting server on port 8000...");

	if (req.url === "/") {
		/**
		 * res.end() is necessary
		 * It tells the server that all the response headers and body are sent i.e. request complete
		 */
		res.write("<p>Home Page</p>");
		res.end();
	} else if (req.url === "/about") {
		res.write("<p>About Page</p>");
		res.end();
	} else if (req.url === "/products") {
		/**
		 * Send a response header to the request
		 * Arguments - status code, optional status message, headers
		 */
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(products));
	} else {
		res.write("<p>404 page not found</p><a href='/'>Home</a>");
		res.end();
	}
});

server.listen(8000);
