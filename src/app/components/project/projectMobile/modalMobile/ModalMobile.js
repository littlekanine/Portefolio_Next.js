import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../../../iconMap/IconMap';

function Modal({ project, closeModal, darkMode }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	const handleClose = () => {
		setIsOpen(false);
		setTimeout(() => {
			closeModal();
		}, 300); // Correspond à la durée de l'animation CSS
	};

	const imagePath = require(`../../../../asset/img/${project.img}`);

	useEffect(() => {
		console.log('Dark mode is:', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	return (
		<div className={`modal-overlay ${isOpen ? 'modal-open' : ''}`}>
			<div className={`modal${darkMode ? ' dark-mode' : ''}`}>
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="title-modal section-title-project">{project.nom}</h2>
						<FontAwesomeIcon icon={IconMap.xmark} className="modal-close" onClick={handleClose} />
					</div>
					<img src={imagePath} alt={project.nom} className="img-on-modal" />
					<h2 className="title-modal">Description</h2>
					<ul className="description-list">
						{project.description.map((desc, index) => (
							<li key={index} className="description-item">
								{desc}
							</li>
						))}
					</ul>
					<h3 className="title-modal">Language used : </h3>
					<div className="language-icons">
						{(project.langages || []).map((lang, index) => (
							<FontAwesomeIcon key={index} icon={IconMap[lang]} />
						))}
					</div>
					<div className="link-modal">
						<h3 className="title-modal">Link</h3>
						<div className="link-spec-modal">
							<span className="site-modal">Site : </span>
							{project.website && (
								<a href={project.website} target="_blank" rel="noopener noreferrer" className="icons">
									<FontAwesomeIcon icon={IconMap[project.iconSite]} />
								</a>
							)}
						</div>
						<div className="link-spec-modal">
							<span className="site-modale"> GitHub : </span>
							{project.website && (
								<a href={project.gitHubSite} target="_blank" rel="noopener noreferrer" className="icons">
									<FontAwesomeIcon icon={IconMap[project.gitHub]} />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
