import { Text } from "react-native";
import React from "react";
import Page from "../components/Page";
import TopBar from "../components/TopBar";

export default function AllExpensesScreen() {
	function addNewExpense() {
		console.log("plus button pressed");
	}
	return (
		<>
			<TopBar title={"All Expenses"} handlePressPlus={addNewExpense} />
			<Page>
				<Text>All Expenses Screen</Text>
			</Page>
		</>
	);
}
