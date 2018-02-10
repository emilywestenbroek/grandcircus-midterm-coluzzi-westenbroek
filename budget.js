class Budget{
  constructor(totBudget, entertainment, food , clothing, bills){
    this.totBudget = totBudget;
    this.remainder = totBudget;
    this.entertainment = new Category(totBudget * entertainment);
    this.food = new Category(totBudget * food);
    this.clothing = new Category(totBudget * clothing);
    this.bills = new Category(totBudget * bills);
  }
}
