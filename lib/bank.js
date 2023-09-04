class Banking {
    constructor(){
        this.transactions = [];
    }

    deposit (amount, data) {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        
        const balance = this.calculateBalance() + amount;
        this.transactions.push({ date, credit: amount, balance});
            
        }

    withdraw (amount) {
        if (amount <= 0){
            throw new Error('Invalid withdrawal amount');
        }

        const balance = this.calculateBalance() - amount;
        if (balance < 0) {
            throw new Error('Insufficient balance');
        }

        this.transactions.push({ date, debit: amount, balance});
        }

    calculateBalance () {
        if (this.transactions.length === 0) {
            return 0;
        }
        return this.transactions[this.transactions.length - 1].balance;
    }

    }


module.exports = Banking;