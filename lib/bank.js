class Banking {
    constructor(){
        this.balance = 0;
    }

    deposit (amount){
        if (amount > 0) {
            this.balance += amount;
            return this.balance
        }
        else{
            throw new Error('Invalid deposit amount');
        }
    }

    withdraw (amount) {
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            return this.balance;
        }
        else{
            throw new Error('Invalid withdrawal amount');
        }
    }


}

module.exports = Banking;