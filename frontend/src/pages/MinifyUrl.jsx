import { useState } from "react";
import { generateMiniURL } from "../api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MinifyUrl = () => {
    const [isGeneratingUrl, setIsGeneratingUrl] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsGeneratingUrl(true);

        const formData = new FormData(e.target);
        const longUrl = formData.get("longUrl");
        console.log(longUrl.trim().length);


        if (!longUrl || longUrl.trim().length === 0) {
            // show error alert
            setIsGeneratingUrl(false);
            return;
        }

        const { success, message: responseMessage, miniUrl } = await generateMiniURL(longUrl);

        if (success) {
            toast.success(responseMessage);
            document.getElementById("miniURL").href = miniUrl;
            document.getElementById("miniURL").innerHTML = "Short Url: " + `<b>${miniUrl}</b>`;
            document.getElementById("copybutton").classList.remove("hidden");
        }
        else {
            toast.error(responseMessage);
        }

        e.target.reset();
        setIsGeneratingUrl(false);

    }
    const handleCopy = (e) => {
        const miniURL = document.getElementById("miniURL");
        navigator.clipboard.writeText(miniURL.href);
        e.target.innerText = "Copied!";
        setTimeout(() => {
            e.target.innerText = "Copy";
        }, 2000);
    }
    return (
        <div className="min-h-[80vh] items-center justify-center flex flex-col gap-2 md:gap-7 pt-3 px-3">
            <form action="#" name="minifyUrlForm" onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-4 md:gap-7 justify-center">
                    <h1 className="text-balance text-4xl sm:text-5xl font-bold text-gray-800 text-center">Get Your Short Url Here</h1>
                    <p className="text-center text-gray-800 text-sm">If you like us, please give a <Link to={"https://github.com/PradeepG-07/minify-url"} className="font-extrabold text-pink-500" target="_blank">star.</Link></p>
                    <input type="text" name="longUrl" id="longUrl" className="w-full md:w-1/2 mx-auto p-2 sm:px-4 text-lg sm:text-xl rounded bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="Enter your long URL" required />
                    <button type="submit" className="text-base w-fit mx-auto px-4 sm:px-4 sm:text-xl py-2 sm:py-2 rounded bg-amber-600 hover:bg-amber-700 transition-all text-white" disabled={isGeneratingUrl ? true : false}>
                        {isGeneratingUrl ? "Generating..." : "Generate Short URL"}
                    </button>
                </div>
            </form>
            <div className="flex flex-col gap-4 items-center min-h-20">
                <a className="text-base sm:text-xl" id="miniURL"></a>
                <button className="w-fit mx-auto px-2 text-sm py-1 rounded bg-green-600 hover:bg-green-700 transition-all text-white hidden" id="copybutton" onClick={handleCopy}>
                    Copy
                </button>
            </div>
        </div>
    )
}

export default MinifyUrl