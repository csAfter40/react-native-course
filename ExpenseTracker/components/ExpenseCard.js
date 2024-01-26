import { Text, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";

export default function ExpenseCard({ expense, onExpenseSelect }) {
	return (
		<Pressable style={styles.container} onPress={onExpenseSelect}>
			<Text style={{ color: "black" }}>{expense.title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
		borderWidth: 1,
		borderColor: "black",
	},
});
