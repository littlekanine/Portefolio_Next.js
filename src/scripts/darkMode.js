import { useState, useEffect } from 'react';

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const currentMode = localStorage.getItem('mode');
		if (currentMode === 'dark-mode') {
			setDarkMode(true);
		} else {
			localStorage.setItem('mode', 'light');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem('mode', newMode ? 'dark' : 'light');
	};
	console.log(localStorage);

	return [darkMode, toggleDarkMode];
};

export default useDarkMode;
