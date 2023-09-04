class InvalidDepositAmount extends Error{}
class InvalidDateFormat extends Error{}
class InvalidWithdrawalAmount extends Error{}
class InsufficientBalance extends Error{}


class Banking {
    constructor(){
        this.transactions = [];
    }

    deposit (amount, date) {
        if (amount <= 0) {
            throw new InvalidDepositAmount('Invalid deposit amount');
        }

        if (!this.validDate(date)) {
            throw new InvalidDateFormat ('Invalid date format');
        }
        
        const balance = this.calculateBalance() + amount;
        this.transactions.push({ date, debit: amount, balance});
            
        }

    withdraw (amount, date) {
        if (amount <= 0){
            throw new InvalidWithdrawalAmount('Invalid withdrawal amount');
        }

        const balance = this.calculateBalance() - amount;
        if (balance < 0) {
            throw new InsufficientBalance('Insufficient balance');
        }

        this.transactions.push({ date, withdraw: amount, balance});
        }

    calculateBalance () {
        if (this.transactions.length === 0) {
            return 0;
        }
        return this.transactions[this.transactions.length - 1].balance;
    }

    getTransactions(){
        return this.transactions
    }

    printStatement () {
        console.log('date || debit || balance');
        this.transactions.forEach((transaction) => {
            const { date, debit, balance } = transaction;
            console.log(`${date} || ${debit} || ${balance}`);
        });
    }

    validDate(date){
        const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateFormatRegex.test(date);
    }


    }


module.exports = Banking;