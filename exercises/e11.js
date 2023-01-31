// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
    const totalWithdrawal = [];
    for(let i = 0 ; i < array.length; i++){
      if(array[i].withdrawals){
        const sum = array[i].withdrawals.reduce((acc, val) => acc + val, 0);
        totalWithdrawal.push(sum);
      } else {
        totalWithdrawal.push(0)
      }
    }
    return totalWithdrawal;
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
