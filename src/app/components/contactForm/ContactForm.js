import Buttons from '../buttons/index';
import { ArrowRight, Enveloppe } from '../svgcomponent/SvgComponent';
import NavBar from '../navBar/NavBar';

function ContactForm({ visibleSection, darkMode, handleNavClick }) {
	return (
		<div className="containerForm">
			<nav>
				<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			</nav>
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
