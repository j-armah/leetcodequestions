/**
 * 
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 
https://leetcode.com/problems/implement-strstr/
*/

//My solution
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    
    return haystack.search(needle)
 };

 // Uses JS built in method search, but there should be a way to write it out

 const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
      if (haystack[i] === needle[0]) {                // as soon as we see a character that matches the first character of needle
        for (let j = 0; j < needle.length; j++) {     // start looping through both needle and haystack
          if (needle[j] !== haystack[i + j]) {        // as soon as the characters don't match
            break;                                    // break out of the loop and return to looping through haystack
          } else if (j === needle.length - 1){        // otherwise, if we looped through the entire needle and all of the characters matched
            return i;                                 // return the index of the first character of haystack with which we started the loop
          }
        }
      }
    }
    
    return -1;                                        // return -1 if there wasn't a match
  };