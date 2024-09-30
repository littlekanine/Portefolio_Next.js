import Buttons from '../buttons';
import { ContactSvg, ArrowLeft, FolderSvg, GitHubSvg, LinkedinSvg, TwitterSvg, AboutSvg } from '../svgcomponent/SvgComponent';

const NavBar = ({ darkMode, handleNavClick, visibleSection }) => {
	const getButtonClass = (section) => {
		return `animated-button ${visibleSection === section ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`;
	};

	const getNavButtons = () => {
		return (
			<>
				<a onClick={() => handleNavClick('about')} className={getButtonClass('about')}>
					<Buttons message={'About'} AboutSvg={AboutSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a onClick={() => handleNavClick('project')} className={getButtonClass('project')}>
					<Buttons message={'Projets'} FolderSvg={FolderSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a onClick={() => handleNavClick('contact')} className={getButtonClass('contact')}>
					<Buttons message={'Contact'} ContactSvg={ContactSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://github.com/littlekanine" target="_blank" className={getButtonClass('github')}>
					<Buttons message={'Github'} GitHubSvg={GitHubSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"
					target="_blank"
					className={getButtonClass('linkedin')}
				>
					<Buttons message={'Linkedin'} LinkedinSvg={LinkedinSvg} SvgLeft={ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://x.com/K_D3828" target="_blank" className={getButtonClass('twitter')}>
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
