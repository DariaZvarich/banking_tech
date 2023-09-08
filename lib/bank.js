class InvalidDepositAmount extends Error{}
class InvalidDateFormat extends Error{}
class InvalidWithdrawalAmount extends Error{}
class InsufficientBalance extends Error {}

class Transaction {
    constructor({date, type, amount, balance}){
        this.date = date;
        this.balance = balance;
        this.amount = amount;
        this.type = type;
    }
}
    
class TransactionManager {
    constructor(){
        this.transactions = [];
    }

    deposit (amount) {
        const date = new Date().toLocaleDateString();
        const balance = this.calculateBalance() + amount;
        if (amount <= 0) {
            throw new InvalidDepositAmount('Invalid deposit amount');
        }

        if (!this.validDate(date)) {
            throw new InvalidDateFormat ('Invalid date format');
        }
        const transaction = this.createTransaction(date, 'credit', amount, balance);
        this.transactions.push(transaction);
        }

    withdraw (amount) {
        const date = new Date().toLocaleDateString();
        const balance = this.calculateBalance() - amount;
        if (amount <= 0){
            throw new InvalidWithdrawalAmount('Invalid withdrawal amount');
        }
        if (balance < 0) {
            throw new InsufficientBalance('Insufficient balance');
        }

        const transaction = this.createTransaction(date, 'debit', amount, balance);
        this.transactions.push(transaction);
        }

    calculateBalance () {
        return this.transactions.reduce((balance, transaction) => {
            if (transaction.type === 'credit'){
                return balance + transaction.amount;
            } else {
                return balance - transaction.amount;
            }
        }, 0);
 
    }

    getTransactions(){
        // TODO: write a test that makes sure this is sorted by date
        return this.transactions
    }

    createTransaction(date, type, amount, balance){
        return new Transaction({date, type, amount, balance});
    }

    validDate(date) {
        const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateFormatRegex.test(date);
    }
}


module.exports = {Transaction, TransactionManager, InvalidDepositAmount, InvalidDateFormat, InvalidWithdrawalAmount, InsufficientBalance};