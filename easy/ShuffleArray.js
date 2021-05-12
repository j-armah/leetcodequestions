/**
 * 
 * 
 */

// My sol o(n) time o(n) space
 var shuffle = function(nums, n) {
    let pointer1 = 0
    let pointer2 = n
    let result = []
    while(pointer1 < n && pointer2 < nums.length){
        result.push(nums[pointer1])
        pointer1++
        result.push(nums[pointer2])
        pointer2++
    }
    
    return result
};

// Other sol

var shuffle = function(nums, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i],nums[i+n]);
    }
    return res;
};