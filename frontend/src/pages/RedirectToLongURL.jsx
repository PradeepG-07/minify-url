import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { redirectToLongURL } from "../api";

const RedirectToLongURL = () => {

    const { miniUrl } = useParams();
    const redirect = async () => {
        const response = await redirectToLongURL(miniUrl);

        if (response.success) {
            document.getElementById("message").innerText = `Redirecting to the ${response.longUrl}`;
            window.location.href = response.longUrl;
        }
        else {
            document.getElementById("errorMessageContainer").classList.remove("hidden");
            document.getElementById("errorMessageContainer").classList.add("hidden");
        }
    }
    useEffect(() => {
        redirect();
    }, []);

    return (
        <div className="min-h-[84vh] items-center justify-center flex flex-col gap-2 md:gap-7 pt-3">
            <div className="messageContainer">
                <h1 className="font-extrabold text-center text-5xl text-gray-800">Hang On Tight</h1>
                <br />
                <p className="text-center text-sm text-gray-800" id="message">We are fetching your URL..</p>
            </div>
            <div className="hidden" id="errorMessageContainer">
                <h1 className="font-extrabold text-center text-5xl text-gray-800">404 URL Not Found</h1>
                <br />
                <Link to={"/"} className="w-fit mx-auto px-4 text-xl py-2 rounded bg-amber-600 hover:bg-amber-700 transition-all text-white">Back to Home</Link>
            </div>
        </div>
    )
}

export default RedirectToLongURL;