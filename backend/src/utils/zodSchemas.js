import z from "zod";

export const envSchema = z.object({
    PORT: z.string(),
    FRONTEND_URL: z.string(),
    MONGODB_URL: z.string(),
});

export const urlBodyRequestSchema = z.object({
    originalUrl: z.string().trim().min(5).url("Invalid Url"),
});