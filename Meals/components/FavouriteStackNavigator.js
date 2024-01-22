import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetail from "../screens/MealDetail";
import Favourites from "../screens/Favourites";

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
				name="Favourites"
				component={Favourites}
				options={options.favourites}
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
	favourites: { title: "My Favourites" },
	mealDetail: {
		title: "Meal Detail",
	},
};
