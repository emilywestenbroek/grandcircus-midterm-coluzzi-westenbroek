class Category {
  constructor(budget, current){
    this.intBudget = budget;
    this.currentBudget = current;
    this.expenses = [];
  }
  addExpense (description, amount) { // variables will be pulled from user input
    this.expenses.push(new Expense(description, amount));
  }
}
