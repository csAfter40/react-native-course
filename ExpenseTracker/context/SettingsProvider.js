import React, { createContext } from "react";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const SettingsContext = createContext();

function SettingsProvider(props) {
	const [darkMode, setDarkMode] = React.useState(true);
	const [currentTheme, setCurrentTheme] = React.useState(MD3LightTheme);
	React.useEffect(() => {
		darkMode ? setCurrentTheme(MD3DarkTheme) : setCurrentTheme(MD3LightTheme);
	}, [darkMode]);
	function setDarkModeOn() {
		setDarkMode(true);
	}
	function setDarkModeOff() {
		setDarkMode(false);
	}
	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}
	return (
		<SettingsContext.Provider
			value={{
				darkMode,
				currentTheme,
				setDarkModeOff,
				setDarkModeOn,
				toggleDarkMode,
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	);
}

export { SettingsProvider, SettingsContext };
