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

    it('should reject negative deposits', () => {
        expect(() => banking.deposit(-500, '12/01/2023')).toThrow('Invalid deposit amount');
        expect(banking.calculateBalance()).toEqual(0);    
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


    it('should store and retrieve transaction history', () => {
        banking.deposit(1000, '10/01/2023');
        banking.deposit(2000, '13/01/2023');
        banking.withdraw(500, '14/01/2023');
        const transactions = banking.getTransactions();
        expect(transactions).toHaveLength(3);
        expect(transactions[0]).toEqual({ date: '10/01/2023', debit: 1000, balance: 1000});
        expect(transactions[1]).toEqual({ date: '13/01/2023', debit: 2000, balance: 3000});
        expect(transactions[2]).toEqual({ date: '14/01/2023', withdraw: 500, balance: 2500})
    });

    // it('sho')
});