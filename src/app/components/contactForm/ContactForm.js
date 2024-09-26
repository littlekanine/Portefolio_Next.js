import { useState } from 'react';
import NavBar from '../navBar/NavBar';
import { Moon, Sun, Enveloppe } from '../svgcomponent/SvgComponent.js';
import emailjs from 'emailjs-com';

function ContactForm({ darkMode, handleNavClick, visibleSection, toggleDarkMode }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		story: '',
	});

	const [errors, setErrors] = useState({});
	const [emailSent, setEmailSent] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		let formErrors = {};
		if (!formData.name) formErrors.name = true;
		if (!formData.email) formErrors.email = true;
		if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = true;
		if (!formData.story) formErrors.story = true;
		return formErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validateForm();
		if (Object.keys(formErrors).length === 0) {
			// No validation errors, send email
			sendEmail();
		} else {
			setErrors(formErrors);
		}
	};

	const sendAutoReply = () => {
		const serviceID = 'service_7td6bhk'; // ID du service
		const autoReplyTemplateID = 'template_gkufw79'; // ID de ton modèle de réponse
		const userID = 'n8d9wYxMy30Osyll5'; // ID de l'utilisateur

		const autoReplyParams = {
			name: formData.name,
			story: formData.story,
			to_email: formData.email, // Adresse email de l'expéditeur
		};

		// Envoi de la réponse automatique
		emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, userID).then(
			(response) => {
				console.log('Auto-reply sent successfully!', response.status, response.text);
			},
			(error) => {
				console.error('Failed to send auto-reply:', error);
			}
		);
	};

	const sendEmail = () => {
		const serviceID = 'service_7td6bhk';
		const templateID = 'template_1xy7vsy';
		const userID = 'n8d9wYxMy30Osyll5';

		const templateParams = {
			name: formData.name,
			email: formData.email,
			story: formData.story,
		};

		emailjs.send(serviceID, templateID, templateParams, userID).then(
			(response) => {
				console.log('Email sent successfully!', response.status, response.text);
				setEmailSent(true);
				sendAutoReply();
			},
			(error) => {
				console.error('Failed to send email:', error);
			}
		);
	};

	return (
		<div className={darkMode ? 'dark-mode' : ''}>
			<NavBar darkMode={darkMode} handleNavClick={handleNavClick} visibleSection={visibleSection} />
			<div className="animated-button toggle-button" onClick={toggleDarkMode}>
				<button id="toggle-button" className="flex align-center center">
					{darkMode ? <Sun /> : <Moon />}
				</button>
			</div>
			<div className="flex center align-center height90vh">
				<form onSubmit={handleSubmit} className={`flex center align-center column ${darkMode ? 'dark-mode-form' : ''}`}>
					<p>Welcome</p>
					<div className="inputForm flex center column">
						<div className="flex center align-center row">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleInputChange}
								className={errors.name ? 'input-error' : ''}
							/>
						</div>
						<div className="flex center align-center row">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleInputChange}
								className={errors.email ? 'input-error' : ''}
							/>
						</div>
					</div>
					<br />
					<div className="flex center align-center column">
						<label htmlFor="story">Message</label>
						<textarea
							id="story"
							name="story"
							rows="5"
							cols="33"
							className="flex center align-center"
							value={formData.story}
							onChange={handleInputChange}
						></textarea>
						{errors.story && <p className="error">{errors.story}</p>}
					</div>
					<button type="submit" Enveloppe={Enveloppe} className="animated-button-submit">
						Submit
					</button>
					{emailSent && <p className="success-message">Your message has been sent successfully!</p>}
				</form>
			</div>

			<div className="drops">
				<div className={`drop drop-1 ${darkMode ? 'dark-mode-drop' : ''}`}></div>
				<div className={`drop drop-2 ${darkMode ? 'dark-mode-drop' : ''}`}></div>
				<div className={`drop drop-3 ${darkMode ? 'dark-mode-drop' : ''}`}></div>
				<div className={`drop drop-4 ${darkMode ? 'dark-mode-drop' : ''}`}></div>
				<div className={`drop drop-5 ${darkMode ? 'dark-mode-drop' : ''}`}></div>
			</div>
		</div>
	);
}

export default ContactForm;
