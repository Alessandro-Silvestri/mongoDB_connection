import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const dbURI = "mongodb://127.0.0.1:27017/myTestDataBase";

const __filename = fileURLToPath(import.meta.url); // full path to the current file.
const __dirname = path.dirname(__filename); // path of the directory containing this file

//////// DB connection
async function connectDB() {
  try {
    await mongoose.connect(dbURI);
    console.log("connection ok (open)");
  } catch (err) {
    console.log("ERROR: ");
    console.log(err.message);
  }
}
connectDB();

//////// Schema 
const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    address: String,
    phone: String,
    accountBalance: Number,
    email: String,
  },
  restaurantInformation: { name: String, address: String, phone: String },
  orderTime: String,
  orderItems: [{ item: String, price: Number }],
  totalOrder: Number,
});

//////// Model
const Order = mongoose.model("order", orderSchema, "foodOrderApp");

// Serve static frontend files (index.html, script.js)
app.use(express.static(__dirname));

// API Endpoint to fetch the first order
app.get("/api/first-record", async (req, res) => {
  try {
    const queryResponse = await Order.findOne();
    res.json(queryResponse);
  } catch (err) {
    console.log("ERROR:");
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () =>{
    console.log("Server running at port: ", port)
})
