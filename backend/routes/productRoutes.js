const router = require("express").Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
  getByCategory,
  addToCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getOneProduct);
router.get("/category/:category", getByCategory);
router.post("/add-to-cart", addToCart);
router.post("/remove-from-cart", removeFromCart);
router.post("/increase-cart", increaseCart);
router.post("/decrease-cart", decreaseCart);

module.exports = router;
