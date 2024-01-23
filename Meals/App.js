import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DataProvider } from "./store/context/DataProvider";
import CategoryStackNavigator from "./components/CategoryStackNavigator";
import FavouriteStackNavigator from "./components/FavouriteStackNavigator";
import { Ionicons } from "@expo/vector-icons";

const BottomTabBar = createBottomTabNavigator();

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
		<DataProvider>
			<StatusBar style="auto" />
			<NavigationContainer>
				<BottomTabBar.Navigator screenOptions={{ headerShown: false }}>
					<BottomTabBar.Screen
						name="CategoryStackNavigator"
						component={CategoryStackNavigator}
						options={options.categoryStackOptions}
					/>
					<BottomTabBar.Screen
						name="FavouritesStackNavigator"
						component={FavouriteStackNavigator}
						options={options.favouriteStackOptions}
					/>
				</BottomTabBar.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}

const options = {
	categoryStackOptions: {
		tabBarIcon: ({ color, size }) => (
			<Ionicons name="apps-sharp" color={color} size={size} />
		),
		title: "Categories",
	},
	favouriteStackOptions: {
		tabBarIcon: ({ color, size }) => (
			<Ionicons name="star" color={color} size={size} />
		),
		title: "Favourites",
	},
};