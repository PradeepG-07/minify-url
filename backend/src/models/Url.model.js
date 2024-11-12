import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    longUrl: {
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

const UrlModel = mongoose.model('url', urlSchema);

export default UrlModel;