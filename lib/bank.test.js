const {Transaction, TransactionManager, StatementFormatter, InvalidDepositAmount, InvalidDateFormat, InvalidWithdrawalAmount, InsufficientBalance} = require('./bank');

describe('Transaction', () => {

    it('should create a transaction object', () => {
        const transaction = new Transaction('10/01/2023', 'credit', 1000, 1000);
        expect(transaction.date).toBe('10/01/2023');
        expect(transaction.type).toBe('credit');
        expect(transaction.amount).toBe(1000);
        expect(transaction.balance).toBe(1000);
    });

});

describe('TransactionManager', () => {
    let transactionManager;

    beforeEach(() => {
        transactionManager = new TransactionManager();
    });

    it('should initialize with a balance of 0', () => {
        expect(transactionManager.transactions).toHaveLength(0);
    });

    it('should allow deposits and update the balance', () => {
        transactionManager.deposit(1000);
        expect(transactionManager.transactions).toHaveLength(1);
        expect(transactionManager.calculateBalance()).toBe(1000);
    });

    it('should reject negative deposits', () => {
        expect(() => transactionManager.deposit(-500)).toThrow(InvalidDepositAmount);
        expect(transactionManager.calculateBalance()).toEqual(0);    
    });

    it('it should allow withdrawals and update the balance', () => {
        transactionManager.deposit(1000);
        transactionManager.withdraw(500);
        expect(transactionManager.transactions).toHaveLength(2);
        expect(transactionManager.calculateBalance()).toBe(500);
    });

    it('it should return an error message for invalid withdrawal amount', () => {
        transactionManager.deposit(1000);
        expect(() => transactionManager.withdraw(1500)).toThrow(InsufficientBalance);
    });


    it('should store and retrieve transaction history', () => {
        const currentDate = new Date().toLocaleDateString();
        transactionManager.deposit(1000);
        transactionManager.deposit(2000);
        transactionManager.withdraw(500);
        const transactions = transactionManager.getTransactions();
        expect(transactions).toHaveLength(3);
        expect(transactions[0]).toEqual({ date: currentDate, type: 'credit', amount: 1000, balance: 1000});
        expect(transactions[1]).toEqual({ date: currentDate, type: 'credit', amount: 2000, balance: 3000});
        expect(transactions[2]).toEqual({ date: currentDate, type: 'debit', amount: 500, balance: 2500});
    });

//     it('should reject invalid dates in transactions', () => {
//         expect(() => transactionManager.deposit(1000, '2023-01-10')).toThrow('Invalid date format');
//         expect(transactionManager.calculateBalance()).toEqual(0);
//     });

//     it('should print the account statement in a table format', () => {
//         transactionManager.deposit(1000, '10/01/2023');
//         transactionManager.deposit(2000, '13/01/2023');
//         transactionManager.withdraw(500, '14/01/2023');
//         const consoleLogSpy = jest.spyOn(console, 'log');
//         const expectedOutput = 
//         `date         || credit        || debit         || balance
// 10/01/2023   || 1000.00       ||               || 1000.00
// 13/01/2023   || 2000.00       ||               || 3000.00
// 14/01/2023   ||               || 500.00        || 2500.00\n`;
//         transactionManager.printStatement();
//         expect(consoleLogSpy).toHaveBeenCalledWith(expectedOutput);
//         consoleLogSpy.mockRestore();
//     });

//     it('should display transactions in the correct order', () => {
//         banking.deposit(1000, '10/01/2023');
//         banking.deposit(2000, '13/01/2023');
//         banking.withdraw(500, '14/01/2023');
//         const consoleLogSpy = jest.spyOn(console, 'log');
//         banking.printStatement();
//         const output = consoleLogSpy.mock.calls[0][0].split('\n');
//         expect(output[1]).toContain('14/01/2023');
//         expect(output[2]).toContain('13/01/2023');
//         expect(output[3]).toContain('10/01/2023');
//         consoleLogSpy.mockRestore();
//     });
});