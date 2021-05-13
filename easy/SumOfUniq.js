/*
https://leetcode.com/problems/sum-of-unique-elements/submissions/

*/

var sumOfUnique = function(nums) {
    let sum = 0
    let hash = {}
    
    for(let i=0; i < nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
    
    let keys = Object.keys(hash)
    
    for(let i=0; i < keys.length; i++){
        if(hash[keys[i]] === 1){
            // console.log(keys[i])
            sum += parseInt(keys[i])
        }
    }
    
    console.log(sum)
    return sum
};