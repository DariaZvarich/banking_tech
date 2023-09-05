Banking Tech test
-----------------

 # 1 Approached designing solution to the problem.

    ## 1. Describe the Problem:

        Create a simplified banking application that allows for deposits, withdrawals, and statement printing in a table format. 
        It should handle errors, maintain transaction history, and serve as a coding exercise or assessment tool.

    ## 2. Design the Class and Methods:

        * Constructor
            Parameters: None
            Description: Initializes an instance of the Banking class with an empty array to store transactions.

        * deposit Method
            Parameters: amount(Number): The amount to be deposited.
                        date(String): The date of the deposit in the format 'dd/mm/yyyy'.
            Return Value: None
            Description: Adds a deposit transaction to the transaction history. Validates the amount and date. Updates the balance.

        * withdraw Method
            Parameters: amount (Number): The amount to be withdrawn.
                        date (String): The date of the withdrawal in the format 'dd/mm/yyyy'.
            Return Value: None
            Description: Adds a withdrawal transaction to the transaction history. Validates the amount, checks for insufficient balance, and updates the balance.

        * calculateBalance Method
            Parameters: None
            Return Value: Number
            Description: Calculates and returns the current account balance based on the transaction history.

        * getTransactions Method
            Parameters: None
            Return Value: Array of Objects
            Description: Returns an array containing all the transaction objects in the transaction history.

        * printStatement Method
            Parameters: None
            Return Value: None
            Description: Prints the account statement in a table format, including date, credit, debit, and balance for each transaction.

        * validDate Method
            Parameters:
            date (String): The date to be validated.
            Return Value: Boolean
            Description: Validates if the provided date is in the correct format 'dd/mm/yyyy'.

 # 2 Description of the code structure.

    ## 1. Main class: Banking
        * the core of the program is the 'Banking' class, which represents a bank account. This class has methods for depositing, withdrawing and calculating the account balance.

    ## 2. Custom Error class
        * I have defined a custom error classes called 'InvalidDepositAmount', 'InvalidDateFormat', 'InvalidWithdrawalAmount', 'InsufficientBalance' that extends the build-in Error class.

    ## 3. Transaction history
        * Transaction History in a Bamking class is an array used to store the history of all transactions made by user. Each transaction is an object with properties like date, credit(deposit), debit(withdrawals) and balance.


    ## 4. Methods for Banking Operations

        * The deposit method allows user(clients) to deposit money into the account. It takes the amount and date as arguments and records the transaction in the transaction history.

        * The withdraw method enables clients to withdraw money from the account. It also records the transaction details.

        * The calculateBalance method calculates the current account balance based on the transaction history.

    ## 5. Testing: Jest

        * I have choosen Jest testing framework for writing and running tests. 

        * In my testing file bank.test.js i tested various aspects of the program, including deposit, withdrawal, balance calculation, error handling, store and retrieve transaction history, should reject invalid dates in transactions and print the account statement in a table format.


 # 3 Description how to install and run code and tests.

    ## 1. Code installation:
        * code projec trepository to your local machine:

            `git clone https://github.com/DariaZvarich/banking_tech.git`
            `cd banking_tech `
            
        * Install:

            `npm install `

     ## 2. Run tests:

            `npm test`

    ## 3. Run code:
         * open a node instance : `node`
         * load the banking class `.load lib/bank.js`
         * try to use the methods on the class



 # 4 Screenshots of running app.

 Look in the folder screenshots