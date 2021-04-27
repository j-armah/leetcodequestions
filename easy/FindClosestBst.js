
// https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST

// Iteration O(logn) time | O(1) space
function findClosestValueInBst(tree, target) {
    // Write your code here.
      // console.log(tree)
      return findClosestValueInBstHelper(tree, target, tree.value)
      
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      let currentNode = tree
      
    //   console.log(target, closest,currentNode.value)
      while (currentNode !== null) {
          if(Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
              closest = currentNode.value
          }
          if(target < currentNode.value) {
              currentNode = currentNode.left
          } else if(target > currentNode.value){
              currentNode = currentNode.right
          } else {
              break
          }
      }
      
      return closest
  }