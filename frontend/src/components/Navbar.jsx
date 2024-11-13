import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const customNavLinkStyle = function ({ isActive }) {
        return isActive ? "text-white underline underline-offset-4 text-nowrap" : "";
    }
    const toggleNav = (e) => {
        const mobileNav = document.getElementById("mobileNav");
        mobileNav.classList.toggle("-translate-x-full");
        e.target.innerText = mobileNav.classList.contains("-translate-x-full") ? "☰" : "✖";
    }
    return (
        <header className="sticky top-0">
            <nav className="relative flex justify-between items-center px-6 py-4 h-[8vh] sm:h-[10vh] bg-blue-900 text-slate-300">
                <div className="flex justify-between w-full sm:w-fit">
                    <Link to={"/"}><h1 className="font-bold text-2xl text-white">Minify URL</h1></Link>
                    <button className="sm:hidden text-white text-2xl" onClick={toggleNav}> ☰ </button>
                </div>
                <ul className="hidden sm:flex sm:gap-4 text-lg">
                    <li><NavLink className={customNavLinkStyle} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/about"}>About</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"https://github.com/PradeepG-07/minify-url.git"} target="_blank">Github</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/minify"}>Try Now</NavLink></li>
                </ul>
                <ul id="mobileNav" className="sm:hidden absolute top-full left-0 bg-blue-950 w-full flex flex-col gap-4 px-6 py-4 transition-all text-lg -translate-x-full">
                    <li><NavLink className={customNavLinkStyle} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/about"}>About</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"https://github.com/PradeepG-07/minify-url.git"} target="_blank">Github</NavLink></li>
                    <li><NavLink className={customNavLinkStyle} to={"/minify"}>Try Now</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar