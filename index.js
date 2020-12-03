class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if (this.value < 0 && (this.value * -1) > this.account.balance){
      return null;
    }
    this.account.balance += this.value;
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}
const myAccount = new Account("snow-patrol");


console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
const t3 = new Deposit(40.00, myAccount);
t3.commit();

const t2 = new Withdrawal(40.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
console.log(myAccount.transactions);

