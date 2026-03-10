import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

const Navbar = () => {
    return (
        <nav className="header">
            <a className="navbar-title" href="#">
                <HoverLinks text="VS" />
            </a>
            <a className="navbar-connect" href="mailto:vigneshsiva9889@gmail.com">
                <HoverLinks text="vigneshsiva9889@gmail.com" />
            </a>
            <ul>
                <li>
                    <HoverLinks text="ABOUT" />
                </li>
                <li>
                    <HoverLinks text="CAREER" />
                </li>
                <li>
                    <HoverLinks text="PROJECTS" />
                </li>
                <li>
                    <HoverLinks text="CONTACT" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
