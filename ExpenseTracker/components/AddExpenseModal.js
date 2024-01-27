import React from "react";
import { StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { FormBuilder } from "react-native-paper-form-builder";
import { CURRENCIES, CATEGORIES } from "../data/dummy-data";
import { DatePickerInput } from "react-native-paper-dates";
import { DataContext } from "../context/DataProvider";
import { expenseFactory } from "../utils";

export default function AddExpenseModal({ visible, hideModal }) {
	const { control, setFocus, handleSubmit, reset } = useForm({
		defaultValues: {
			title: "",
			amount: "",
			currency: "",
			category: "",
			date: "",
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
				<View style={{}}>
					<Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}>
						Add Expense
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
					<View style={{ height: 55 }}>
						<Controller
							control={control}
							name="date"
							render={({ field }) => (
								<DatePickerInput
									locale="tr"
									label="Date"
									value={field.value}
									onChange={(date) => field.onChange(date)}
									inputMode="start"
									mode="outlined"
									style={{ marginVertical: 20 }}
								/>
								// <DatePicker
								// 	placeholderText="Select date"
								// 	onChange={(date) => field.onChange(date)}
								// 	selected={field.value}
								// />
							)}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-around",
							alignItems: "center",
							marginVertical: 20,
							gap: 10,
						}}
					>
						<Button
							onPress={onCancel}
							mode="contained-tonal"
							style={{ flex: 1 }}
						>
							Cancel
						</Button>
						<Button
							mode="contained"
							style={{ flex: 1 }}
							// onPress={handleSubmit((data) => {
							// 	console.log("form data: ", data);
							// })}
							onPress={handleSubmit(onSubmit)}
							// onPress={handlePressSubmit}
						>
							Submit
						</Button>
					</View>
				</View>
			</Modal>
		</Portal>
	);
}
const styles = StyleSheet.create({
	containerStyle: { backgroundColor: "white", padding: 20, margin: 20 },
});

// Datepicker with react hook form
// https://web-ridge.github.io/react-native-paper-dates/docs/date-picker/input-date-picker
// https://stackoverflow.com/questions/60864610/is-it-possible-to-use-react-datepicker-with-react-hooks-forms
