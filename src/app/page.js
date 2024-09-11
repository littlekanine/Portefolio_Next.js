"use client";
import Herro from "./components/HeroBanner/HeroBanner";
import useDarkMode from "../scripts/darkMode";

function Home() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div>
            <div id="top"></div>
            <Herro darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default Home;
