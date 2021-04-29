/**
 * https://www.algoexpert.io/questions/Product%20Sum
 */

function productSum(array, multi=1) {
    // Write your code here.
      let sum = 0
      for(let i=0; i < array.length; i++){
          let item = array[i]
          if(Array.isArray(item)){
              // Call recursively
              sum += productSum(item, multi + 1)
          } else {
              sum += item
          }
      }
      
      return sum * multi
  }