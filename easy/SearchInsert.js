/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Binary Search Solution !!
// O(logn)
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid;
    
    while(start <= end) {
        mid = Math.floor((start+end)/2);
        
        if(nums[mid] === target) return mid;
        
        if(nums[mid] > target) end = mid-1;
        else start = mid+1;
    }
    return start;
};


// Simple solution O(n)
/**
 * if currrent number in looop is greater than or equal to target
 * return i (index)
 * 
 * Duh *facepalm*
 */

var searchInsert = function(nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        let cur = nums[i];
        if (cur >= target) {
            return i;
        };
    };
    return length;
};

// My solution - convoluted
var searchInsert = function(nums, target) {
    // This is O(n), Can be done O(logn)
    if(nums.indexOf(target) >= 0) return nums.indexOf(target)
    if(target < nums[0]) return 0
    if(target > nums[nums.length-1]) return nums.length
    
    for(let i=0; i < nums.length; i++){
        if(nums[i] < target && nums[i+1] > target) {
            return i+1
        }
    }
};