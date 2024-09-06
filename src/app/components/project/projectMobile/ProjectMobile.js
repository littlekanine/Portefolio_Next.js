"use client";

import React, { useState, useEffect } from "react";
// import { Carousel } from 'react-responsive-3d-carousel';
import ProjectsData from "../../../data/projects.json";
import Modal from "./modalMobile/ModalMobile"; // Importez votre composant Modal
import initScrollReveal from "../../../../scripts/scrollReveal.js";

function ProjectsMobile({ darkMode }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        initScrollReveal();
        const handleResize = () => {
            initScrollReveal();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // console.log('Dark mode is:', darkMode ? 'enabled' : 'disabled');
    }, [darkMode]);

    return (
        <div className={`${darkMode ? " dark-mode" : ""}`}>
            <h2 className="section-title section-title-project dark-blue-text section-title-project-mobile">Projects</h2>
            <Carousel>
                {ProjectsData.map((project) => {
                    const imagePath = require(`../../../asset/img/${project.img}`);
                    return (
                        <div className="carrousel section-project load-hidden" key={project.id}>
                            <div className="carrousel-list">
                                <div className="carousel-item shadow" onClick={() => openModal(project)} role="button" tabIndex="0">
                                    <img
                                        className="carousel-img"
                                        src={imagePath}
                                        alt={project.nom}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
            {modalOpen && (
                <div className="modal-background">
                    <Modal project={selectedProject} closeModal={closeModal} />
                </div>
            )}
        </div>
    );
}

export default ProjectsMobile;
