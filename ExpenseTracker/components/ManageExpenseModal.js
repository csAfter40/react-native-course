import React from "react";
import { StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button, Surface, Snackbar } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { FormBuilder } from "react-native-paper-form-builder";
import { CURRENCIES, CATEGORIES } from "../data/dummy-data";
import { DatePickerInput } from "react-native-paper-dates";
import { DataContext } from "../context/DataProvider";
import { SettingsContext } from "../context/SettingsProvider";
import { useTheme } from "react-native-paper";
import axiosInstance from "../axios";
import { SnackContext } from "../context/SnackProvider";
import { SpinnerContext } from "../context/SpinnerProvider";

export default function ManageExpenseModal({ visible, hideModal, category, expense }) {
	const { startSpinner, stopSpinner } = React.useContext(SpinnerContext);
	const { snack } = React.useContext(SnackContext);
	const theme = useTheme();
	const { userCurrency } = React.useContext(SettingsContext);
	const { control, setFocus, handleSubmit, reset } = useForm({
		defaultValues: {
			title: expense?.title || "",
			amount: expense?.amount.toString() || "",
			currency: expense?.currency || userCurrency,
			category: expense?.category || category || "",
			date: expense?.date || new Date(),
		},
		mode: "onSubmit",
	});
	const { refreshExpenses, addToExpenses, editExpense, removeFromExpenses } =
		React.useContext(DataContext);
	function onCancel() {
		hideModal();
		reset();
	}

	function onSubmit(data) {
		data.amount = +data.amount;
		startSpinner();
		axiosInstance
			.post("/expenses.json", data)
			.then((response) => {
				snack("Expense successfully saved.");
				refreshExpenses();
				reset();
				hideModal();
			})
			.catch((err) => {
				snack("Error occured while saving expense");
				console.log(err);
			})
			.finally(stopSpinner);
	}
	function deleteExpense() {
		startSpinner();
		axiosInstance
			.delete(`/expenses/${expense.id}.json`)
			.then((response) => {
				snack("Expense successfully deleted");
				refreshExpenses();
				hideModal();
			})
			.catch((err) => {
				snack("Error occured while deleting expense");
				console.log(err);
			})
			.finally(stopSpinner);
	}
	function onSave(data) {
		startSpinner();
		data["amount"] = parseFloat(data["amount"]);
		axiosInstance
			.put(`/expenses/${expense.id}.json`, data)
			.then((response) => {
				snack("Expense successfully updated");
				refreshExpenses();
				hideModal();
			})
			.catch((err) => {
				snack("Error occured while updating expense");
				console.log(err);
			})
			.finally(stopSpinner);
	}

	return (
		<Portal>
			<Modal
				visible={visible}
				onDismiss={hideModal}
				contentContainerStyle={styles.containerStyle}
			>
				<Surface style={styles.surface}>
					<Text style={styles.header}>
						{expense ? "Edit Expense" : "Add Expense"}
					</Text>
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
									maxLength: {
										value: 50,
										message:
											"Title should be less than 50 characters.",
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
									pattern: {
										value: /^([1-9]\d*|[0-9]*\.[0-9]{2})$/,
										message: "Please enter a valid amount",
									},
								},
								textInputProps: {
									label: "Amount",
									keyboardType: "decimal-pad",
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
						{expense ? (
							<>
								<Button
									mode="contained"
									style={styles.button}
									onPress={deleteExpense}
									buttonColor={theme.colors.errorContainer}
									textColor={theme.colors.error}
								>
									Delete
								</Button>
								<Button
									mode="contained"
									style={styles.button}
									onPress={handleSubmit(onSave)}
								>
									Save
								</Button>
							</>
						) : (
							<Button
								mode="contained"
								style={styles.button}
								onPress={handleSubmit(onSubmit)}
							>
								Submit
							</Button>
						)}
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
