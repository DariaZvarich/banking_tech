const Banking = require('./bank');

describe('Banking', () => {
    let banking;

    beforeEach(() => {
        banking = new Banking();
    });

    it('should deposit money into the account', () => {
        const newBalance = banking.deposit(1000);
        expect(newBalance).toBe(1000);
    });

    it('should withdrawal money from the account', () => {
        banking.deposit(1000);
        const newBalance = banking.withdraw(500);
        expect(newBalance).toBe(500);
    });

});