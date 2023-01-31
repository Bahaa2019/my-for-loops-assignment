// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const clientByLetter = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].name.includes(letter.toUpperCase())){
      clientByLetter.push(array[i].name);
    }else if(array[i].name.includes(letter.toLowerCase())){
      clientByLetter.push(array[i].name);
    }
  }
  return clientByLetter;
 }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
