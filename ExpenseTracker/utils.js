import Expense from "./models/expense";
import { CATEGORIES } from "./data/dummy-data";

export function expenseFactory(data) {
	const expense = new Expense(
		data.title,
		data.amount,
		data.currency,
		data.date,
		data.category
	);
	return expense;
}

export function getCategory(categoryId) {
	return CATEGORIES.find((category) => category.id === categoryId);
}
