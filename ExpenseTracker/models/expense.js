class Expense {
	static nextId = 1;
	constructor(title, amount, currency, date, category) {
		this.id = Expense.nextId++;
		this.title = title;
		this.amount = amount;
		this.currency = currency;
		this.date = date;
		this.category = category;
	}
}

export default Expense;
