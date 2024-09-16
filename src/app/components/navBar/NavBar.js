import Buttons from '../buttons';
import { ContactSvg, ArrowLeft, FolderSvg, GitHubSvg, LinkedinSvg, TwitterSvg } from '../svgcomponent/SvgComponent';

const NavBar = ({ darkMode, handleNavClick, visibleSection }) => {
	// Détermine la classe des boutons en fonction de la section visible
	console.log(visibleSection);
	const getButtonClass = () => {
		// Utilisation de 'other-button' pour 'project' et 'contact', sinon 'animated-button'
		return visibleSection === 'project' || visibleSection === 'contact' ? 'other-button' : 'animated-button';
	};

	const getNavButtons = () => {
		const buttonClass = getButtonClass();

		return (
			<>
				<a onClick={() => handleNavClick('project')} className={`${buttonClass} ${darkMode ? 'dark-mode' : ''}`}>
					<Buttons message={'Projets'} FolderSvg={FolderSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a onClick={() => handleNavClick('contact')} className={`${buttonClass} ${darkMode ? 'dark-mode' : ''}`}>
					<Buttons message={'Contact'} ContactSvg={ContactSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://github.com/littlekanine" target="_blank" className={`${buttonClass} ${darkMode ? 'dark-mode' : ''}`}>
					<Buttons message={'Github'} GitHubSvg={GitHubSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"
					target="_blank"
					className={`${buttonClass} ${darkMode ? 'dark-mode' : ''}`}
				>
					<Buttons message={'Linkedin'} LinkedinSvg={LinkedinSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://x.com/K_D3828" target="_blank" className={`${buttonClass} ${darkMode ? 'dark-mode' : ''}`}>
					<Buttons message={'Twitter'} TwitterSvg={TwitterSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
			</>
		);
	};

	return (
		<section id="navBar" className={`flex center`}>
			<div className="navBar flex center align-center">
				<div className="hero-cta load-hidden navLink flex center align-center">{getNavButtons()}</div>
			</div>
		</section>
	);
};

export default NavBar;
