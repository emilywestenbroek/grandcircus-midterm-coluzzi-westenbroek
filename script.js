const myBudget = new Budget(2000, .25, .25, .25, .25);

function addButton(category, amount, description) {
  // if (category === "Entertainment") {
  //   entertainment.addExpense(description, amount);
  // } else if (category === "Food") {
  //   food.addExpense(description, amount);
  // } else if (category === "Clothing") {
  //   clothing.addExpense(description, amount);
  // } else if (category === "Bills") {
  //   bills.addExpense(description, amount);
  // } else {
  //   console.log("this is not a valid expense");
  // }
  myBudget[category].addExpense(amount, description);
}
