import React from "react";
import { PaperProvider } from "react-native-paper";
import { SettingsContext } from "./SettingsProvider";

export default function ThemedPaperProvider({ children }) {
	const { currentTheme } = React.useContext(SettingsContext);
	return <PaperProvider theme={currentTheme}>{children}</PaperProvider>;
}
