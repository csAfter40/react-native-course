import React, { createContext } from "react";
import { TEST_EXPENSES } from "../data/dummy-data";

const DataContext = createContext();

function DataProvider(props) {
	const [expenses, setExpenses] = React.useState(TEST_EXPENSES);
	function removeFromExpenses(expenseId) {
		setExpenses((prevList) => {
			return prevList.filter((expense) => expense.id != expenseId);
		});
	}
	function addToExpenses(expense) {
		setExpenses((prevList) => [...prevList, expense]);
	}
	function editExpense(expenseId, data) {
		setExpenses((prevList) => {
			return prevList.map((expense) => {
				if (expense.id === expenseId) {
					return { ...data, id: expenseId };
				} else {
					return expense;
				}
			});
		});
	}
	return (
		<DataContext.Provider
			value={{
				expenses,
				removeFromExpenses,
				addToExpenses,
				editExpense,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataProvider, DataContext };
