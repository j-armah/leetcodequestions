/*
27. Remove Element


*/


// My solution

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let right = nums.length-1
    let left = 0
    let targetCount = 0
    
    if (nums.length === 1 && nums[0] === val) return([])
    
    while (left <= right) {
        if (nums[left] === val) {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            right --
            targetCount++
        } else {
            left ++
        }        
    }
    
    
    if (targetCount === nums.length) return []
    console.log(nums.splice(nums.length - targetCount, nums.length-1))
};


