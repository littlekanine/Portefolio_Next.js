import React, { useEffect } from 'react';
import Pdp from '../../asset/img/mwa.jpg';

function About({ darkMode }) {
	useEffect(() => {
		console.log('Dark mode is:', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	return (
		<div className={`${darkMode ? ' dark-mode' : ''}`}>
			<section id="about">
				<div className="container">
					<div className="row about-wrapper">
						<div className="col-md-6 col-sm-12 img-about">
							<div className="about-wrapper__image load-hidden">
								<img src={Pdp} alt="Elia Kopff" className="img-fluid rounded shadow-lg" />
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__info load-hidden flex center column">
								<p className="about-wrapper__info-text">
									Former bartender, I chose to reorient myself after seven years of service.
									<p className="about-wrapper__info-text">I want to create, improve, undertake.</p>
								</p>
								<p className="about-wrapper__info-text">
									I am starting to train on the back end, with the aim of becoming full stack. I would like to work in application creation and
									development
								</p>
								<p className="about-wrapper__info-text">I am motivated and attentive. I look forward to collaborating with you.</p>
								<p className="about-wrapper__info-text">Curiosity brings knowledge</p>
							</div>
						</div>
					</div>
					<div className="social-links about-wrapper__link">
						<a href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr">
							<span className="text-hidden">Lien linkedin</span>
							<i className="fab fa-linkedin fa-inverse icon"></i>
						</a>
						<a href="https://github.com/littlekanine">
							<span className="text-hidden">Lien GitHub</span>
							<i className="fab fa-brands fa-github icon"></i>
						</a>
						<a href="https://x.com/K_D3828">
							<span className="text-hidden">Lien X</span>
							<i className="fab fa-brands fa-x-twitter icon"></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
