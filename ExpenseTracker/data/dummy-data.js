import Category from "../models/category";
import Expense from "../models/expense";

export const CATEGORIES = [
	new Category("c1", "Housing", "#f5428d", "home"),
	new Category("c2", "Utilities", "#f54242", "lightning-bolt-circle"),
	new Category("c3", "Transportation", "#f5a442", "train-car"),
	new Category("c4", "Groceries", "#f5d142", "cart-variant"),
	new Category("c5", "Healthcare", "#368dff", "medical-bag"),
	new Category("c6", "Insurance", "#41d95d", "shield-account"),
	new Category("c7", "Debt Payments", "#9eecff", "credit-card-clock-outline"),
	new Category("c8", "Entertainment", "#b9ffb0", "drama-masks"),
	new Category("c9", "Personal Care", "#ffc7ff", "face-woman-shimmer"),
	new Category("c10", "Education", "#47fced", "school"),
	new Category("c11", "Other", "#41d95d", "dots-horizontal-circle"),
];

export const TEST_EXPENSES = [
	new Expense(
		"e1",
		"Carpet cleaner",
		20.45,
		"USD",
		new Date(2024, 0, 25),
		CATEGORIES[0]
	),
	new Expense("e2", "Medicine", 12.45, "USD", new Date(2024, 0, 24), CATEGORIES[5]),
	new Expense("e3", "Hand creme", 2.15, "USD", new Date(2024, 0, 10), CATEGORIES[7]),
];