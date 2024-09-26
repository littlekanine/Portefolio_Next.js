import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavBar from '../navBar/NavBar';
import DesktopProjects from './projectDesktop/ProjectsDesktop';
import MobileProjects from './projectMobile/ProjectMobile';
import { Moon, Sun } from '../svgcomponent/SvgComponent.js';

function ResponsiveProjects({ darkMode, handleNavClick, visibleSection, toggleDarkMode }) {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div className={`responsive-projects ${darkMode ? 'dark-mode' : ''}`}>
			<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			<div className="animated-button toggle-button" onClick={toggleDarkMode}>
				<button id="toggle-button" className="flex align-center center">
					{darkMode ? <Sun /> : <Moon />}
				</button>
			</div>
			{isDesktopOrLaptop && <DesktopProjects darkMode={darkMode} />}
			{isTabletOrMobile && <MobileProjects darkMode={darkMode} />}
		</div>
	);
}

export default ResponsiveProjects;
