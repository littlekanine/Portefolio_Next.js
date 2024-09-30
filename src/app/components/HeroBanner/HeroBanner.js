import { Moon, Sun, ArrowLeft, ArrowRight } from '../svgcomponent/SvgComponent.js';
import NavBar from '../navBar/NavBar.js';

function Herro({ darkMode, toggleDarkMode, handleNavClick, visibleSection }) {
	return (
		<div className="hero-mode width-full overflowHidden">
			<section id="hero" className={`jumbotron ${darkMode ? 'dark-mode' : ''}`}>
				<div className="animated-button toggle-button" onClick={toggleDarkMode}>
					<button id="toggle-button" className="flex align-center center">
						{darkMode ? <Sun /> : <Moon />}
					</button>
				</div>
				<div className="container column">
					<h1 className="hero-title load-hidden">
						Welcome.
						<br />
						My name is <span className="text-color-main elia">Elia Kopff</span>
						<br />
						I'm a Web Developer.
					</h1>
					<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
				</div>
			</section>
		</div>
	);
}

export default Herro;
