var coinChange = function (coins, amount) {
  let minCoins = coinChangeRec(coins, amount, {});

  return minCoins == Number.POSITIVE_INFINITY ? -1 : minCoins;
};
var coinChangeRec = function (coins, amount, memo) {
  if (amount in memo) return memo[amount];

  if (amount < 0) return Number.POSITIVE_INFINITY;
  if (amount == 0) return 0;

  let minCoins = Number.POSITIVE_INFINITY;

  for (let i = 0; i < coins.length; i++) {
    let totalCoins = 0;
    totalCoins += coinChangeRec(coins, amount - coins[i], memo) + 1;

    minCoins = Math.min(totalCoins, minCoins);
  }

  memo[amount] = minCoins;

  return memo[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
