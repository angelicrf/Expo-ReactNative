require("../models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("../routes/authRoutes");
const requireAuth = require("../src/middlewares/requireAuth");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(authRoutes);
const mongoUri =
  "mongodb+srv://admin:password123456@cluster0.kymqq.mongodb.net/Test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.on("connected", () => {
  console.log(`mongoDb is connected...`);
});
mongoose.connection.on("error", error => {
  console.error("Error connecting to mongoDB...");
});
app.get("/", requireAuth, (req, res) => {
  res.send(`Hi, your email is: ${req.user.email} `);
});

app.listen(3000, () => {
  console.log(`server is running on port ${port}`);
});
