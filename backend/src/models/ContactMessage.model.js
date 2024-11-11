import mongoose, { Schema } from "mongoose";

const contactMessageSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ContactMessageModel = mongoose.model('contactmessage', contactMessageSchema);

export default ContactMessageModel;