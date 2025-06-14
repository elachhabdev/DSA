var unBoundedKnapsack = function (capacity, profits, weights) {
  const memo = Array(profits.length + 1)
    .fill(-1)
    .map(() => Array(capacity + 1).fill(-1));

  return unBoundedKnapsackRec(capacity, profits, weights, 0, memo);
};

var unBoundedKnapsackRec = function (
  capacity,
  profits,
  weights,
  currentIndex,
  memo
) {
  if (capacity < 0) return Number.NEGATIVE_INFINITY;

  if (capacity == 0) return 0;

  if (currentIndex >= profits.length) return 0;

  if (memo[currentIndex][capacity] != -1) return memo[currentIndex][capacity];

  let current =
    unBoundedKnapsackRec(
      capacity - weights[currentIndex],
      profits,
      weights,
      currentIndex,
      memo
    ) + profits[currentIndex];

  let next = unBoundedKnapsackRec(
    capacity,
    profits,
    weights,
    currentIndex + 1,
    memo
  );

  memo[currentIndex][capacity] = Math.max(current, next);

  return memo[currentIndex][capacity];
};

console.log(unBoundedKnapsack(3, [1, 1], [2, 1]));
console.log(unBoundedKnapsack(8, [6, 1, 7, 7], [1, 3, 4, 5]));
