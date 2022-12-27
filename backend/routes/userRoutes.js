const router = require("express").Router();
const {
  userRegister,
  userLogin,
  getUsers,
  getUserOrders,
  updateNotifications,
} = require("../controllers/userControllers");

router.post("/signup", userRegister);
router.post("/login", userLogin);
router.get("/", getUsers);
router.get("/:id/orders", getUserOrders);
router.post("/:id/updateNotifications", updateNotifications);

module.exports = router;
