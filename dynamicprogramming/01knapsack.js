const knapsack01 = (capacity, profits, weights) => {
  const memo = Array(profits.length + 1)
    .fill(-1)
    .map(() => Array(capacity + 1).fill(-1));

  return knapsack01Rec(capacity, profits, weights, 0, memo);
};
const knapsack01Rec = (capacity, profits, weights, currentIndex, memo) => {
  if (capacity < 0) {
    return Number.NEGATIVE_INFINITY;
  }
  if (capacity == 0) {
    return 0;
  }
  if (currentIndex >= profits.length) {
    return 0;
  }

  if (memo[currentIndex][capacity] != -1) {
    return memo[currentIndex][capacity];
  }

  let takeIt =
    knapsack01Rec(
      capacity - weights[currentIndex],
      profits,
      weights,
      currentIndex + 1,
      memo
    ) + profits[currentIndex];

  let leaveIt = knapsack01Rec(
    capacity,
    profits,
    weights,
    currentIndex + 1,
    memo
  );

  memo[currentIndex][capacity] = Math.max(leaveIt, takeIt);

  return memo[currentIndex][capacity];
};

console.log(knapsack01(4, [1, 2, 3], [4, 5, 1]));
console.log(knapsack01(3, [1, 2, 3], [4, 5, 6]));
console.log(knapsack01(3, [1, 2, 3], [4, 5, 6]));
console.log(knapsack01(5, [10, 40, 30, 50], [5, 4, 2, 3]));
