// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

//Example
//Input: accounts = [[1,5],[7,3],[3,5]]
//Output: 10
//Explanation: 
//1st customer has wealth = 6
//2nd customer has wealth = 10 
//3rd customer has wealth = 8
//The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function(accounts) {
  totals = [];

  for(i = 0; i < accounts.length; i++) {
    var accountTotal = accounts[i].reduce(function(a, b){
      return a + b;
    }, 0);

    totals.push(accountTotal);
  }

  answer = totals.reduce(function(a,b){
    return Math.max(a,b);
  });

  return answer;
    
};

maximumWealth([[1,2,3],[3,2,1]]); 