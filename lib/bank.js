class InvalidDepositAmount extends Error{}
class InvalidDateFormat extends Error{}
class InvalidWithdrawalAmount extends Error{}
class InsufficientBalance extends Error {}

class Transaction {
    constructor(date, type, amount, balance){
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
        return this.transactions
    }

    createTransaction(date, type, amount, balance){
        return new Transaction(date, type, amount, balance);
    }

    validDate(date) {
        const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateFormatRegex.test(date);
    }
}

class StatementFormatter{
    static format(transactions){
        const header = 'date     || credit     || debit     || balance';
        transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
        transactions.reverse();
        const transactionLine = transactions.map((transaction) => {
        const { date, amount, type, balance } = transaction;
        const credit = type === 'credit' ? amount.toFixed(2): ' ';
        const debit = type === 'debit' ? amount.toFixed(2): ' ';
        statement += `${date} || ${credit}  || ${debit}  || ${balance.toFixed(2)}`;
    });
    return [header, ...transactionLine].join('\n')

    };
}

module.exports = {Transaction, TransactionManager, StatementFormatter, InvalidDepositAmount, InvalidDateFormat, InvalidWithdrawalAmount, InsufficientBalance};