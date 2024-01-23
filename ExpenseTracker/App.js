import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { DataProvider } from "./context/DataProvider";

export default function App() {
	return (
		<DataProvider>
			<PaperProvider>
				<StatusBar style="auto" />
				<View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
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
