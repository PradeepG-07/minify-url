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

//Error Handler 
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
})

//Handling all Invalid requests
app.use(function (req, res) {
    res.status(404).json({
        success: false,
        message: '404 URL not found.',
    });
});


export default app;