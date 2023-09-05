Banking Tech test
-----------------

 # 1 Approached designing solution to the problem.

    ## 1. Describe the Problem:
    
    ## 2. Design the Class and Methods:



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

 