import React from "react";
import { useRoute } from "@react-navigation/native";
import { DataContext } from "../context/DataProvider";
import ExpenseList from "../components/ExpensesList";
import PageMessage from "../components/PageMessage";
import Page from "../components/Page";
import ExpenseSummary from "../components/ExpenseSummary";

export default function CategoryExpenses() {
	const { expenses } = React.useContext(DataContext);
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const filteredExpenses = categoryId
		? expenses.filter((expense) => expense.category === categoryId)
		: expenses;
	if (filteredExpenses.length === 0) {
		return <PageMessage message={"No expenses available in this category."} />;
	}
	return (
		<Page>
			<ExpenseSummary expenses={filteredExpenses} />
			<ExpenseList expenses={filteredExpenses} />
		</Page>
	);
}
