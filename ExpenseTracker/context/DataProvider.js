import React, { createContext } from "react";
import axiosInstance from "../axios";
import { SpinnerContext } from "./SpinnerProvider";
import { SnackContext } from "./SnackProvider";
const DataContext = createContext();

function DataProvider(props) {
	const { startSpinner, stopSpinner } = React.useContext(SpinnerContext);
	const { snack } = React.useContext(SnackContext);
	const [expenses, setExpenses] = React.useState([]);
	function refreshExpenses() {
		startSpinner();
		let newExpenses = [];
		axiosInstance
			.get("/expenses.json")
			.then((response) => {
				for (const [key, value] of Object.entries(response.data)) {
					value.date = new Date(value.date);
					newExpenses.push({ ...value, id: key });
				}
				setExpenses(newExpenses.reverse());
				stopSpinner();
			})
			.catch((err) => {
				snack("Problem fetching expenses data.");
				console.log(err);
				stopSpinner();
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
