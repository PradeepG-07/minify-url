import UrlModel from "../models/Url.model.js";
import { urlBodyRequestSchema } from "../utils/zodSchemas.js";
import { getRandomString } from "../utils/helpers.js";
import cleanedEnv from "../utils/cleanedEnv.js";

export async function minify(req, res, next) {
    //Validate the request body for necessary fields.
    const { error, data } = urlBodyRequestSchema.safeParse(req.body);
    if (error) {
        res.status(422).json({
            success: false,
            message: error.errors[0].message,
        });
        return;
    }
    // Extracting url from parsed data
    const originalUrl = data.originalUrl;
    try {

        //Check if url exist with the same url provided by user.
        const existingUrl = await UrlModel.findOne({
            originalUrl
        });

        //If url exists simply respond to the client with the existing mini url .
        if (existingUrl) {
            res.status(200).json({
                success: true,
                message: "Mini url already exists.",
                originalUrl,
                miniUrl: existingUrl.miniUrl
            });
            return;
        }

        //Otherwise generate a mini url, save it to database, and respond to client with the mini url
        const randomString = getRandomString(6);
        const miniUrl = `${cleanedEnv.FRONTEND_URL}/${randomString}`;

        //Insert into database
        await UrlModel.create({
            originalUrl,
            miniUrl
        });

        //Responding back to client
        res.status(200).json({
            success: true,
            originalUrl,
            miniUrl,
            message: "Mini url generated successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function redirectToOriginalUrl(req, res, next) {
    const miniUrl = cleanedEnv.FRONTEND_URL + "/" + req.params?.miniUrlCode;

    try {
        //Check if it is a valid miniUrl already generated.
        const response = await UrlModel.findOne({
            miniUrl
        }).select("originalUrl miniUrl -_id");

        if (!response) {
            res.status(400).json({
                success: false,
                message: "Invalid Mini URL."
            });
            return;
        }
        res.status(200).json({
            success: true,
            originalUrl: response.originalUrl,
            miniUrl,
            message: `Redirect to ${response.originalUrl}`
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}