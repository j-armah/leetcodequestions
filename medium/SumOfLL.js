/**
 * 
 * 
 */


// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
      let newLinkedList = new LinkedList(0)
      let currentNode = newLinkedList
      let reversedSum = []
      let firstInt = linkedListToInt(linkedListOne)
      let secondInt = linkedListToInt(linkedListTwo)
      let count = 0
      
      
      let sum = (firstInt + secondInt).toString().split('')
      
      for(let i=sum.length-1; i >= 0; i--){
          reversedSum.push(parseInt(sum[i]))
      }
      
      while(count <= reversedSum.length-1){
          const newNode = new LinkedList(reversedSum[count])
          if(count === 0){
              newLinkedList = newNode
          }
          currentNode.next = newNode
          currentNode = newNode
  
          
          count++
      }
      
      console.log(newLinkedList)
    return newLinkedList;
  }
  
  function linkedListToInt(linkedList){
      let newInt = []
      let newIntRev = []
      let currentNode = linkedList
      while(currentNode){
          newInt.push(currentNode.value)
          
          currentNode = currentNode.next
      }
          
      for(let i=newInt.length-1; i >= 0; i--){
          newIntRev.push(newInt[i])
      }
      
      return parseInt(newIntRev.join(""))
  }
  
  