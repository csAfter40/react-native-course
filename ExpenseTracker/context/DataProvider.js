import React, { createContext } from "react";
import axiosInstance from "../axios";

const DataContext = createContext();

function DataProvider(props) {
	const [expenses, setExpenses] = React.useState([]);
	function refreshExpenses() {
		let newExpenses = [];
		axiosInstance.get("/expenses.json").then((response) => {
			for (const [key, value] of Object.entries(response.data)) {
				value.date = new Date(value.date);
				newExpenses.push({ ...value, id: key });
			}
			setExpenses(newExpenses.reverse());
		});
	}
	React.useEffect(() => {
		refreshExpenses();
	}, []);
	function removeFromExpenses(expenseId) {
		setExpenses((prevList) => {
			return prevList.filter((expense) => expense.id != expenseId);
		});
	}
	function addToExpenses(expenseId, data) {
		const newExpense = { ...data, id: expenseId };
		setExpenses((prevList) => [...prevList, newExpense]);
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
				refreshExpenses,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataProvider, DataContext };
