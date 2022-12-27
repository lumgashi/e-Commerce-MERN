const express = require("express");
const dotenv = require("dotenv");
const app = express();
const http = require("http");
const cors = require("cors");
require("./connection");
const server = http.createServer(app);
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const imageRoutes = require("./routes/imageRoutes");
const orderRoutes = require("./routes/orderRoutes");

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PATCH"],
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/images", imageRoutes);
app.use("/api/order", orderRoutes);

app.post("/create-payment", async (req, res) => {
  const { amount } = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
});

server.listen(process.env.PORT, () => {
  console.log(`server is running of port ${process.env.PORT}`);
});

app.set("socketio", io);
