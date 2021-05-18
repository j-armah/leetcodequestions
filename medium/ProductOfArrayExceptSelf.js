/*
https://leetcode.com/problems/product-of-array-except-self/

https://www.algoexpert.io/questions/Array%20Of%20Products

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/
// Brute force O(n^2)

function arrayOfProducts(array) {
    // Write your code here.
      // Brute force O(n^2) - BAD
      const results = []
      
      for(let i=0; i < array.length; i++){
          let result = 1
          for(let j=0; j < array.length; j++){
              if(i !== j){
                  result *= array[j]
              }
          }
          results.push(result)
      }
      
      return results
}

// O(n)

function arrayOfProducts(array) {
    // Write your code here.
      const products = new Array(array.length).fill(1)
      
      let leftProduct = 1
      for(let i=0; i < array.length;i++){
          products[i] = leftProduct
          leftProduct *= array[i]
      }
      
      
      let rightProduct = 1
      for(let i=array.length-1; i >= 0; i--){
          products[i] *= rightProduct
          rightProduct *= array[i]
      }
      
      return products
  }