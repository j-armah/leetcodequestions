/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

constant space

 */

var reverseString = function(s) {
    let left = 0
    let right = s.length - 1
    
    while(left < right){
        let temp = s[right]
        s[right] = s[left]
        s[left] = temp
        left++
        right--
    }
};