/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

var maxProfit = function(prices) {
    //brute force 
    // let max = 0
    
    // for(let i=0; i < prices.length; i++){
    //     const price = prices[i]
    //     for(let j=i+1; j < prices.length; j++){
    //         const profit = prices[j] - price
    //         if(profit > max) max = profit
    //     }
    // }
    
    // return max
    

    // Kadane's Algo
    let min = Infinity
    let max = 0
    
    for(let i=0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    
    return max
};