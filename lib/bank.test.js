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

    it('should withdraw money from the account', () => {
        banking.deposit(1000);
        const newBalance = banking.withdraw(500);
        expect(newBalance).toBe(500);
    });

    it('it should return an error message for invalid deposit amount', () => {
        expect(() => banking.deposit(-100)).toThrow('Invalid deposit amount');
    });

    it('it should return an error message for invalid withdrawal amount', () => {
        expect(() => banking.withdraw(-100)).toThrow('Invalid withdrawal amount');
    });  
});