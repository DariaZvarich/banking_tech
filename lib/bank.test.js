const {TransactionManager, InvalidDepositAmount, InvalidWithdrawalAmount, InsufficientBalance} = require('./bank');
const StatementFormatter = require('./statementFormatter')

describe('TransactionManager', () => {
    let transactionManager;

    beforeEach(() => {
        transactionManager = new TransactionManager(new StatementFormatter());
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

    it('should reject invalid withdrawal amount <0', () => {
        expect(() => transactionManager.deposit(1000))
        expect(() => transactionManager.withdraw(-12)).toThrow(InvalidWithdrawalAmount);
        expect(transactionManager.calculateBalance()).toEqual(0);    
    });

    it('should reject invalid withdrawal amount = 0', () => {
        expect(() => transactionManager.deposit(1000))
        expect(() => transactionManager.withdraw(0)).toThrow(InvalidWithdrawalAmount);
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
        const currentDate = new Date();
        transactionManager.deposit(1000);
        transactionManager.deposit(2000);
        transactionManager.withdraw(500);
        const transactions = transactionManager.getTransactions();
        expect(transactions).toHaveLength(3);
        expect(transactions[0]).toEqual({ date: currentDate, type: 'credit', amount: 1000, balance: 1000});
        expect(transactions[1]).toEqual({ date: currentDate, type: 'credit', amount: 2000, balance: 3000});
        expect(transactions[2]).toEqual({ date: currentDate, type: 'debit', amount: 500, balance: 2500});
    });

//     it("should validate valid date formats in transactions", () => {
//     const mockedDate = new Date('2023-01-10');
//     const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockedDate);

//     expect((transactionManager.deposit(1000)).toThrow(InvalidDateFormat);
//     dateSpy.mockRestore();
//     expect(transactionManager.calculateBalance()).toBe(0);
//   });


    // it('should give me back a time I have mocked', () => {
        // jest.useFakeTimers().setSystemTime(new Date('2020-01-01'))
    //     const currentDate = new Date()
    //     expect(currentDate).toStrictEqual(new Date('2020-01-01'))
    // })
    // TODO: Make sure the transaction manager orders by date when getting transactions
});

