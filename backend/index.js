// Import semua modul yang diperlukan
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"; // Pindahkan cookie-parser ke atas bodyParser
import adminRouter from "./router/admin.js";
import dataRouter from "./router/data.js";
import { Sequelize } from "sequelize";

// Inisialisasi aplikasi express
const app = express();

// Gunakan middleware untuk parsing cookie dari request
app.use(cookieParser());

// Gunakan middleware untuk parsing body dari request
app.use(bodyParser());
app.use(cors());

dotenv.config();

// Router untuk rute admin dan data
// app.use("/api/admin", adminRouter);
app.use("/api/data", dataRouter);

// Error middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Inisialisasi server HTTP

// Tangani koneksi socket

// Jalankan server di port 3000
const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`Server running on port 3000`);
});
