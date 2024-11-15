import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { redirectToLongURL } from "../api";
import toast from "react-hot-toast";

const RedirectToLongURL = () => {

    const { miniUrl } = useParams();
    //Using this variable to avoid rerender of the component in development mode
    let hasRedirected = false;

    const redirect = async () => {
        if (hasRedirected) return;
        hasRedirected = true;
        const response = await redirectToLongURL(miniUrl);

        if (response.success) {
            document.getElementById("message").innerText = `Redirecting to the ${response.longUrl}`;
            window.location.href = response.longUrl;
        }
        else {
            toast.error(response.message);
            document.getElementById("errorMessageContainer").classList.remove("hidden");
            document.getElementById("messageContainer").classList.add("hidden");
        }
    }
    useEffect(() => {
        redirect();
    }, []);

    return (
        <div className="min-h-[80vh] px-3 items-center justify-center flex flex-col gap-2 md:gap-7 pt-3">
            <div className="px-3" id="messageContainer">
                <h1 className="font-extrabold text-center text-4xl sm:text-5xl text-gray-800">Hang On Tight</h1>
                <br />
                <p className="px-3 text-center text-sm text-gray-800" id="message">We are fetching your URL..</p>
            </div>
            <div className="hidden" id="errorMessageContainer">
                <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
                    <h1 className="font-extrabold text-center text-4xl sm:text-5xl text-balance text-gray-800">404 URL Not Found</h1>
                    <br />
                    <Link to={"/"} className="w-fit mx-auto px-4 text-xl py-2 rounded bg-amber-600 hover:bg-amber-700 transition-all text-white">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default RedirectToLongURL;