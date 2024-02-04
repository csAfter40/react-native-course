import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MainStack from "./navigators/MainStack";

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
			<StatusBar style="auto" />
		</PaperProvider>
	);
}
