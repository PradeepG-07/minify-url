import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello! I am up and working fine." })
})

export default app;