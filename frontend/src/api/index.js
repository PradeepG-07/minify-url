import axios from "axios";
import cleanedEnv from "../utils/cleanedEnv.js";
import asyncHandler from "../utils/asyncHandler.js";

const axiosInstance = axios.create({
    baseURL: cleanedEnv.VITE_BACKEND_URL,
    timeout: 3000 * 10,
    timeoutErrorMessage: "Request timed out."
});

export const sendMessage = (messageBody) => {
    const response = asyncHandler(axiosInstance.post("/contact", messageBody));
    return response;
}

