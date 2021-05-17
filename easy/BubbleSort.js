/* 
https://www.algoexpert.io/questions/Bubble%20Sort
*/

function bubbleSort(array) {
    // Write your code here.
      let isSorted = false
      while(!isSorted){
          isSorted = true
          for(let i=0; i < array.length; i++){
              if(array[i] > array[i+1]){
                  let tmp = array[i+1]
                  array[i+1] = array[i]
                  array[i] = tmp
                  isSorted = false
              } 
          }
      }
      return array
  }