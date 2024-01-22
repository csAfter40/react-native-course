import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealsList from "../screens/MealsList";
import MealDetail from "../screens/MealDetail";

const Stack = createNativeStackNavigator();

export default function CategoryStackNavigator() {
	return (
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
