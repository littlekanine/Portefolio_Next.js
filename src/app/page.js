"use client";
import Herro from "./components/HeroBanner/HeroBanner";
import About from "./components/about/About";
import ContactForm from "./components/contactForm/ContactForm";
import CardsStack from "./components/cardsStack/CardsStacks";
import ResponsiveProjects from "./components/project/ResponsiveProjects";
import Footer from "./components/footer/Footer";
import useDarkMode from "../scripts/darkMode";

function Home() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div>
            <div id="top"></div>
            <Herro darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ResponsiveProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <CardsStack darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Home;
