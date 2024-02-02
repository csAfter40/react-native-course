import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import RecentExpensesScreen from "../../screens/RecentExpensesScreen";
import AllExpensesScreen from "../../screens/AllExpensesScreen";
import CategoryStackNavigator from "./CategoryStackNavigator";
import SettingsScreen from "../../screens/SettingsScreen";
import GlobalSpinner from "../GlobalSpinner";
import { SpinnerContext } from "../../context/SpinnerProvider";

export default function BottomTabNavigation() {
	const { spinnerVisible } = React.useContext(SpinnerContext);
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "recent",
			title: "Recent",
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
		{
			key: "settings",
			title: "Settings",
			focusedIcon: "cog",
			unfocusedIcon: "cog-box",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		recent: RecentExpensesScreen,
		all: AllExpensesScreen,
		categories: CategoryStackNavigator,
		settings: SettingsScreen,
	});

	return (
		<>
			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
			/>
			{spinnerVisible && <GlobalSpinner />}
		</>
	);
}
