import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MainStack from "./navigators/MainStack";
import { ThemeProvider, ThemeContext } from "./context/ThemeProvider";
import { initDb } from "./utils/database";
import * as SplashScreen from "expo-splash-screen";
import { SpinnerProvider } from "./context/SpinnerProvider";

SplashScreen.preventAutoHideAsync();

function Main() {
	const { theme } = React.useContext(ThemeContext);
	return (
		<PaperProvider theme={theme}>
			<SpinnerProvider>
				<NavigationContainer>
					<MainStack />
				</NavigationContainer>
				<StatusBar style="auto" />
			</SpinnerProvider>
		</PaperProvider>
	);
}

export default function App() {
	React.useEffect(() => {
		async function prepare() {
			try {
				await initDb();
			} catch (error) {
				console.log(error);
			} finally {
				await SplashScreen.hideAsync();
			}
		}
		prepare();
	}, []);
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	);
}
