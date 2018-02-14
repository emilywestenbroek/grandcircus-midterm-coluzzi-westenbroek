var totBudget;
var entertainmentPer;
var foodPer;
var clothingPer;
var billsPer;
var myBudget;

$(() => {
  $("#initialize-budget-button").click(function() {
    totBudget = parseFloat($("#total-budget-input").val());
    entertainmentPer = parseFloat($("#entertainment-budget-input").val()) /100;
    foodPer = parseFloat($("#food-budget-input").val()) / 100;
    clothingPer = parseFloat($("#clothing-budget-input").val()) / 100;
    billsPer = parseFloat($("#bills-budget-input").val()) / 100;
    myBudget = new Budget(totBudget, entertainmentPer, foodPer, clothingPer, billsPer);
  });

  $("#add-expense-button").click(addButton);

  $("#main-screen-container").hide();

  $("#initialize-budget-button").click(function() {
    $("#start-container").hide();
    $("#main-screen-container").show();
    $("#expense-container").show();
  });
});

function expenseInputReset() {
  $("#category-expense-select").val("Please Select a Category");
  $("#expense-description-input").val("");
  $("#expense-amount-input").val("");
}

function addButton(category, description, amount) {
  var category = $("#category-expense-select").val();
  var description = $("#expense-description-input").val();
  var amount = parseFloat($("#expense-amount-input").val());
  if (category !== "Please Select a Category") {
    myBudget[category].addExpense(description, amount);
    $("#expense-message-container").text(`Your "${description}" expense has been added.`);
    expenseInputReset();
  } else {
    $("#expense-message-container").text("Sorry, you haven't chosen a category.");
  }
}

$(document).ready(function() {
  $("#expense-container").hide();
  $("#main-screen-container").hide();
});
