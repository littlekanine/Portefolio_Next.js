'use client';

import React, { useState, useEffect } from 'react';
import ProjectsData from '../../../data/projects.json';
import Modal from './modalMobile/ModalMobile';

function ProjectsMobile({ darkMode }) {
	const [selectedProject, setSelectedProject] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectsData.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? ProjectsData.length - 1 : prevIndex - 1));
	};

	useEffect(() => {
		const handleResize = () => {};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {}, [darkMode]);

	return (
		<div className={`${darkMode ? 'dark-mode' : ''} flex column center align-center height100vh`}>
			<h2 className="section-title section-title-project dark-blue-text section-title-project-mobile">Projects Openclassroom 2023 - 2024</h2>

			<div className="carousel-container flex center align-center">
				<button className="carousel-control prev" onClick={handlePrev}>
					&lt;
				</button>

				<div className="carousel-item flex" onClick={() => openModal(ProjectsData[currentIndex])}>
					<img
						className="carousel-img flex center align-center"
						src={ProjectsData[currentIndex].img}
						alt={ProjectsData[currentIndex].nom}
						style={{
							width: '100%',
							height: '50%',
							objectFit: 'contain',
						}}
					/>
					<p></p>
				</div>

				<button className="carousel-control next" onClick={handleNext}>
					&gt;
				</button>
			</div>

			{modalOpen && (
				<div className="modal-background">
					<Modal project={selectedProject} closeModal={closeModal} />
				</div>
			)}
		</div>
	);
}

export default ProjectsMobile;
