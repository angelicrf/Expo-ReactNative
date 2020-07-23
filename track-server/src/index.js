const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const mongoUri =
  "mongodb+srv://admin:password123456@cluster0.kymqq.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
app.get("/", (req, res) => {
  res.send("Hi Angelique");
});

app.listen(3000, () => {
  console.log(`server is running on port ${port}`);
});
