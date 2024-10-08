'use client';

import { useState } from 'react';
import Hero from './components/HeroBanner/HeroBanner';
import About from './components/about/About';
import ContactForm from './components/contactForm/ContactForm';
import ResponsiveProjects from './components/project/ResponsiveProjects';
import useDarkMode from '../scripts/darkMode';

function Home() {
	const [darkMode, toggleDarkMode] = useDarkMode();
	const [visibleSection, setVisibleSection] = useState('hero');

	const handleNavClick = (section) => {
		setVisibleSection(section);
	};
	console.log(visibleSection);

	return (
		<div className={darkMode ? 'dark-mode' : ''}>
			<div id="hero" className={` section ${visibleSection === 'hero' ? 'visible' : ''}`}>
				<Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			</div>

			<div id="about" className={`section ${visibleSection === 'about' ? 'visible' : ''}`}>
				<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			</div>

			<div id="project" className={`section ${visibleSection === 'project' ? 'visible' : ''}`}>
				<ResponsiveProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			</div>

			<div id="contact" className={`section ${visibleSection === 'contact' ? 'visible' : ''}`}>
				<ContactForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			</div>
		</div>
	);
}

export default Home;
