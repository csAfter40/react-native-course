import { Text } from "react-native";
import React from "react";
import Page from "../components/Page";
import { useRoute } from "@react-navigation/native";
import { DataContext } from "../context/DataProvider";

export default function ExpenseDetailScreen() {
	const { expenses } = React.useContext(DataContext);
	const route = useRoute();
	const expenseId = route.params.expenseId;
	const expense = expenses.find((expense) => expense.id === expenseId);

	return (
		<>
			<Page>
				<Text>{`Expense detail page for expense ${expense.id}`}</Text>
			</Page>
		</>
	);
}
