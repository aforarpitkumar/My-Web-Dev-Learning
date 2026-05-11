// example of encapsulation in JS using private fields 
// #balance is a private field which can only be accessed within the class and not outside the class

class BankAccount {

    #balance = 0;

    constructor(accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
    }

    // this function will add the amount to the balance and return a message of successful deposit along with the new balance

    deposit(amount) {
        this.#balance += amount;
        return "Deposit successful. New balance: " + this.#balance;
    }

    // this function will check if the amount to be withdrawn is greater than the current balance or not, if it is greater then it will return a message of insufficient funds and if it is less than or equal to the current balance then it will deduct the amount from the balance and return a message of successful withdrawal along with the new balance

    withdraw(amount) {
        if (amount > this.#balance) {
            return "Insufficient funds. Current balance: " + this.#balance;
        } else {
            this.#balance -= amount;
            return "Withdrawal successful. New balance: " + this.#balance;
        }
    }

    // this function will return the account details like account number, account holder name and current balance

    getAccountDetails() {
        return "Account Number: " + this.accountNumber + ", Account Holder: " + this.accountHolderName + ", Balance: " + this.#balance;
    }
}

let myAccount = new BankAccount("123456789", "Arpit Kumar");
let myAccount2 = new BankAccount("987654321", "John Doe");

console.log(myAccount.getAccountDetails());
console.log(myAccount.deposit(2000));
console.log(myAccount.withdraw(3000));
console.log(myAccount.withdraw(5000));
console.log(myAccount.withdraw(1000));
console.log(myAccount.getAccountDetails());

console.log("Now we will check the details of the second account which is created by John Doe");

console.log(myAccount2.getAccountDetails());
console.log(myAccount2.deposit(5000));
console.log(myAccount2.withdraw(2000));
console.log(myAccount2.getAccountDetails());

console.log("its time to explore abstraction in JS using classes and methods");