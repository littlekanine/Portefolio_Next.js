import React from 'react';

function Buttons({ message, SvgLeft, SvgRight, SvgEnvellope, SvgSun, SvgMoon, isToggle, darkMode }) {
	return (
		<div className="flex center align-center">
			{SvgLeft && <SvgLeft className="arr-2" />}
			<span className={`text ${isToggle ? 'hidden' : ''}`}>{message}</span>
			<span className={`circle ${isToggle ? 'hidden' : ''}`}></span>
			{SvgEnvellope && <SvgEnvellope className="enveloppe" />}
			{SvgRight && <SvgRight className={`arr-1 ${darkMode ? 'dark-mode' : ''}`} />}
			{SvgMoon && <SvgMoon className="moon flex center align-center" />}
			{SvgSun && <SvgSun className="sun" />}
		</div>
	);
}

export default Buttons;
