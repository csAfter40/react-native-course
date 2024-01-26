import { Text } from "react-native";
import React from "react";
import Page from "../components/Page";
import TopBar from "../components/TopBar";
import { useRoute } from "@react-navigation/native";

export default function ExpenseDetailScreen() {
	const route = useRoute();
	const expense = route.params.expense;
	return (
		<>
			<TopBar title={"Expense Detail"} />
			<Page>
				<Text>{`Expense detail page for expense ${expense.id}`}</Text>
			</Page>
		</>
	);
}
