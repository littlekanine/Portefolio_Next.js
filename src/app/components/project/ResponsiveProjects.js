import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './projectDesktop/ProjectsDesktop';
import MobileProjects from './projectMobile/ProjectMobile';

function ResponsiveProjects({ darkMode }) {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div>
			{isDesktopOrLaptop && <DesktopProjects darkMode={darkMode} />}
			{isTabletOrMobile && <MobileProjects darkMode={darkMode} />}
		</div>
	);
}

export default ResponsiveProjects;
