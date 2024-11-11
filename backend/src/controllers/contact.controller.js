import ContactMessageModel from "../models/ContactMessage.model.js";
import { contactBodyRequestSchema } from "../utils/zodSchemas.js";

export async function saveContactMessage(req, res, next) {
    // Validate the request body for necessary fields.
    const { error, data } = contactBodyRequestSchema.safeParse(req.body);
    if (error) {
        res.status(422).json({
            success: false,
            message: error.errors[0].message,
        });
        return;
    }
    // Extracting email,title,message from parsed data
    const { email, title, message } = data;
    try {
        //Insert into database
        await ContactMessageModel.create({
            email, title, message
        });

        //Responding back to client
        res.status(200).json({
            success: true,
            message: "Message saved successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

