import { Link } from "react-router-dom";
import TypingAnimation from "../components/TypingAnimation";
const Home = () => {
    const animatedLines = [
        "Shrink your links, amplify your reach!",
        "Make your URLs short and sweet!",
        "Cut the clutter—keep it short!",
        "The perfect link, now bite-sized.",
        "Your long links deserve a quick makeover.",
        "Brevity is the soul of a great URL!",
        "Simplify your links, boost your clicks.",
        "Make your links easy to remember and share!",
        "Turning long URLs into short stories.",
        "Just a few clicks to a clean link!"
    ]
    return (
        <div className="min-h-[84vh] items-center justify-center flex flex-col gap-2 md:gap-7 pt-3" style={{ backgroundColor: "#09709236" }}>

            <div className="md:w-1/2 min-h-24">
                <h1 className="text-5xl font-extrabold text-wrap text-center">
                    <span className="text-gray-800"><TypingAnimation strings={animatedLines} /></span>
                </h1>
            </div>
            <div className="flex flex-col gap-2 md:gap-7 justify-center">
                <p className="text-2xl font-bold text-gray">What are you waiting for start using short urls <span className="text-pink-500">for free..</span></p>
                <Link className="w-fit mx-auto px-4 text-xl py-2 rounded bg-amber-600 hover:bg-amber-700 transition-all text-white" to={"/minify"}>Get Started</Link>
            </div>
        </div>
    )
}

export default Home