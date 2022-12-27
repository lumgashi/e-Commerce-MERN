const {
  createOrder,
  getAllOrders,
  markOrderAsShipped,
} = require("../controllers/orderController");

const router = require("express").Router();
router.post("/", createOrder);
router.get("/", getAllOrders);
router.patch("/:id/mark-shipped", markOrderAsShipped);
module.exports = router;
