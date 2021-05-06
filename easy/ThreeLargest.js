/**
 * 
 * 
 */

//Sol 1 o(n) time | o(n) space

function findThreeLargestNumbers(array) {
    // Write your code here.
      let largest = [null, null, null]
      
      for(const num of array) {
          if(num >= largest[2] || !largest[2]){
              largest[0] = largest[1]
              largest[1] = largest[2]
              largest[2] = num
          }
          else if(num >= largest[1] || !largest[1]){
              largest[0] = largest[1]
              largest[1] = num
          }
          else if(num >= largest[0] || !largest[0]){
              largest[0] = num
          }
      }
      
      return largest
  }


  // sol 2 o(n^2)