class StatementFormatter{

    constructor() {
        this.header = 'date  || credit  || debit  || balance'
        this.spacer = '  || '
    }

    format(transactions) {
        let formattedTransactions = []
        const header = 'date  || credit  || debit  || balance';
        for (const transaction of transactions) {
            formattedTransactions.push(this.formatLine(transaction))
        }
        return [header, ...formattedTransactions].join('\n')
    }

    formatLine(transaction) {
        const formattedDate = transaction.date.toLocaleDateString();
        const formattedCredit = transaction.type === 'credit' ? `${transaction.amount.toFixed(2)}`: ''
        const formattedDebit = transaction.type === 'debit' ? `${transaction.amount.toFixed(2)}`: ''
        const formattedBalance = `${transaction.balance.toFixed(2)}`
        return [`${formattedDate}`, formattedCredit, formattedDebit, formattedBalance].join(this.spacer)
    }
}

module.exports = StatementFormatter