const envSchema = z.object({
    PORT: z.string(),
    FRONTEND_URL: z.string(),
    MONGODB_URL: z.string(),
});

export { envSchema };