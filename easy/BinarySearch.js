/*

*/

function binarySearch(array, target) {
    // Write your code here.
      let idx = -1
      let start = 0
      let end = array.length-1
      let mid = Math.floor(array.length / 2)
      console.log("mid " + mid)
  
      while(start <= end){
          let mid = Math.floor((end + start) / 2)
          if(array[mid] === target){
              return mid
          } else if(target < array[mid]){
              end = mid - 1
          } else {
              start = mid + 1
          }
      }
      return -1
}