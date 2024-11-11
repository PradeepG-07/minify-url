const asyncHandler = async (axiosPromise) => {
    console.log("inside async");

    try {
        const response = await axiosPromise;
        return response.data;
    } catch (axiosError) {

        if (axiosError.error?.status > 300 && axiosError.error?.status <= 500) {
            return axiosError.error.response;
        }
        else {
            const success = false;
            let message = "Error while sending message.";
            switch (axiosError.code) {
                case "ERR_NETWORK": { message = "Server is down. We will fix it soon."; break; }
                case "ERR_CANCELED": { message = "Server closed connection. We will fix it soon."; break; }
            }
            return { success, message };
        }
    }
}

export default asyncHandler;