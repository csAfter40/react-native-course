import { FlatList } from "react-native";
import React from "react";
import ExpenseCard from "./ExpenseCard";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseList({ expenses }) {
	const navigation = useNavigation();
	function handleExpenseSelect(expense) {
		navigation.navigate("ExpenseDetail", { expenseId: expense.id });
	}
	return (
		<FlatList
			data={expenses}
			renderItem={({ item }) => (
				<ExpenseCard
					expense={item}
					onExpenseSelect={() => handleExpenseSelect(item)}
				/>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
}
