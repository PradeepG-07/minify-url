import express from "express";
import cors from "cors";
import morgan from "morgan";
import urlRouter from "./routes/url.route.js";

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
});

app.use("/api/v1", urlRouter);

export default app;