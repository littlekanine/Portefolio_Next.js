import Buttons from "../buttons";
import { ProjectSvg, ContactSvg } from "../svgcomponent/SvgComponent";

const NavBar = ({ darkMode }) => {
    return (
        <section id="navBar" className="flex center ">
            <div className="navBar flex center align-center">
                <div className="hero-cta load-hidden navLink flex center align-center">
                    <a rel="noreferrer" href="#project" className={`animated-button ${darkMode ? "dark-mode" : ""}`}>
                        <Buttons message={"Projects"} darkMode={darkMode} />
                        <i className="fa-solid fa-folder"></i>
                    </a>
                    <a rel="noreferrer" href="#contact" className={`animated-button ${darkMode ? "dark-mode" : ""}`}>
                        <Buttons message={"Contact"} darkMode={darkMode} SvgLeft={ContactSvg} />
                        <i className="fa-solid fa-address-book"></i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/littlekanine" className={`animated-button ${darkMode ? "dark-mode" : ""}`}>
                        <Buttons message={"Github"} darkMode={darkMode} />
                        <i className="fab fa-brands fa-github icon"></i>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr" className={`animated-button ${darkMode ? "dark-mode" : ""}`}>
                        <Buttons message={"Linkedin"} darkMode={darkMode} />
                        <i className="fab fa-linkedin fa-inverse icon"></i>
                    </a>
                    <a rel="noreferrer" href="https://x.com/K_D3828" className={`animated-button ${darkMode ? "dark-mode" : ""}`}>
                        <i className=" flex center align-center fab fa-brands fa-x-twitter icon"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NavBar;
