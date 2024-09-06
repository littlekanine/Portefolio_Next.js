"use client"

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

	const chunkedSkills = chunkArray(skillsData, 3);

	useEffect(() => {
		console.log('Dark mode is:', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	return (
		<div className={`${darkMode ? ' dark-mode' : ''}`}>
			<section className="card-section">
				<h1 className="section-title">Skills</h1>
				{chunkedSkills.map((row, rowIndex) => (
					<div className="card-stack section-cardStacks load-hidden flex center align-center rowx" key={rowIndex}>
						{row.map((skill, index) => (
							<div className="card-contain flex center align-center bold" key={index}>
								<div className="card flex center align-center">
									<h2 className="title-stack">{skill.nom}</h2>
									<FontAwesomeIcon key={index} icon={IconMap[skill.logo]} className="icons-skill " />
									<div className="progress-bar flex center align-center">
										<div className="progress skills-progress load-hidden" style={{ width: getProgressWidth(skill.niveaux) }}></div>
									</div>
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
