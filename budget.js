class Budget{
  constructor(totBudget, entertainment, food , clothing, bills){
    this.totBudget = totBudget;
    this.remainder = totBudget;
    this.entertainment = new Category(totBudget * entertainment);
    this.food = new Category(totBudget * food);
    this.clothing = new Category(totBudget * clothing);
    this.bills = new Category(totBudget * bills);
  }
  calRemainingBudget() {
    this.remainder = this.entertainment.currentBudget + this.food.currentBudget
    + this.clothing.currentBudget + this.bills.currentBudget;
    $("#current-budget").text(`${this.remainder}/${this.totBudget}`);
  }
}
