import NavBar from '../navBar/NavBar';
import { Moon, Sun } from '../svgcomponent/SvgComponent.js';

function ContactForm({ darkMode, handleNavClick, visibleSection, toggleDarkMode }) {
	return (
		<div className="containerForm">
			<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			<div className="animated-button toggle-button" onClick={toggleDarkMode}>
				<button id="toggle-button" className="flex align-center center">
					{darkMode ? <Sun /> : <Moon />}
				</button>
			</div>
			<div className="flex center align-center height80vh">
				<form action="/submit-contact" method="post" className="flex center align-center column">
					<p>Welcome</p>
					<div className="inputForm flex center">
						<input type="name" placeholder="Name" />
						<input type="Email" placeholder="Email" />
					</div>
					<br />
					<textarea id="story" name="story" rows="5" cols="33"></textarea>
				</form>
			</div>

			<div className="drops">
				<div className="drop drop-1"></div>
				<div className="drop drop-2"></div>
				<div className="drop drop-3"></div>
				<div className="drop drop-4"></div>
				<div className="drop drop-5"></div>
			</div>
		</div>
	);
}

export default ContactForm;
