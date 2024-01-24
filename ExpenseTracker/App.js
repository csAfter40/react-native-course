import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { DataProvider } from "./context/DataProvider";
import BottomTabNavigation from "./components/navigation/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<DataProvider>
			<PaperProvider>
				<NavigationContainer>
					<StatusBar style="auto" />
					<BottomTabNavigation />
				</NavigationContainer>
			</PaperProvider>
		</DataProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
