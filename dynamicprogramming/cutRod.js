var cutRod = function (prices) {
  let capacity = prices.length;

  const memo = Array(prices.length + 1)
    .fill(-1)
    .map(() => Array(capacity + 1).fill(-1));

  return cutRodRec(prices, capacity, 0, memo);
};

var cutRodRec = function (prices, capacity, currentIndex, memo) {
  if (capacity < 0) return Number.NEGATIVE_INFINITY;

  if (capacity == 0) return 0;

  if (currentIndex >= prices.length) return 0;

  if (memo[currentIndex][capacity] != -1) return memo[currentIndex][capacity];

  let current =
    cutRodRec(prices, capacity - (currentIndex + 1), currentIndex, memo) +
    prices[currentIndex];

  let next = cutRodRec(prices, capacity, currentIndex + 1, memo);

  memo[currentIndex][capacity] = Math.max(current, next);

  return memo[currentIndex][capacity];
};

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20]));
console.log(cutRod([3, 5, 8, 9, 10, 17, 17, 20]));
console.log(cutRod([3]));
