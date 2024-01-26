import React from "react";
import TopBar from "../components/TopBar";
import { DataContext } from "../context/DataProvider";
import ExpenseList from "../components/ExpensesList";
import PageMessage from "../components/PageMessage";

export default function RecentExpensesScreen() {
	const { expenses } = React.useContext(DataContext);
	const dateLimit = new Date();
	dateLimit.setDate(dateLimit.getDate() - 7);
	const latestExpenses = expenses.filter((expense) => expense.date > dateLimit);
	function addNewExpense() {
		console.log("plus button pressed");
	}
	return (
		<>
			<TopBar title={"Recent Expenses"} handlePressPlus={addNewExpense} />
			{latestExpenses.length ? (
				<ExpenseList expenses={latestExpenses} />
			) : (
				<PageMessage message={"No expenses available in the last 7 days."} />
			)}
		</>
	);
}
