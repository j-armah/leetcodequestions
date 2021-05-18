/*
https://www.algoexpert.io/questions/Three%20Number%20Sum

*/

function threeNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a, b) => a - b)
      // console.log(array)
      let results = []
      
      for(let i=0; i < array.length; i++){
          let currentNum = array[i]
          let left = i+1 
          let right = array.length - 1
          
          while(left < right){
              // console.log(left, right)
              let sum = currentNum + array[left] + array[right]
              if(sum === targetSum) {
                  results.push([currentNum, array[left], array[right]])
                  right--
                  left++
              } else if(sum > targetSum){
                  right--
              } else {
                  left++
              }
          }
      }
      
      return results
}