import Buttons from '../buttons/index.js';
import { ArrowRight, Enveloppe } from '../svgcomponent/SvgComponent.js';

function ContactForm() {
	return (
		<div>
			<section id="contact" className="form">
				<h1 className="section-title">Contact</h1>
				<div className="form-button hero-cta load-hidden">
					<a rel="noreferrer" className="animated-button" href="mailto:elia.kopff3891@gmail.com">
						<Buttons className="animated-button" message={'If you would like to contact me'} SvgRight={ArrowRight} SvgEnvellope={Enveloppe} />
					</a>
				</div>
			</section>
		</div>
	);
}

export default ContactForm;
