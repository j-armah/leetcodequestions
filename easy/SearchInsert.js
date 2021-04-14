/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let idx = null;
    
    if(nums.indexOf(target) >= 0) return nums.indexOf(target)
    if(target < nums[0]) return 0
    if(target > nums[nums.length-1]) return nums.length
    
    for(let i=0; i < nums.length; i++){
        if(nums[i] < target && nums[i+1] > target) {
            return i+1
        }
    }
};