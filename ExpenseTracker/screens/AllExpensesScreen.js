import React from "react";
import TopBar from "../components/TopBar";
import { DataContext } from "../context/DataProvider";
import ExpenseList from "../components/ExpensesList";
import PageMessage from "../components/PageMessage";

export default function AllExpensesScreen() {
	const { expenses } = React.useContext(DataContext);
	function addNewExpense() {
		console.log("plus button pressed");
	}
	return (
		<>
			<TopBar title={"All Expenses"} handlePressPlus={addNewExpense} />
			{expenses.length ? (
				<ExpenseList expenses={expenses} />
			) : (
				<PageMessage message={"No expenses available."} />
			)}
		</>
	);
}
