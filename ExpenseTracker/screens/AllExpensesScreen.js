import React from "react";
import TopBar from "../components/TopBar";
import { DataContext } from "../context/DataProvider";
import ExpenseList from "../components/ExpensesList";
import PageMessage from "../components/PageMessage";
import Page from "../components/Page";
import ExpenseSummary from "../components/ExpenseSummary";

export default function AllExpensesScreen() {
	const { expenses } = React.useContext(DataContext);
	return (
		<>
			<TopBar title={"All Expenses"} />
			<Page>
				{expenses.length ? (
					<>
						<ExpenseSummary expenses={expenses} />
						<ExpenseList expenses={expenses} />
					</>
				) : (
					<PageMessage message={"No expenses available."} />
				)}
			</Page>
		</>
	);
}
