/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 * 
 */


 var longestCommonPrefix = function(strs) {

    for(let i=0; i < strs[0].length; i++){
        for(let string of strs){
            if(string[i] !== strs[0][i]) {
                return string.slice(0, i)
            }
        }
    }
    
    return strs[0]
};