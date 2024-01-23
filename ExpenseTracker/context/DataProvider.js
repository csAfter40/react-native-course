import React, { createContext } from "react";

const DataContext = createContext();

function DataProvider(props) {
	const [expenses, setExpenses] = React.useState([]);
	function removeFromExpenses(expenseId) {
		setExpenses((prevList) => {
			return prevList.filter((expense) => expense.id != expenseId);
		});
	}
	function addToExpenses(expense) {
		setExpenses((prevList) => [...prevList, expense]);
	}
	return (
		<DataContext.Provider
			value={{
				expenses,
				removeFromExpenses,
				addToExpenses,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataProvider, DataContext };
