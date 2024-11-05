import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";

mongoose.connect(process.env.MONGODB_URL)
    .then((res) => {
        app.listen(process.env.PORT, () => {
            console.log("Server started at port ", process.env.PORT);
        })
    }).catch((error) => {
        console.log("Error while Connecting to MongoDB", error);
        process.exit(1);
    })
