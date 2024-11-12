import z from "zod";

export const envSchema = z.object({
    PORT: z.string({ message: "PORT is required." }),
    FRONTEND_URL: z.string({ message: "FRONTEND_URL is required." }),
    MONGODB_URL: z.string({ message: "MONGODB_URL is required." }),
});

export const urlBodyRequestSchema = z.object({
    longUrl: z.string({ message: "Long Url is required." }).trim().url("Invalid Long Url"),
});

export const contactBodyRequestSchema = z.object({
    email: z.string({ message: "Email address is required." }).email({ message: "Invalid Email address." }),
    title: z.string({ message: "Title is required." }).trim().min(5, { message: "Title should contain minimum 5 characters." }),
    message: z.string({ message: "Message is required." }).trim().min(5, { message: "Message should contain minimum 5 characters." })
})