const myBudget = new Budget(2000, .25, .25, .25, .25);

function addButton(category, description, amount) {
  myBudget[category].addExpense(description, amount);
}
