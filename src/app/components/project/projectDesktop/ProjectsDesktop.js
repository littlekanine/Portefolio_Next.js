'use client';
import React, { useState, useEffect } from 'react';
import ProjectsData from '../../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../../iconMap/IconMap';

function Projects({ darkMode }) {
	const [expandedProjectId, setExpandedProjectId] = useState(null);
	const [hoveredProjectId, setHoveredProjectId] = useState(null);

	const handleProjectClick = (projectId) => {
		setExpandedProjectId(projectId);
	};

	const handleClickOutside = (event) => {
		const project = document.querySelector(`.item.clicked`);
		const projectInfo = document.querySelector(`.project-info`);
		const projectInfoLeft = document.querySelector(`.project-info-left`);
		if (project && !project.contains(event.target)) {
			project.classList.remove('clicked', 'expanded');
			setExpandedProjectId(null);
			projectInfo.classList.add('hidden');
			projectInfoLeft.classList.add('hidden');
		}
	};

	useEffect(() => {
		if (expandedProjectId !== null) {
			const project = document.querySelector(`.item[data-project-id="${expandedProjectId}"]`);
			if (project) {
				project.classList.add('clicked', 'expanded');
			}
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [expandedProjectId]);

	useEffect(() => {}, [darkMode]);

	return (
		<div className="height100vh">
			<section id="projects" className={`projects${darkMode ? ' dark-mode' : ''}`}>
				<div className="container center height-full">
					<div className="project-wrapper height-full">
						<h2 className="section-title dark-blue-text section-title-project">Projects Openclassroom 2023 - 2024</h2>
						<div className="flex center align-center">
							<div className="items flex section-project load-hidden" id="project-items">
								{ProjectsData.map((project) => {
									const imagePath = project.img;
									const videoPath = project.video;
									const isClicked = project.id === expandedProjectId;
									const isHovered = project.id === hoveredProjectId;
									console.log(imagePath);
									return (
										<div
											className={`item ${isClicked ? 'clicked' : ''} ${
												expandedProjectId && !isClicked ? 'opacity pointerEvents' : ''
											}`}
											key={project.id}
											onClick={() => handleProjectClick(project.id)}
											onMouseEnter={() => setHoveredProjectId(project.id)}
											onMouseLeave={() => setHoveredProjectId(null)}
											role="button"
											tabIndex="0"
											style={{ backgroundImage: `url(${imagePath})` }}
											aria-label={project.nom}
											data-project-id={project.id}
										>
											{isClicked ? (
												<video autoPlay loop muted className="project-video">
													<source src={videoPath} type="video/mp4" />
													Votre navigateur ne supporte pas les vidéos HTML5.
												</video>
											) : (
												<div className="project-image" style={{ backgroundImage: `url(${imagePath}), hidden` }} />
											)}
											<div className="project-info flex center align-center column" id="info">
												<h2>Language used </h2>
												<div className="language-icons flex center">
													{(project.langages || []).map((lang, index) => (
														<FontAwesomeIcon key={index} icon={IconMap[lang]} />
													))}
												</div>
												<div className="link">
													<div className="link-spec">
														<span className="site">Site : </span>
														{project.website && (
															<a
																href={project.website}
																target="_blank"
																rel="noopener noreferrer"
																className="icons"
															>
																<span className="text-hidden">Link media</span>
																<FontAwesomeIcon icon={IconMap[project.iconSite]} />
															</a>
														)}
													</div>
													<div className="link-spec">
														<span className="site"> GitHub : </span>
														{project.website && (
															<a
																href={project.gitHubSite}
																target="_blank"
																rel="noopener noreferrer"
																className="icons"
															>
																<span className="text-hidden">Link media</span>
																<FontAwesomeIcon icon={IconMap[project.gitHub]} />
															</a>
														)}
													</div>
												</div>
											</div>
											<div className="project-info-left flex center align-center column" id="info">
												<h2 className="titre-project">{project.nom}</h2>
												<ul className="description-list-desktop margin-top10">
													{project.description.map((desc, index) => (
														<li key={index} className="description-item">
															{desc}
														</li>
													))}
												</ul>
											</div>
											{isHovered && (
												<div className="hover-message">
													<p>{`${project.nom}`}</p>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
