class Budget{
  constructor(totBudget, entertainment, food , clothing, bills){
    this.totBudget = totBudget;
    this.remainder = totBudget;
    this.entertainment = new Catergory(totBudget * entertainment);
    this.food = new Catergory(totBudget * food);
    this.clothing = new Catergory(totBudget * clothing);
    this.bills = new Catergory(totBudget * bills);
  }
}
