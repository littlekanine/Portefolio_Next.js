import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavBar from '../navBar/NavBar';
import DesktopProjects from './projectDesktop/ProjectsDesktop';
import MobileProjects from './projectMobile/ProjectMobile';

function ResponsiveProjects({ darkMode, handleNavClick, visibleSection }) {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div>
			<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			{isDesktopOrLaptop && <DesktopProjects darkMode={darkMode} />}
			{isTabletOrMobile && <MobileProjects darkMode={darkMode} />}
		</div>
	);
}

export default ResponsiveProjects;
