const countingChange = (amount, coins) => {
  let coinsMin = countingChangeMemo(amount, coins, 0, {});

  return coinsMin == Number.POSITIVE_INFINITY ? -1 : coinsMin;
};
const countingChangeMemo = (amount, coins, i, memo) => {
  let key = `${amount},${i}`;

  if (key in memo) return memo[key];
  if (amount == 0) return 1;

  let counts = 0;

  for (let qty = 0; qty * coins[i] <= amount; qty++) {
    counts += countingChangeMemo(amount - coins[i] * qty, coins, i + 1, memo);
  }

  memo[key] = counts;

  return memo[key];
};

console.log(countingChange(4, [1, 2, 3]));
