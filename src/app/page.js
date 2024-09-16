'use client';

import { useState } from 'react';
import Hero from './components/HeroBanner/HeroBanner';
import About from './about/page';
import ContactForm from './components/contactForm/ContactForm';
import ResponsiveProjects from './components/project/ResponsiveProjects';
import useDarkMode from '../scripts/darkMode';

function Home() {
	const [darkMode, toggleDarkMode] = useDarkMode();
	const [visibleSection, setVisibleSection] = useState('top'); // Par défaut, on affiche "top"

	const handleNavClick = (section) => {
		setVisibleSection(section); // Change la section visible quand on clique sur un lien
	};

	return (
		<div>
			<div id="top" style={{ display: visibleSection === 'top' ? 'block' : 'none' }}>
				{/* Passe la fonction handleNavClick à Hero */}
				<Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleNavClick={handleNavClick} />
			</div>

			<div id="project" style={{ display: visibleSection === 'project' ? 'block' : 'none' }}>
				<ResponsiveProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</div>

			<div id="contact" style={{ display: visibleSection === 'contact' ? 'block' : 'none' }}>
				<ContactForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</div>
	);
}

export default Home;
