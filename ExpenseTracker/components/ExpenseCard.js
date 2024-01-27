import { Text, StyleSheet } from "react-native";
import React from "react";
import { Surface, Avatar, Card } from "react-native-paper";
import { Pressable } from "react-native";
import { getCategory } from "../utils";

export default function ExpenseCard({ expense, onExpenseSelect }) {
	const category = getCategory(expense.category);
	return (
		<Pressable onPress={onExpenseSelect}>
			<Surface style={styles.container}>
				<Card.Title
					title={expense.title}
					titleStyle={styles.title}
					subtitle={`${expense.amount} ${expense.currency}`}
					left={(props) => <Avatar.Icon {...props} icon={category.icon} />}
					right={(props) => <Text>{expense.date.toLocaleDateString()}</Text>}
				/>
			</Surface>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 5,
		paddingRight: 10,
		borderRadius: 8,
	},
	title: {
		fontSize: 18,
	},
});
