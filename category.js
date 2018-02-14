class Category {
  constructor(budget){
    this.intBudget = budget;
    this.currentBudget = budget;
    this.expenses = [];
    this.currentTotalExpense = 0;
  }
  calCategoryBudget() {
    for(var i = 0; i < this.expenses.length; i++) {
      this.currentTotalExpense = this.currentTotalExpense + this.expenses[i].amount;
    }
    this.currentBudget = this.intBudget - this.currentTotalExpense;
  }
  addExpense(description, amount) { // variables will be pulled from user input
    this.expenses.push(new Expense(description, amount));
    this.calCategoryBudget();
  }
}
