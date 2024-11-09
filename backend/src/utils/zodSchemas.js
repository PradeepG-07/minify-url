import z from "zod";

export const envSchema = z.object({
    PORT: z.string({ message: "PORT is required." }),
    FRONTEND_URL: z.string({ message: "FRONTEND_URL is required." }),
    MONGODB_URL: z.string({ message: "MONGODB_URL is required." }),
});

export const urlBodyRequestSchema = z.object({
    originalUrl: z.string({ message: "Original Url is required." }).trim().url("Invalid Original Url"),
});