import React from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ExpenseSummary(expenses) {
	const summary = {};
	expenses.expenses.forEach((element) => {
		const currency = element.currency;
		if (summary.hasOwnProperty(currency)) {
			summary[currency] = summary[currency] + element.amount;
		} else {
			summary[currency] = element.amount;
		}
	});
	return (
		<DataTable style={styles.container}>
			<DataTable.Header>
				<DataTable.Title>Totals</DataTable.Title>
			</DataTable.Header>

			{Object.keys(summary).map((currency) => {
				return (
					<DataTable.Row key={currency}>
						<DataTable.Cell>{currency}</DataTable.Cell>
						<DataTable.Cell numeric>
							{summary[currency].toFixed(2)}
						</DataTable.Cell>
					</DataTable.Row>
				);
			})}
		</DataTable>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
});
