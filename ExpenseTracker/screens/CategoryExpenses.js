import { Text, StyleSheet, View } from "react-native";
import React from "react";
import Page from "../components/Page";
import { useRoute } from "@react-navigation/native";
import { DataContext } from "../context/DataProvider";

export default function CategoryExpenses() {
	const { expenses } = React.useContext(DataContext);
	function addNewExpense() {
		console.log("plus button pressed");
	}
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const filteredExpenses = categoryId
		? expenses.filter((expense) => expense.category === categoryId)
		: expenses;
	if (filteredExpenses.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No expenses available in this category.</Text>
			</View>
		);
	}
	return (
		// ExpensesList component to come here
		<Page>
			<Text>Category Expenses Screen</Text>
		</Page>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
	},
});
