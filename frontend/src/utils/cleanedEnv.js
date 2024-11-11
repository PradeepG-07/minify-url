import { envSchema } from "./zodSchemas.js";

const result = envSchema.safeParse(import.meta.env);

if (result.error) {
    console.log(result.error.format());
    // throw new Error({message: "Zod Validation Error"});
}
const cleanedEnv = result.data
export default cleanedEnv;