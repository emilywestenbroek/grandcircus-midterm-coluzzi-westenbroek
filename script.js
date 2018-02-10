var totBudget;
var entertainmentPer;
var foodPer;
var clothingPer;
var billsPer;
var myBudget;

$(() => {
  $("#create-budget-button").click(function() {
    totBudget = parseFloat($("#total-budget-input").val());
    console.log(totBudget);
    entertainmentPer = parseFloat($("#entertainment-budget-input").val()) /100;
    console.log(entertainmentPer);
    foodPer = parseFloat($("#food-budget-input").val()) / 100;
    console.log(foodPer);
    clothingPer = parseFloat($("#clothing-budget-input").val()) / 100;
    billsPer = parseFloat($("#bills-budget-input").val()) / 100;
    myBudget = new Budget(totBudget, entertainmentPer, foodPer, clothingPer, billsPer);
  });
});

// var totBudget = $("#total-budget-input").value
// var entertainmentPer = $("#entertainment-budget-input").value /100;
// var foodPer =$("#food-budget-input").value / 100;
// var clothingPer = $("#clothing-budget-input").value / 100;
// var billsPer = $("#bills-budget-input").value / 100;



function addButton(category, amount, description) {
  myBudget[category].addExpense(amount, description);
}
