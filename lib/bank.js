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
        this.transactions.push({ date, credit: amount, balance});
            
        }

    withdraw (amount, date) {
        if (amount <= 0){
            throw new InvalidWithdrawalAmount('Invalid withdrawal amount');
        }

        const balance = this.calculateBalance() - amount;
        if (balance < 0) {
            throw new InsufficientBalance('Insufficient balance');
        }

        this.transactions.push({ date, debit: amount, balance});
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
        let statement = 'date         || credit        || debit         || balance\n';
        this.transactions.forEach((transaction) => {
            const { date, credit, debit, balance } = transaction;
            const formattedDate = date.padEnd(12);
            const formattedCredit = credit ? credit.toFixed(2).padEnd(12): ' '.repeat(12);
            const formattedDebit = debit ? debit.toFixed(2).padEnd(12): ' '.repeat(12);
            const formattedBalance = balance.toFixed(2);
            statement += `${formattedDate} || ${formattedCredit}  || ${formattedDebit}  || ${formattedBalance}\n`;
        });
        console.log(statement);
    }

    validDate(date){
        const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateFormatRegex.test(date);
    }

}

module.exports = Banking;