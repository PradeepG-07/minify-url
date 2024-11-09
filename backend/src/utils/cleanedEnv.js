import z from "zod";
import "dotenv/config";
import { envSchema } from "./zodSchemas.js";


const result = envSchema.safeParse(process.env);

if (result.error) {
    console.error(cleanedEnv.error);
    process.exit(1);
}
const cleanedEnv = result.data;

export default cleanedEnv;
