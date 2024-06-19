import andyHeaderLogo from "../assets/andy-embroidery/andyHeaderLogo.png"
import {hamburger} from "../assets/icons"
import {navLinks} from "../constants/index.js";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container padding-x">
                <a href="/">
                    <img
                        src={andyHeaderLogo}
                        alt="Logo"
                        width={80}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                               className="font-montserrat leading-normal text-lg accent-green-950">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <img
                    src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;