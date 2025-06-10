var maxProfit = function (prices) {
  let sell = 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[sell] >= prices[i]) {
      sell = i;
    }
    profit = Math.max(profit, prices[i] - prices[sell]);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1, 10]));
