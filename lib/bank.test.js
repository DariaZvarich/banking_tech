const Banking = require('./bank');

describe('Banking', () => {
    let banking;

    beforeEach(() => {
        banking = new Banking();
    });

    it('should initialize with a balance of 0', () => {
        expect(banking.calculateBalance()).toBe(0);
    });

    it('should allow depositis and update the balance', () => {
        banking.deposit(1000, '10/01/2023');
        expect(banking.calculateBalance()).toBe(1000);
    });

    it('it should allow withdrawals and update the balance', () => {
        banking.deposit(1000, '10/01/2023');
        banking.withdraw(500, '14/01/2023');
        expect(banking.calculateBalance()).toBe(500);
    });

    it('it should return an error message for invalid withdrawal amount', () => {
        banking.deposit(1000, '10/01/2023');
        expect(() => banking.withdraw(1500, '14/01/2023')).toThrow('Insufficient balance');
    }); 
//     it('should return an error message if you withdraw more money then you have on your account', () => {
//         banking.deposit(400);
//         const newBalance = () => banking.withdraw(500);
//         expect(newBalance).toThrow('Invalid withdrawal amount');
//     })
});