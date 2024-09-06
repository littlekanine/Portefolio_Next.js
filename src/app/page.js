import initScrollReveal from '../scripts/scrollReveal';
import Herro from '../app/components/HerroBanner/index.js';
import About from '../component/about/About';
import ContactForm from '../component/contactForm/ContactForm';
import CardsStack from '../component/cardsStack/CardsStacks';
import ResponsiveProjects from '../component/project/ResponsiveProjects';
import Footer from '../component/footer/Footer';
import useDarkMode from '../scripts/darkMode';

function Home() {
	useEffect(() => {
		initScrollReveal();
	}, []);

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
