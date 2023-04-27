const allProducts = require("../data");

const getAllProductsHandler = (req, res) => {
	res.status(200).json({ success: true, data: allProducts });
};

const getProductHandler = (req, res) => {
	const { id } = req.params;
	const result = allProducts.find((product) => product.id === Number(id));
	if (result) {
		return res.status(200).json(result);
	}
	return res.status(404).json({
		success: false,
		error: { status: 404, message: `Could not found product with id ${id}` },
	});
};

const addProductHandler = (req, res) => {
	const product = req.body;
	console.log(product);
	allProducts.push({ id: allProducts.length + 1, ...product });
	res.status(201).json({ success: true, data: allProducts });
};

module.exports = { getAllProductsHandler, getProductHandler, addProductHandler };
