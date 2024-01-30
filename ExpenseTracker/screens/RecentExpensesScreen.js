import React from "react";
import TopBar from "../components/TopBar";
import { DataContext } from "../context/DataProvider";
import ExpenseList from "../components/ExpensesList";
import PageMessage from "../components/PageMessage";
import Page from "../components/Page";
import ExpenseSummary from "../components/ExpenseSummary";

export default function RecentExpensesScreen() {
	const { expenses } = React.useContext(DataContext);
	const dateLimit = new Date();
	dateLimit.setDate(dateLimit.getDate() - 7);
	const latestExpenses = expenses.filter((expense) => expense.date > dateLimit);
	return (
		<>
			<TopBar title={"Recent Expenses"} />
			{latestExpenses.length ? (
				<Page>
					<ExpenseSummary expenses={latestExpenses} />
					<ExpenseList expenses={latestExpenses} />
				</Page>
			) : (
				<PageMessage message={"No expenses available in the last 7 days."} />
			)}
		</>
	);
}
