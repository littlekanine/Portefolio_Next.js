import { useState, useEffect } from 'react';
import Buttons from '../buttons';
import { ContactSvg, ArrowLeft, FolderSvg, GitHubSvg, LinkedinSvg, TwitterSvg, AboutSvg } from '../svgcomponent/SvgComponent';
import Herro from '../HeroBanner/HeroBanner';

const NavBar = ({ darkMode, handleNavClick, visibleSection }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 810);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 810);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const getButtonClass = (section) => {
		return `animated-button ${visibleSection === section ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`;
	};

	const getNavButtons = () => {
		return (
			<>
				<a onClick={() => handleNavClick('about')} className={getButtonClass('about')}>
					<Buttons message={'About'} AboutSvg={isMobile ? null : AboutSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
				<a onClick={() => handleNavClick('project')} className={getButtonClass('project')}>
					<Buttons message={'Projets'} FolderSvg={isMobile ? null : FolderSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
				<a onClick={() => handleNavClick('contact')} className={getButtonClass('contact')}>
					<Buttons message={'Contact'} ContactSvg={isMobile ? null : ContactSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://github.com/littlekanine" target="_blank" className={getButtonClass('github')}>
					<Buttons message={'Github'} GitHubSvg={isMobile ? null : GitHubSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F"
					target="_blank"
					className={getButtonClass('linkedin')}
				>
					<Buttons message={'Linkedin'} LinkedinSvg={isMobile ? null : LinkedinSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
				<a rel="noreferrer" href="https://x.com/K_D3828" target="_blank" className={getButtonClass('twitter')}>
					<Buttons message={'Twitter'} TwitterSvg={isMobile ? null : TwitterSvg} SvgLeft={isMobile ? null : ArrowLeft} darkMode={darkMode} />
				</a>
			</>
		);
	};

	return (
		<section id="navBar" className={`flex center`}>
			{isMobile && visibleSection !== 'hero' ? (
				<>
					<div className="navBar flex">
						<button onClick={toggleMenu} className="menu-button flex">
							☰
						</button>
						{menuOpen && <div className={`dropdown-menu flex center align-center column ${menuOpen ? 'show' : ''}`}>{getNavButtons()}</div>}
					</div>
				</>
			) : (
				<div className="navBar flex center align-center">
					<div className="hero-cta load-hidden navLink flex center align-center">{getNavButtons()}</div>
				</div>
			)}
		</section>
	);
};

export default NavBar;
