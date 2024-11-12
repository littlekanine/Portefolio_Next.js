'use client';

import React, { useEffect } from 'react';
import skillsData from '../../data/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../iconMap/IconMap';
import getProgressWidth from './progressBar/ProgressBar';

function CardsStack({ darkMode }) {
	const chunkArray = (array, size) => {
		const chunkedArr = [];
		let index = 0;
		while (index < array.length) {
			chunkedArr.push(array.slice(index, size + index));
			index += size;
		}
		return chunkedArr;
	};

	const chunkedSkills = chunkArray(skillsData, 2);

	useEffect(() => {}, [darkMode]);

	return (
		<div className={`${darkMode ? 'dark-mode' : ''}`}>
			<section className="card-section">
				{chunkedSkills.map((row, rowIndex) => (
					<div className="card-stack section-cardStacks load-hidden flex center align-center rowx" key={rowIndex}>
						{row.map((skill, index) => (
							<div className="card-container" key={index}>
								<div className="card-front">
									<h3 className="title-stack">{skill.nom}</h3>
									<FontAwesomeIcon icon={IconMap[skill.logo]} className="icons-skill" />
									<div className="progress-bar flex center align-center">
										<div className="progress skills-progress load-hidden" style={{ width: getProgressWidth(skill.niveaux) }}></div>
									</div>
								</div>
								<div className="card-back">
									<h3 className="niveau">{skill.niveaux}</h3>
								</div>
							</div>
						))}
					</div>
				))}
			</section>
		</div>
	);
}

export default CardsStack;
