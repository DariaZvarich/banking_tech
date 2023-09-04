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

//     it('it should return an error message for invalid deposit amount', () => {
//         expect(() => banking.deposit(-100)).toThrow('Invalid deposit amount');
//     });

//     it('it should return an error message for invalid withdrawal amount', () => {
//         expect(() => banking.withdraw(-100)).toThrow('Invalid withdrawal amount');
//     }); 
//     it('should return an error message if you withdraw more money then you have on your account', () => {
//         banking.deposit(400);
//         const newBalance = () => banking.withdraw(500);
//         expect(newBalance).toThrow('Invalid withdrawal amount');
//     })
});