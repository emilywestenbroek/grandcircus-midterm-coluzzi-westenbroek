var transactionCount = 0;

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
  addExpense(category, description, amount) { // variables will be pulled from user input
    this.expenses.push(new Expense(category, description, amount));
    this.calCategoryBudget();
    if (transactionCount < 15) {
      $("#recent-expense-list").append(`<li>$${amount} - ${category} - ${description}</li>`);
      transactionCount++;
    }else{
      var oldestExpense = $("#recent-expense-list").find(":first-child").remove();
      $("#recent-expense-list").append(`<li>$${amount} - ${category} - ${description}</li>`);

    }
  }
}
