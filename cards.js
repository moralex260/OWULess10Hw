class UserCard {
    constructor(balance=100, transactionLimit=100  )
 {
     this.balance=balance;
     this.transactionLimit=transactionLimit;
     this.historyLogs=[];

 }
   putCredits(putmoney){
        console.log("ви поповнюєте баланс картки на "+putmoney);
      let  record=new Operation("put money",putmoney);
      this.historyLogs.push(record);
return this.balance+=putmoney;
   };
    takeCredits(getmoney){
        console.log("ви знімаєте "+getmoney+" грн");
        let  record=new Operation("get money",getmoney);
        this.historyLogs.push(record);
        return this.balance-getmoney
    };
    setTransactionLimit(sumOfTransactionLimit){
        console.log("новий ліміт по трансакціям :"+sumOfTransactionLimit);
        let  record=new Operation("set Transaction Limit",sumOfTransactionLimit);
        this.historyLogs.push(record);
        return this.transactionLimit=sumOfTransactionLimit
    };
    transferCredits(sum,card){
        if(sum<=this.transactionLimit){
        this.balance-=sum;
            let  record=new Operation("transferCredits took money",sum);
            this.historyLogs.push(record);
        card.balance+=sum;
            let  record1=new Operation("transferCredits got money",sum);
            card.historyLogs.push(record1);
        }
        else console.log("сума переказу більша за встановленний ліміт.спочатку збільшіть ліміт трансакцій")

    };

    
}
class UserAccount{
constructor( name ){
    this.name=name;
    this.cards=[];
}
    addCard() {
        if (this.cards.length < 3) {
            this.cards.push(new UserCard());
        }
        else {console.log( this.name+" ,в тебе переліміт карток")}
}

         getCardByKey(num){
    if(num>0&&num<=3){
      return this.cards[num-1]
    }
         };

}
class Operation{

    constructor(operationType ,credits ) {
        this.operationType=operationType;
        this.credits=credits;
        this.operationTime=new Date();

    }

}

let user=new UserAccount("vasya");
console.log(user);
user.addCard();
console.log(user);
console.log(user.getCardByKey(1));
user.cards[0].putCredits(200);
console.log(user);
user.cards[0].setTransactionLimit(300);
let user1=new UserAccount("natasha");
user1.addCard();
user1.cards[0].setTransactionLimit(300);
user.cards[0].transferCredits(300,user1.cards[0]);
console.log(user1);
user.addCard();
user1.addCard();
user1.addCard();
user1.addCard();