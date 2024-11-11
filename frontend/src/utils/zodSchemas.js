import z from "zod";

export const envSchema = z.object({
    VITE_BACKEND_URL: z.string({ message: "Backend url is required." }).trim().url({ message: "Invalid Backend Url" })
});

export const messageSchema = z.object({
    email: z.string({ message: "Email address is required." }).email({ message: "Invalid Email address." }),
    title: z.string({ message: "Title is required." }).trim().min(5, { message: "Title should contain minimum 5 characters." }),
    message: z.string({ message: "Message is required." }).trim().min(5, { message: "Message should contain minimum 5 characters." })
});