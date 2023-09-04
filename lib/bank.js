class Banking {
    constructor(){
        this.transactions = [];
    }

    deposit (amount, date) {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }

        if (!this.validDate(date)) {
            throw new Error('Invalid date format');
        }
        
        const balance = this.calculateBalance() + amount;
        this.transactions.push({ date, debit: amount, balance});
            
        }

    withdraw (amount, date) {
        if (amount <= 0){
            throw new Error('Invalid withdrawal amount');
        }

        const balance = this.calculateBalance() - amount;
        if (balance < 0) {
            throw new Error('Insufficient balance');
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
        console.log('date || credit || debit || balance');
        this.transactions.forEach((transaction) => {
            const { date, debit, balance } = transaction;
            console.log(`${date} || ${debit} || ${balance}`);
        });
    }

    validDate(date){
        const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateFormat.test(date);
    }


    }


module.exports = Banking;