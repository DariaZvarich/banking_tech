1. Transaction Class:
    - This class represents individual transactions within the banking system. It contains the following properties:

        * date (Date): Represents the date of the transaction.
        
        * type (String): Indicates the type of transaction, which can be either 'credit' or 'debit'.

        * amount (Number): Represents the transaction amount, which can be a positive number for 
                            deposits (credit) or withdrawals (debit).

        * balance (Number): Represents the updated account balance after the transaction. It reflects 
                            the balance in the account after this particular transaction has been applied.


                            
2. TransactionManager Class:
    - This class manages the bank transactions and calculates balances. It includes the following methods:

        * Constructor:
            - Parameters: None
        * deposit Method:
            - Parameters:   - amount (Number): The amount to be deposited.
                            - date (String): The date of the deposit in the format 'dd/mm/yyyy'.
            - Return Value: None
            - Description:  Adds a deposit transaction to the transaction history. 
                            Validates the amount and date. Updates the balance.

        * withdraw Method:
            - Parameters:   - amount (Number): The amount to be withdrawn.
                            - date (String): The date of the withdrawal in the format 'dd/mm/yyyy'.
            - Return Value: None
            - Description: Adds a withdrawal transaction to the transaction history. 
                            Validates the amount, checks for insufficient balance, and updates the balance.

        * calculateBalance Method:
            - Parameters: None
            - Return Value: Number
            - Description: Calculates and returns the current account balance based on the transaction history.

        * getTransactions Method:
            - Parameters: None
            - Return Value: Array of Objects
            - Description: Returns an array containing all the transaction objects in the transaction history.

        * printStatement Method:
            - Parameters: None
            - Return Value: None
            - Description: Prints the account statement in a table format, including date, credit, debit, and balance for each transaction.

        * validDate Method:
            - Parameters:   - date (String): The date to be validated.
            - Return Value: Boolean
            - Description: Validates if the provided date is in the correct format 'dd/mm/yyyy'.



3. StatementFormatter Class:
    - This class is responsible for formatting the transaction history into a readable statement format. It includes the following methods:

        * Constructor:
            - Parameters: None
            - Description: Initializes an instance of the StatementFormatter class.

        * format Method:
            - Parameters:   - transactions (Array of Transaction Objects): 
                              The transaction history to be formatted.
            - Return Value: String
            - Description: Formats the transaction history into a table format, including date, credit, 
                           debit, and balance for each transaction.

        * formatLine Method:
            - Parameters:
            - transaction (Transaction Object): A single transaction to be formatted.
            - Return Value: String
            - Description: Formats a single transaction into a line of the statement with date, credit, 
                            debit, and balance.
