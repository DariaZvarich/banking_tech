const StatementFormatter = require('./statementFormatter');
const {Transaction} = require('./bank')

describe('StatementFormatter', () => {
    
    it('Should have a header', () => {
        const statement = new StatementFormatter().format([])
        expect(statement).toBe('date  || credit  || debit  || balance')

    });

    it('Should display a credit transaction', () => {
        const transactions = [
            new Transaction({date: new Date("2020-01-01"), amount :10.0, type:"credit", balance:10.0})
        ]
        const statement = new StatementFormatter().format(transactions)
        expect(statement).toBe('date  || credit  || debit  || balance' + '\n' + "01/01/2020  || 10.00  ||   || 10.00")
    });

    it('Should display a debit transaction', () => {
        const transactions = [
            new Transaction({date: new Date("2020-01-01"), amount :10.0, type:"debit", balance:10.0})
        ]
        const statement = new StatementFormatter().format(transactions)
        expect(statement).toBe('date  || credit  || debit  || balance' + '\n' + "01/01/2020  ||   || 10.00  || 10.00")
    });

    it('Should display a debit transaction', () => {
        const transactions = [
            new Transaction({date: new Date("2020-01-01"), amount :10.0, type:"debit", balance:10.0}),
            new Transaction({date: new Date("2020-01-01"), amount :10.0, type:"credit", balance:10.0})
            
        ]
        const statement = new StatementFormatter().format(transactions)
        expect(statement).toBe('date  || credit  || debit  || balance' + '\n' + "01/01/2020  ||   || 10.00  || 10.00" + '\n' + "01/01/2020  || 10.00  ||   || 10.00")
    });
});