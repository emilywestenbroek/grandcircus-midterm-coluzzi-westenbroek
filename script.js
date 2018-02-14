var totBudget;
var entertainmentPer;
var foodPer;
var clothingPer;
var billsPer;
var myBudget;
var username;

$(() => {
  $("#initialize-budget-button").click(function() {
    totBudget = parseFloat($("#total-budget-input").val());
    entertainmentPer = parseFloat($("#entertainment-budget-input").val()) /100;
    foodPer = parseFloat($("#food-budget-input").val()) / 100;
    clothingPer = parseFloat($("#clothing-budget-input").val()) / 100;
    billsPer = parseFloat($("#bills-budget-input").val()) / 100;
    checkPercentage = entertainmentPer + foodPer + clothingPer + billsPer;
    username = $("#name-input").val();
    if (checkPercentage > 1) {
      $("#message-container").show();
      $("#message-container").text("It looks like you've exceeded 100%.");
    } else {
      myBudget = new Budget(totBudget, entertainmentPer, foodPer, clothingPer, billsPer);
      $("#start-container").hide();
      $("#main-screen-container").show();
      $("#expense-container").show();
      $("#username-display").text(`${username}`);
      $("#current-budget").text(`${myBudget.remainder}/${myBudget.totBudget}`);
      calculateBudgetBar();
    }
  });

  $("#add-expense-button").click(addButton);

  $("#main-screen-container").hide();
  //
  // $("#initialize-budget-button").click(function() {
  //   $("#start-container").hide();
  //   $("#main-screen-container").show();
  //   $("#expense-container").show();
  //   $("#username-display").text(`${username}`);
  // });
});

function calculateBudgetBar(){
  $("#entertainment-bar").css("width",(`${entertainmentPer * 100}%`));
  $("#food-bar").css("width",`${entertainmentPer * 100}%`);
  $("#clothing-bar").css("width",`${entertainmentPer * 100}%`);
  $("#bills-bar").css("width",`${entertainmentPer * 100}%`);

  $("#entertainment-bar-progress").css("width",`${(myBudget.entertainment.currentBudget / myBudget.entertainment.intBudget) * 100}%`);
  $("#food-bar-progess").css("width",`${(myBudget.food.currentBudget / myBudget.food.intBudget) * 100}%`);
  $("#clothing-bar-progress").css("width",`${(myBudget.clothing.currentBudget / myBudget.clothing.intBudget) * 100}%`);
  $("#bills-bar-progress").css("width",`${(myBudget.bills.currentBudget / myBudget.bills.intBudget) * 100}%`);
}

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
    myBudget.calRemainingBudget();
    $("#message-container").text(`Your "${description}" expense has been added.`);
    expenseInputReset();
  } else {
    $("#message-container").text("Sorry, you haven't chosen a category.");
  }
}

$(document).ready(function() {
  $("#expense-container").hide();
  $("#main-screen-container").hide();
  $("#message-container").hide();
});
