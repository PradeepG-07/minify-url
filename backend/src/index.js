import cleanedEnv from "./utils/cleanedEnv.js";
import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect(cleanedEnv.MONGODB_URL,{dbName: cleanedEnv.DB_NAME})
    .then((res) => {
        app.listen(cleanedEnv.PORT, () => {
            console.log("Server started at port ", process.env.PORT);
        })
    }).catch((error) => {
        console.log("Error while Connecting to MongoDB", error);
        process.exit(1);
    });
