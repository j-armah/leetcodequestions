/*


https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

1365. How Many Numbers Are Smaller Than the Current Number

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

*/



// My solution 

var smallerNumbersThanCurrent = function(nums) {
    let array = []
    
    let count = 0
    for (let i=0; i < nums.length; i++) {
        for(let j=0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count += 1
            }
        }
        array.push(count)
        count = 0
    }
    return array
};