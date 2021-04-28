


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

function sortedSquaredArray(array) {
    // Write your code here.
      const sortedSquares = new Array(array.length).fill(0)
      let left = 0
      let right = array.length - 1
      
      for(let idx = array.length - 1; idx >= 0; idx--) {
          const leftVal = array[left]
          const rightVal = array[right]
          
          if(Math.abs(leftVal) > Math.abs(rightVal)) {
              sortedSquares[idx] = leftVal ** 2
              left++
          } else {
              sortedSquares[idx] = rightVal ** 2
              right--
          }
      }
      return sortedSquares
  }