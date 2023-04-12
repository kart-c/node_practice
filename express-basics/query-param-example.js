const express = require("express");
const products = require("./data");

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Home page</h1><a href='/products'>Products</a>");
});

app.get("/products", (req, res) => {
	res.json(products);
});

// Accessing route params
// e.g. /product/5
app.get("/product/:id", (req, res) => {
	const id = req.params.id;
	const product = products.find((product) => product.id === Number(id));
	if (product) {
		/**
		 * Why return here? Without the return, the below line will send the json
		 * to client and end the response. But JS is still running, and it will reach
		 * the block outside the if condition and try to send that response as well but end up
		 *  throwing an error saying "Cannot set headers after they are sent to the client"
		 */
		return res.json(product);
	}
	res.status(404).send("<p>No product found</p>");
});

// Query
// /query/brand=apple
app.get("/query", (req, res) => {
	const brand = (req.query.brand || "").toLowerCase();
	const filteredProducts = products.filter((product) => product.brand.toLowerCase() === brand);

	res.json(filteredProducts);
});

app.all("*", (req, res) => {
	const errorResponse =
		"<p>Error! Page you're looking for does not exist! <a href='/'>Home</a></p>";
	res.status(404).send(errorResponse);
});

app.listen(8000, () => {
	console.log("Listening on port 8000...");
});
