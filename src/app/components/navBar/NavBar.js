import Buttons from '../buttons';
import { ContactSvg, ArrowLeft, FolderSvg, GitHubSvg, LinkedinSvg, TwitterSvg } from '../svgcomponent/SvgComponent';

const NavBar = ({ darkMode, isNotHome, handleNavClick }) => {
	const navBarStyle = isNotHome ? 'other-nav' : '';
	const buttonStyle = isNotHome ? 'other-button' : '';

	return (
		<section id="navBar" className={`flex center ${navBarStyle}`}>
			<div className="navBar flex center align-center">
				<div className="hero-cta load-hidden navLink flex center align-center">
					<a onClick={() => handleNavClick('project')} className={`animated-button ${darkMode ? 'dark-mode' : ''} ${buttonStyle}`}>
						<Buttons message={'Projects'} FolderSvg={FolderSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
					</a>
					<a onClick={() => handleNavClick('contact')} className={`animated-button ${darkMode ? 'dark-mode' : ''} ${buttonStyle}`}>
						<Buttons message={'Contact'} ContactSvg={ContactSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
					</a>
					<a rel="noreferrer" href="https://github.com/littlekanine" target="_blank" className={`animated-button ${darkMode ? 'dark-mode' : ''} ${buttonStyle}`}>
						<Buttons message={'Github'} GitHubSvg={GitHubSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
					</a>
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"
						target="_blank"
						className={`animated-button ${darkMode ? 'dark-mode' : ''} ${buttonStyle}`}
					>
						<Buttons message={'Linkedin'} LinkedinSvg={LinkedinSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
					</a>
					<a rel="noreferrer" href="https://x.com/K_D3828" target="_blank" className={`animated-button ${darkMode ? 'dark-mode' : ''} ${buttonStyle}`}>
						<Buttons message={'Twitter'} TwitterSvg={TwitterSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
