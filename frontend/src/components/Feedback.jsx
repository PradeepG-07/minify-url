import { useState } from "react";
import { sendMessage } from "../api";
import { messageSchema } from "../utils/zodSchemas";
import toast from "react-hot-toast";

const Feedback = () => {
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSendingMessage(true);

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const title = formData.get("title");
        const message = formData.get("message");

        const cleanedFormData = messageSchema.safeParse({ email, title, message });

        if (cleanedFormData.error) {
            const errors = cleanedFormData.error.format();
            document.getElementById("emailErrorMessage").innerText = errors.email?._errors || "";
            document.getElementById("titleErrorMessage").innerText = errors.title?._errors || "";
            document.getElementById("messageErrorMessage").innerText = errors.message?._errors || "";
            setIsSendingMessage(false);
            return;
        }
        else {
            document.getElementById("emailErrorMessage").innerText = "";
            document.getElementById("titleErrorMessage").innerText = "";
            document.getElementById("messageErrorMessage").innerText = "";
        }

        const { success, message: responseMessage } = await sendMessage(cleanedFormData.data);

        if (success) {
            toast.success(responseMessage);

        }
        else {
            toast.error(responseMessage);
        }

        e.target.reset();
        setIsSendingMessage(false);

    }
    return (
        <div className="text-gray-800">
            <h1 className="text-2xl sm:text-3xl mx-auto font-bold text-pink-500 border-2 p-2 w-fit rounded border-pink-500">Contact Us</h1>
            <br />
            <form action="#" className="flex flex-col gap-2 sm:gap-4" onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-base sm:text-xl cursor-pointer">Email: </label>
                <input className="border-2 border-black rounded p-2 text-base sm:text-xl" type="text" name="email" id="email" autoComplete="on" />
                <span className="text-red-400 text-sm" id="emailErrorMessage"></span>
                <label htmlFor="title" className="text-base sm:text-xl cursor-pointer">Title: </label>
                <input className="border-2 border-black rounded p-2 text-base sm:text-xl" type="text" name="title" id="title" />
                <span className="text-red-400 text-sm" id="titleErrorMessage"></span>
                <label htmlFor="message" className="text-base sm:text-xl cursor-pointer">Message: </label>
                <textarea className="border-2 border-black rounded p-2 text-base sm:text-xl" name="message" id="message"></textarea>
                <span className="text-red-400 text-xs sm:text-sm" id="messageErrorMessage"></span>

                <button type="submit" disabled={isSendingMessage ? true : false} className="mt-4 px-4 py-2 rounded bg-amber-500 hover:bg-amber-600 text-white text-xl w-fit mx-auto">
                    {
                        isSendingMessage ? "Sending Message.." : "Send Message"
                    }
                </button>
            </form>
        </div>
    )
}

export default Feedback