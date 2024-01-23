import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
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
				name="CategoryMeals"
				component={CategoryMeals}
				options={options.categoryMeals}
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
	categoryMeals: ({ route }) => {
		const categoryTitle = route.params.categoryTitle;
		return {
			title: categoryTitle || "Meals",
		};
	},
	mealDetail: {
		title: "Meal Detail",
	},
};
