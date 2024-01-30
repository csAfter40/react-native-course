import { StyleSheet } from "react-native";
import React from "react";
import { Surface, Avatar, Card, Text } from "react-native-paper";
import { Pressable } from "react-native";
import { getCategory } from "../utils";
import ManageExpenseModal from "./ManageExpenseModal";

export default function ExpenseCard({ expense, onExpenseSelect }) {
	const category = getCategory(expense.category);
	const [visible, setVisible] = React.useState(false);
	function showModal() {
		setVisible(true);
	}
	function hideModal() {
		setVisible(false);
	}
	return (
		<>
			<Pressable onPress={showModal}>
				<Surface style={styles.container}>
					<Card.Title
						title={expense.title}
						titleStyle={styles.title}
						subtitle={`${expense.amount.toFixed(2)} ${expense.currency}`}
						left={(props) => <Avatar.Icon {...props} icon={category.icon} />}
						right={(props) => (
							<Text>{expense.date.toLocaleDateString()}</Text>
						)}
					/>
				</Surface>
			</Pressable>
			<ManageExpenseModal
				expense={expense}
				visible={visible}
				hideModal={hideModal}
			/>
		</>
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
