import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MainStack from "./navigators/MainStack";
import { ThemeProvider, ThemeContext } from "./context/ThemeProvider";


function Main() {
	const { theme } = React.useContext(ThemeContext);
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
			<StatusBar style="auto" />
		</PaperProvider>
	);
}

export default function App() {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	);
}
