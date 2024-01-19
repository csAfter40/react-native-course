import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
		"roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
	});
	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<CategoriesScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
