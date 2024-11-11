import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const customNavLinkStyle = function ({ isActive }) {
        return isActive ? "text-white underline underline-offset-4" : "";
    }
    return (
        <nav className="flex justify-between items-center px-3 h-[10vh] bg-blue-900 text-slate-300">
            <div className="">
                <Link to={"/"}><h1 className="font-bold text-2xl">Minify URL</h1></Link>
            </div>
            <ul className="flex gap-4 text-lg">
                <li><NavLink className={customNavLinkStyle} to={"/"}>Home</NavLink></li>
                <li><NavLink className={customNavLinkStyle} to={"/about"}>About</NavLink></li>
                <li><NavLink className={customNavLinkStyle} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={customNavLinkStyle} to={"https://github.com/PradeepG-07/minify-url.git"} target="_blank">Github</NavLink></li>
                <li><NavLink className={customNavLinkStyle} to={"/minify"}>Try Now</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar