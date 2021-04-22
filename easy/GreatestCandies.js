/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * 
 * 
 * Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
 */


// My Solution

var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies) // O(n)
    let arr = []
    
    for(let i=0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    
    return arr
};

// Using map

const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
  };


  // One liner

  const kidsWithCandies = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);
