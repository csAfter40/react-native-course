import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/CategoriesScreen";
import TopBar from "../TopBar";
import CategoryExpenses from "../../screens/CategoryExpenses";
import ExpenseDetailScreen from "../../screens/ExpenseDetailScreen";

const Stack = createNativeStackNavigator();

export default function CategoryStackNavigator() {
	return (
		<Stack.Navigator
			// default options for all screens
			screenOptions={{
				headerTitleAlign: "center",
				animation: "slide_from_right",
				header: (props) => <TopBar {...props} />,
				contentStyle: { backgroundColor: null },
			}}
		>
			<Stack.Screen
				name="CategoriesList"
				component={CategoriesScreen}
				options={options.categories}
			/>
			<Stack.Screen
				name="CategoryExpenses"
				component={CategoryExpenses}
				options={options.categoryExpenses}
			/>
			<Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
		</Stack.Navigator>
	);
}

const options = {
	categories: { title: "Categories" },
	categoryExpenses: ({ route }) => {
		const categoryTitle = route.params.categoryTitle;
		return {
			title: categoryTitle || "Category Expenses",
		};
	},
};
