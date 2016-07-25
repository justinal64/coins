// Example
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// Prompt user for an ammount
var amount = prompt("How much money do you have?");
amount = parseFloat(amount);

// var amount = .92;
var quarter = 25;
var dime = 10;
var nickle = 5;
var penny = 1;
var numOfCoins = 0;

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

    // This will make it easier to divide by the demoniations
    amount = amount * 100;

    while (amount >= quarter) {
        amount -= quarter; // Subtract quarters from amount
        numOfCoins++;
    }
    coinPurse.quarters = numOfCoins; // Add quarters to array
    numOfCoins = 0; // Reset numOfCoins

    while (amount >= dime) {
        amount -= dime; // Subtract dime from amount
        numOfCoins++;
    }
    coinPurse.dime = numOfCoins; // Add dimes to Array
    numOfCoins = 0;

    while (amount >= nickle) {
        amount -= nickle; // Subtract nickles from amount
        numOfCoins++;
    }
    coinPurse.nickle = numOfCoins; // Add nickles to array
    numOfCoins = 0;

    while (amount >= penny) {
        amount -= penny; // Subtract pennies from amount
        numOfCoins++;
    }
    coinPurse.penny = numOfCoins;
    numOfCoins = 0;

  return coinPurse;
}


var coins = coinCounter()
console.log(coins);
