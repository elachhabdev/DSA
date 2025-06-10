const minChange = (amount, coins) => {
  let coinsMin = minChangeMemo(amount, coins, {});

  return coinsMin == Number.POSITIVE_INFINITY ? -1 : coinsMin;
};
const minChangeMemo = (amount, coins, memo) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Number.POSITIVE_INFINITY;
  if (amount == 0) return 0;

  let counts = [];

  for (let coin of coins) {
    if (amount - coin < 0) continue;

    counts.push(minChangeMemo(amount - coin, coins, memo) + 1);
  }

  memo[amount] = Math.min(...counts);

  return memo[amount];
};

console.log(minChange(8, [1, 5, 6, 12], {}));
console.log(minChange(13, [1, 9, 5, 14, 30], {}));
console.log(minChange(271, [10, 8, 265, 24], {}));
