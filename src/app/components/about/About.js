import { Moon, Sun, FileSvg, ArrowLeft } from '../svgcomponent/SvgComponent.js';
import NavBar from '../navBar/NavBar';
import CardsStack from '../cardsStack/CardsStacks.js';
import Buttons from '../buttons/index.js';

const About = ({ darkMode, handleNavClick, visibleSection, toggleDarkMode }) => {
	return (
		<div className={darkMode ? 'dark-mode' : ''}>
			<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			<div className="animated-button toggle-button" onClick={toggleDarkMode}>
				<button id="toggle-button" className="flex align-center center">
					{darkMode ? <Sun /> : <Moon />}
				</button>
			</div>
			<div className="flex respond-about">
				<div className="left-side ">
					<img src="../asset/img/mwa.jpg" alt="Votre Nom" />
					<div className={`blur-effect ${darkMode ? 'dark-mode' : ''}`}></div>
				</div>
				<div className={`right-side flex column align-center ${darkMode ? 'dark-mode' : ''}`}>
					<h1 className={`${darkMode ? 'dark-mode' : ''}`}>A Propos de Moi</h1>
					<p>
						Après six années d'expérience dans la restauration, j'ai décidé de me réorienter vers le développement web. Actuellement en formation de Développeur
						d'Applications chez Openclassroom, avec une spécialisation en JavaScript et React.
						<br />
					</p>
					<h2 className={`${darkMode ? 'dark-mode' : ''}`}>Stack Technique</h2>
					<CardsStack />
					<a href="/asset/cv/CV_Elia_Kopff.pdf" download="CV_Elia_Kopff" className="animated-button-Cv center align-center">
						<Buttons message={'Telechargez mon CV'} FileSvg={FileSvg} SvgLeft={ArrowLeft} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
