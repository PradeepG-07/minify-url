import { getRandomString } from "../src/utils/helpers.js";
import cleanedEnv from "../src/utils/cleanedEnv.js"
import axios from "axios";

async function handleAxiosPromise(promise) {
    try {
        const response = await promise;
        return response;
    } catch (error) {
        return error.response;
    }
}
describe("Testing Random Strings for Mini Url", () => {
    test("Generates a distinct random string of given length", () => {
        const randomStringOfLength6 = getRandomString(6);
        expect(randomStringOfLength6).toBeDefined();
        expect(randomStringOfLength6.length).toBe(6);

        const anotherRandomStringOfLength6 = getRandomString(8);
        expect(anotherRandomStringOfLength6).toBeDefined();
        expect(anotherRandomStringOfLength6.length).toBe(8);

        expect(randomStringOfLength6).not.toBe(anotherRandomStringOfLength6);
    });

    test("Generates a random string of length 6 if required string length is not specified", () => {
        expect(getRandomString().length).toBe(6);
    })
});

describe("Testing api endpoints", () => {
    const BACKEND_URL = `http://localhost:${cleanedEnv.PORT}/api/v1`;

    // Testing Endpoint for generating miniUrl
    test("Creates a miniUrl for originalUrl", async () => {
        const originalUrl = "https://codeshare.io/" + Math.random() * 10000;
        const response = await handleAxiosPromise(axios.post(BACKEND_URL + "/minify", {
            originalUrl
        }));
        expect(response.status).toBe(200);
        expect(response.data.miniUrl).toBeDefined();
    });
    test("Invalid originalUrl gets rejected with 422 status code", async () => {
        const response = await handleAxiosPromise(axios.post(BACKEND_URL + "/minify", {
            originalUrl: getRandomString(8)
        }));

        expect(response.status).toBe(422);
        expect(response.data.message).toBe("Invalid Original Url");
    });
    test("Empty originalUrl gets rejected with 422 status code", async () => {
        const response = await handleAxiosPromise(axios.post(BACKEND_URL + "/minify", {
        }));
        expect(response.status).toBe(422);
        expect(response.data.message).toBe("Original Url is required.");
    });

    //Testing endpoint for redirecting to originalUrls 
    test("Empty miniUrl code gets rejected with 404 status code", async () => {
        const response = await handleAxiosPromise(axios.get(BACKEND_URL + `/redirect/`));
        expect(response.status).toBe(404);
        expect(response.data.message).toBe("404 URL not found.");
    });

    test("Invalid miniUrl code gets rejected with 400 status code", async () => {
        const response = await handleAxiosPromise(axios.get(BACKEND_URL + `/redirect/randomCode`));
        expect(response.status).toBe(400);
        expect(response.data.message).toBe("Invalid Mini URL.");
    });

    test("ShortUrl redirects to originalUrl", async () => {
        const originalUrl = "https://codeshare.io/" + Math.random() * 10000;
        const generateUrlResponse = await handleAxiosPromise(axios.post(BACKEND_URL + "/minify", {
            originalUrl
        }));
        const miniUrl = generateUrlResponse.data.miniUrl;
        const miniUrlCode = miniUrl.substr(miniUrl.lastIndexOf("/") + 1);
        const redirectUrlResponse = await handleAxiosPromise(axios.get(BACKEND_URL + `/redirect/${miniUrlCode}`));
        expect(redirectUrlResponse.status).toBe(200);
        expect(redirectUrlResponse.data.originalUrl).toBe(originalUrl);
    });

    //Testing endpoints for contact message
    test("Correct parameters passed for contact endpoint saves the message", async () => {
        const title = "Test Title";
        const email = "Test@test.com";
        const message = "This is a test message";
        const response = await handleAxiosPromise(axios.post(BACKEND_URL + "/contact", {
            title,
            email,
            message
        }));
        expect(response.status).toBe(200);
        expect(response.data.message).toBe("Message saved successfully.");
    });
    test("Missing Parameters should be rejected with status code of 422", async () => {
        const email = "Test@test.com";
        const message = "This is a test message";
        const response = await handleAxiosPromise(axios.post(BACKEND_URL + "/contact", {
            email,
            message
        }));
        expect(response.status).toBe(422);
    });
});