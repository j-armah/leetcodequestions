/**
 * https://www.algoexpert.io/questions/Validate%20Subsequence
 */

// My Sol

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let idx = 0
      
      for(let i=0; i < array.length; i++) {
          if(array[i] === sequence[idx]) {
              idx++
          }
      }
      
      console.log(idx)
      return idx === sequence.length
}