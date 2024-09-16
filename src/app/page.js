'use client';

import { useState } from 'react';
import Hero from './components/HeroBanner/HeroBanner';
import About from './about/page';
import ContactForm from './components/contactForm/ContactForm';
import ResponsiveProjects from './components/project/ResponsiveProjects';
import useDarkMode from '../scripts/darkMode';

function Home() {
	const [darkMode, toggleDarkMode] = useDarkMode();
	const [visibleSection, setVisibleSection] = useState('top');

	const handleNavClick = (section) => {
		setVisibleSection(section);
	};

	return (
		<div>
			<div id="top" className={`section ${visibleSection === 'top' ? 'visible' : ''}`}>
				<Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} />
			</div>

			<div id="project" className={`section ${visibleSection === 'project' ? 'visible' : ''}`}>
				<ResponsiveProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</div>

			<div id="contact" className={`section ${visibleSection === 'contact' ? 'visible' : ''}`}>
				<ContactForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</div>
	);
}

export default Home;
