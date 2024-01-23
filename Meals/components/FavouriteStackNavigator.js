import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetail from "../screens/MealDetail";
import FavouriteMeals from "../screens/FavouriteMeals";

const Stack = createNativeStackNavigator();

export default function FavouriteStackNavigator() {
	return (
		<Stack.Navigator
			// default options for all screens
			screenOptions={{
				headerTitleAlign: "center",
				animation: "slide_from_right",
			}}
		>
			<Stack.Screen
				name="FavouriteMeals"
				component={FavouriteMeals}
				options={options.favouriteMeals}
			/>
			<Stack.Screen
				name="MealDetail"
				component={MealDetail}
				options={options.mealDetail}
			/>
		</Stack.Navigator>
	);
}

const options = {
	favouriteMeals: { title: "My Favourites" },
	mealDetail: {
		title: "Meal Detail",
	},
};
