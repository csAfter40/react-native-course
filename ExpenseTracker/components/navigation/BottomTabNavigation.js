import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import RecentExpensesScreen from "../../screens/RecentExpensesScreen";
import AllExpensesScreen from "../../screens/AllExpensesScreen";
import CategoryStackNavigator from "./CategoryStackNavigator";

export default function BottomTabNavigation() {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "recent",
			title: "Recent Expenses",
			focusedIcon: "timer-sand-full",
			unfocusedIcon: "timer-sand",
		},
		{
			key: "all",
			title: "All Expenses",
			focusedIcon: "calendar-month",
			unfocusedIcon: "calendar-month-outline",
		},
		{
			key: "categories",
			title: "Categories",
			focusedIcon: "apps-box",
			unfocusedIcon: "apps",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		recent: RecentExpensesScreen,
		all: AllExpensesScreen,
		categories: CategoryStackNavigator,
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
}
