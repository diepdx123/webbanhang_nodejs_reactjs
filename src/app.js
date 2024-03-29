import express from "express";
import authRouter from "./routers/auth";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
connectDB(process.env.DB_URI);

// router
app.use("/api/v1", authRouter);
export const viteNodeApp = app;
