const express = require("express");
const productRouter = require("./router/productRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api/products", productRouter);

app.listen("8000", () => {
	console.log("Listening on port 8000...");
});
