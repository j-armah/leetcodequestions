


// Solution 1
// T = O(nlogn) S = O(n)

function sortedSquaredArray(array) {
    // Write your code here.
    let output = array.map(num => num ** 2)
      
    return output.sort((a, b) => a - b);
  }


// Solution 2
// T = O(n) S = O(n)

function sortedSquaredArray(array) {
    // Write your code here.
      let output = []
      let left = 0
      let right = array.length-1
      
      while(left <= right){
          let leftVal = array[left]
          let rightVal = array[right]
          if(Math.abs(leftVal) > Math.abs(rightVal)) {
              output.unshift(leftVal**2)
              left++
          } else {
              output.unshift(rightVal**2)
              right--
          }
      }
      return output
  }

// AE solution

