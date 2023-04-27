const express = require("express");
const {
	getAllProductsHandler,
	getProductHandler,
	addProductHandler,
} = require("../controllers/productsController");

const router = express.Router();

/**
 * Alternatively can be written as =>
 * router.route("/").get(getAllProductsHandler).post(addProductHandler)
 *
 * router.route("/:id").get(getProductHandler)
 *
 */
// router.get("/", getAllProductsHandler);
router.get("/", getAllProductsHandler);

router.post("/", addProductHandler);

router.get("/:id", getProductHandler);

module.exports = router;
