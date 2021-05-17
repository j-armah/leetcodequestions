/**
 https://www.algoexpert.io/questions/Selection%20Sort
 */

 function selectionSort(array) {
    // Write your code here.
  
      let pointer = 0
      while(pointer < array.length - 1){
          let smallest = pointer
          for(let i = pointer + 1; i < array.length; i++){
              if(array[smallest] > array[i]) smallest = i
          }
          let tmp = array[smallest]
          array[smallest] = array[pointer]
          array[pointer] = tmp
          pointer++
      }
      
      return array
  }