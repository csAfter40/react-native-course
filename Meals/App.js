import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsList from "./screens/MealsList";
import MealDetail from "./screens/MealDetail";
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
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					// default options for all screens
					screenOptions={{
						headerTitleAlign: "center",
						animation: "slide_from_right",
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={options.categories}
					/>
					<Stack.Screen
						name="MealsList"
						component={MealsList}
						options={options.mealsList}
					/>
					<Stack.Screen
						name="MealDetail"
						component={MealDetail}
						options={options.mealDetail}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const options = {
	categories: { title: "All Categories" },
	mealsList: ({ route }) => {
		const categoryTitle = route.params.categoryTitle;
		return {
			title: categoryTitle || "Meals",
		};
	},
	mealDetail: {
		title: "Meal Detail",
	},
};
