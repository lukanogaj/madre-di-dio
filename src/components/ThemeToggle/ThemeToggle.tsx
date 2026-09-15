import { useEffect, useState } from "react";
import "./ThemeToggle.css";

type Theme = "light" | "dark";

function ThemeToggle() {
	// Uses the saved theme or the user's system preference on first visit
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem("theme") as Theme | null;

		if (savedTheme) {
			return savedTheme;
		}

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	// Applies the selected theme and saves the preference
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Switches between light and dark mode
	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	};

	return (
		<button
			className='theme-toggle'
			type='button'
			onClick={toggleTheme}
			aria-label={theme === "light" ? "Włącz tryb ciemny" : "Włącz tryb jasny"}>
			<span aria-hidden='true'>{theme === "light" ? "☾" : "☀"}</span>
		</button>
	);
}

export default ThemeToggle;
