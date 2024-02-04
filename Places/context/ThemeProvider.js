import { createContext } from "react";
import React from "react";
import { themes } from "../themes";
import { MD3LightTheme } from "react-native-paper";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [themeMode, setThemeMode] = React.useState(["light"]);
	function toggleThemeMode() {
		setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	}
	const theme = { ...MD3LightTheme, colors: themes[themeMode].colors };
	return (
		<ThemeContext.Provider value={{ theme, toggleThemeMode, themeMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
