
// "use client";
// import React from 'react';
import { Moon, Sun, ArrowLeft, ArrowRight } from '../svgcomponent/SvgComponent.js';
import Buttons from '../buttons/index.js';

function Herro({ darkMode, toggleDarkMode }) {
	return (
		<div>
			<section id="hero" className={`jumbotron ${darkMode ? 'dark-mode' : ''}`}>
				<div className="animated-button toggle-button" onClick={toggleDarkMode}>
					<button id="toggle-button" className="flex align-center center">
						{darkMode ? <Sun /> : <Moon />}
					</button>
				</div>
				<div className="container">
					<h1 className="hero-title load-hidden">
						Welcome.
						<br />
						My name is <span className="text-color-main">Elia Kopff</span>
						<br />
						I'm a Web Developer.
					</h1>
					<div className="hero-cta load-hidden">
						<a rel="noreferrer" className={`animated-button ${darkMode ? 'dark-mode' : ''}`} href="#about">
							<Buttons message={'Know more'} SvgLeft={ArrowLeft} SvgRight={ArrowRight} darkMode={darkMode} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Herro;
