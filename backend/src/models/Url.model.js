import { Schema, Model } from "mongoose";

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    miniUrl: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const UrlModel = Model('url', urlSchema);

export default UrlModel;