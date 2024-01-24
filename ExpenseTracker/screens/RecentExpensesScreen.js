import { Text } from "react-native";
import React from "react";
import Page from "../components/Page";
import TopBar from "../components/TopBar";

export default function RecentExpensesScreen() {
	function addNewExpense() {
		console.log("plus button pressed");
	}
	return (
		<>
			<TopBar title={"Recent Expenses"} handlePressPlus={addNewExpense} />
			<Page>
				<Text>Recent Expenses Screen</Text>
			</Page>
		</>
	);
}
