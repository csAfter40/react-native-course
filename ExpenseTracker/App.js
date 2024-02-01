import { StatusBar } from "expo-status-bar";
import React from "react";
import { DataProvider } from "./context/DataProvider";
import BottomTabNavigation from "./components/navigation/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { enGB, tr, en, fr, registerTranslation } from "react-native-paper-dates";
import { SettingsProvider } from "./context/SettingsProvider";
import ThemedPaperProvider from "./context/ThemedPaperProvider";
import { SnackProvider } from "./context/SnackProvider";
import GlobalSnackbar from "./components/GlobalSnackbar";
registerTranslation("en-GB", enGB);
registerTranslation("en", en);
registerTranslation("tr", tr);
registerTranslation("fr", fr);

export default function App() {
	return (
		<SettingsProvider>
			<DataProvider>
				<ThemedPaperProvider>
					<SnackProvider>
						<NavigationContainer>
							<StatusBar style="auto" />
							<BottomTabNavigation />
						</NavigationContainer>
						<GlobalSnackbar />
					</SnackProvider>
				</ThemedPaperProvider>
			</DataProvider>
		</SettingsProvider>
	);
}
