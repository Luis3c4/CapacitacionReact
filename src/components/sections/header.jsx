import { NavLink } from "react-router";
import { Link } from "react-router";

function Header() {
    return (
        <header className="bg-blue-500 text-white p-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><NavLink to="/" className="hover:underline text-xl">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:underline text-xl">About</NavLink></li>
                    <li><NavLink to="/cupcake" className="hover:underline text-xl">Cupcake</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;