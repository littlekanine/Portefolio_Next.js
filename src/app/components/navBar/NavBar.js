// import

const NavBar = () => {
    return (
        <div className="flex center ">
            <div className="navBar flex center align-center">
                <ul className="navLink flex center align-center pointNone">
                    <li className="link flex center align-center">Project</li>
                    <li className="link flex center align-center">contact
                        <a href="contact"></a>
                    </li>
                    <li className="link flex center align-center">
                        <a href="https://github.com/littlekanine">
                            <span className="text-hidden">Lien GitHub</span>
                            <i className="fab fa-brands fa-github icon"></i>
                        </a>
                    </li>
                    <li className="link flex center align-center">
                        <a href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr">
                            <span className="text-hidden">Lien linkedin</span>
                            <i className="fab fa-linkedin fa-inverse icon"></i>
                        </a>
                    </li>
                    <li className="link flex center align-center">
                        <a href="https://x.com/K_D3828">
                            <span className="text-hidden">Lien X</span>
                            <i className="fab fa-brands fa-x-twitter icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
