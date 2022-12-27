require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectionString = process.env.MONGO_URL;

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error(err));
