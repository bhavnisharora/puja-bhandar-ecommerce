import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import cors from "cors";
const app = express();

//config env
dotenv.config();

//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// all routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1> welcome to ecommerce website </h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`${process.env.MODEL} server running on ${PORT}`);
});
