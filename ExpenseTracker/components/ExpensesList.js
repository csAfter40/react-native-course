import { FlatList, Text } from "react-native";
import Page from "../components/Page";
import React from "react";
import ExpenseCard from "./ExpenseCard";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseList({ expenses }) {
	const navigation = useNavigation();
	function handleExpenseSelect(expense) {
		navigation.navigate("ExpenseDetail", { expense: expense });
	}
	return (
		<Page>
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
		</Page>
	);
}
