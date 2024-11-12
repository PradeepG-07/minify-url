import axios from "axios";
import cleanedEnv from "../utils/cleanedEnv.js";
import asyncHandler from "../utils/asyncHandler.js";

const axiosInstance = axios.create({
    baseURL: cleanedEnv.VITE_BACKEND_URL,
    timeout: 3000 * 10,
    timeoutErrorMessage: "Request timed out."
});

export const sendMessage = async (messageBody) => {
    const response = await asyncHandler(axiosInstance.post("/contact", messageBody));
    return response;
}

export const generateMiniURL = async (longUrl) => {
    const response = await asyncHandler(axiosInstance.post("/minify", { longUrl: longUrl }));
    return response;
}

export const redirectToLongURL = async (miniUrl) => {
    const response = await asyncHandler(axiosInstance.get(`/redirect/${miniUrl}`));
    return response;
}
