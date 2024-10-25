"use client";

import React, { useState, useEffect } from "react";
import ProjectsData from "../../../data/projects.json";
import Modal from "./modalMobile/ModalMobile";

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === ProjectsData.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {}, [darkMode]);

    return (
        <div className={`${darkMode ? "dark-mode" : ""} flex column center align-center height100vh`}>
            <h2 className="section-title section-title-project dark-blue-text section-title-project-mobile">Projects Openclassroom 2023 - 2024</h2>

            <div className="carousel-container flex center align-center column">
                <div className="carousel-item flex center align-center" onClick={() => openModal(ProjectsData[currentIndex])}>
                    <img
                        className="carousel-img flex center align-center"
                        src={ProjectsData[currentIndex].img}
                        alt={ProjectsData[currentIndex].nom}
                        style={{
                            width: "80%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="dots-container flex">
				{ProjectsData.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === currentIndex ? 'active' : ''}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
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
