import React from "react";
import { StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button, Surface } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { FormBuilder } from "react-native-paper-form-builder";
import { CURRENCIES, CATEGORIES } from "../data/dummy-data";
import { DatePickerInput } from "react-native-paper-dates";
import { DataContext } from "../context/DataProvider";
import { expenseFactory } from "../utils";

export default function AddExpenseModal({ visible, hideModal, category }) {
	const { control, setFocus, handleSubmit, reset } = useForm({
		defaultValues: {
			title: "",
			amount: "",
			currency: "",
			category: category || "",
			date: new Date(),
		},
		mode: "onChange",
	});
	const { addToExpenses } = React.useContext(DataContext);

	function onCancel() {
		hideModal();
		reset();
	}

	function onSubmit(data) {
		console.log(data);
		const expense = expenseFactory(data);
		addToExpenses(expense);
		reset();
		hideModal();
	}

	return (
		<Portal>
			<Modal
				visible={visible}
				onDismiss={hideModal}
				contentContainerStyle={styles.containerStyle}
			>
				<Surface style={styles.surface}>
					<Text style={styles.header}>Add Expense</Text>
					<FormBuilder
						control={control}
						setFocus={setFocus}
						formConfigArray={[
							{
								name: "title",
								type: "text",
								rules: {
									required: {
										value: true,
										message: "Expense title is required.",
									},
								},
								textInputProps: {
									label: "Title",
								},
							},
							{
								name: "amount",
								type: "text",
								rules: {
									required: {
										value: true,
										message: "Expense amount is required.",
									},
								},
								textInputProps: {
									label: "Amount",
								},
							},
							{
								name: "currency",
								type: "select",
								rules: {
									required: {
										value: true,
										message: "Currency is required",
									},
								},
								textInputProps: {
									label: "Currency",
								},
								options: CURRENCIES.map((currency) => {
									return {
										value: currency,
										label: currency,
									};
								}),
							},
							{
								name: "category",
								type: "select",
								rules: {
									required: {
										value: true,
										message: "Category is required",
									},
								},
								textInputProps: {
									label: "Category",
								},
								options: CATEGORIES.map((category) => {
									return {
										value: category.id,
										label: category.title,
									};
								}),
							},
						]}
					/>
					<View style={styles.datePickerContainer}>
						<Controller
							control={control}
							name="date"
							render={({ field }) => (
								<DatePickerInput
									locale="en"
									label="Date"
									value={field.value}
									onChange={(date) => field.onChange(date)}
									inputMode="start"
									mode="outlined"
								/>
							)}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							onPress={onCancel}
							mode="contained-tonal"
							style={styles.button}
						>
							Cancel
						</Button>
						<Button
							mode="contained"
							style={styles.button}
							onPress={handleSubmit(onSubmit)}
						>
							Submit
						</Button>
					</View>
				</Surface>
			</Modal>
		</Portal>
	);
}
const styles = StyleSheet.create({
	surface: {
		padding: 20,
		margin: 20,
		borderRadius: 12,
	},
	header: { fontSize: 20, marginBottom: 20, textAlign: "center" },
	datePickerContainer: { height: 55 },
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 20,
		gap: 10,
	},
	button: { flex: 1 },
});
