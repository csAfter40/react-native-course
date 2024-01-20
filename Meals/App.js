import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsList from "./screens/MealsList";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="MealsCategories" component={CategoriesScreen} />
					<Stack.Screen name="MealsList" component={MealsList} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
