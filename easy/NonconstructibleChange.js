/*
https://www.algoexpert.io/questions/Non-Constructible%20Change
*/

function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort((a, b) => a - b)
    if(coins.length === 0) return 1
      
      let change = 0
      if(coins[0] !== 1) return 1
      
      
      for(let i=0; i < coins.length; i++){
          let coin = coins[i]
          if(coin > change + 1){
              return change + 1
          } else {
              change += coin
          }
      }
      
      return change + 1
  }