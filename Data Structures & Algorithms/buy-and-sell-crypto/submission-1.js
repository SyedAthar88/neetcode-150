class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }
       let  profit = price - minPrice
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit



    }
}
