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
  $("#add-expense-button").click(addButton);
});

function addButton(category, description, amount) {
  var category = $("#category-expense-select").val();
  var description = $("#expense-description-input").val();
  var amount = parseFloat($("#expense-amount-input").val());
  myBudget[category].addExpense(description, amount);
}

$(document).ready(function() {
  $("#start-container").hide();
  $("#expense-modal-container").hide();
  $("#main-screen-container").hide();
});

$("#create-budget-button").click(function() {
  $("#start-container").show();
  $("#load-screen-container").hide();
})

$("#initialize-budget-button").click(function() {
  $("#start-container").hide();
  $("#main-screen-container").show();
})

$("#new-expense-button").click(function() {
  $("#expense-modal-container").show();
  // $("#main-screen-container").hide();
})
