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
import GlobalSpinner from "./components/GlobalSpinner";
import { SpinnerProvider } from "./context/SpinnerProvider";
registerTranslation("en-GB", enGB);
registerTranslation("en", en);
registerTranslation("tr", tr);
registerTranslation("fr", fr);

export default function App() {
	return (
		<SettingsProvider>
			<SpinnerProvider>
				<ThemedPaperProvider>
					<SnackProvider>
						<DataProvider>
							<NavigationContainer>
								<StatusBar style="auto" />
								<BottomTabNavigation />
							</NavigationContainer>
						</DataProvider>
						<GlobalSnackbar />
					</SnackProvider>
				</ThemedPaperProvider>
			</SpinnerProvider>
		</SettingsProvider>
	);
}
