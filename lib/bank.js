class Banking {
    constructor(){
        this.balance = 0;
    }

    deposit (amount){
        if (amount > 0) {
            this.balance += amount;
            return this.balance
        }
    }


}

module.exports = Banking;