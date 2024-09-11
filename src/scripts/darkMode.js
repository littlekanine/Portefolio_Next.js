"use client";

import { useState, useEffect } from "react";

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(() => {
        // Initialise l'état en fonction de la valeur dans localStorage
        const savedMode = localStorage.getItem('mode');
        return savedMode === 'dark';
    });
    useEffect(() => {
        const currentMode = localStorage.getItem("mode");
        if (currentMode === "dark-mode") {
            setDarkMode(true);
        } else {
            localStorage.setItem("mode", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("mode", newMode ? "dark" : "light");
    };

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;
