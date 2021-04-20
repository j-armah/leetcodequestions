/**
 * https://www.algoexpert.io/questions/Palindrome%20Check
 * 
 * 
 * 
 */
// T = O(n) S = O(n)

function isPalindrome(string) {
    // Write your code here.
      let reverse = []
      
      for(let i = string.length - 1; i >= 0; i--) {
          reverse.push(string[i])
      }
      
      return reverse.join('') === string
  }
  

// T = O(n^2) S = O(n)
 function isPalindrome(string) {
    // Write your code here.
      let arr = string.split('')
      let reverse = ''
      
      for(let i=string.length-1; i >= 0; i--) {
          reverse += arr[i]
      }
      
      return reverse === string
  }