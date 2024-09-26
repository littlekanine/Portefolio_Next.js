import React from 'react';

function Buttons({ type = 'button', message, SvgLeft, SvgRight, SvgEnvellope, SvgSun, SvgMoon, isToggle, darkMode, ContactSvg, FolderSvg, GitHubSvg, LinkedinSvg, TwitterSvg }) {
	return (
		<div className="flex center align-center">
			{SvgLeft && <SvgLeft className="arr-2" />}
			<span className={`text ${isToggle ? 'hidden' : ''}`}>{message}</span>
			<span className={`circle ${isToggle ? 'hidden' : ''}`}></span>
			{SvgEnvellope && <SvgEnvellope className="enveloppe" />}
			{SvgRight && <SvgRight className={`arr-1 ${darkMode ? 'dark-mode' : ''}`} />}
			{SvgMoon && <SvgMoon className="moon flex center align-center" />}
			{SvgSun && <SvgSun className="sun" />}
			{ContactSvg && <ContactSvg className="contactSvg" />}
			{FolderSvg && <FolderSvg className="folderSvg" />}
			{GitHubSvg && <GitHubSvg className="gitHubSvh" />}
			{LinkedinSvg && <LinkedinSvg className="linkedinSvg" />}
			{TwitterSvg && <TwitterSvg className="twitterSvg" />}
		</div>
	);
}

export default Buttons;
