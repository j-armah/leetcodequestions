/*

*/


// O(n^2) brute force
var maxSubArray = function(nums) {
    let maxSubSum = -Infinity
    
    for(let i=0; i < nums.length;i++){
        let runningSum = 0
        for(j=i; j < nums.length; j++){
            runningSum += nums[j]
            
            maxSubSum = Math.max(maxSubSum, runningSum)
        }
    }
    
    return maxSubSum
};

// O(n) Kadane's Algo

var maxSubArray = function(nums) {
    let maxSoFar = nums[0]
    let maxEndingHere = nums[0]
    
    for(let i=0; i < nums.length; i++){
        
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    
    return maxSoFar
};
