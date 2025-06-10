var minCostClimbingStairs = function (cost) {
  let memo = {};
  return Math.min(
    minCostClimbingStairsRec(cost, 0, memo),
    minCostClimbingStairsRec(cost, 1, memo)
  );
};
var minCostClimbingStairsRec = function (cost, i, memo) {
  if (i in memo) return memo[i];
  if (cost.length - 1 - i < 0) return 0;

  memo[i] = Math.min(
    minCostClimbingStairsRec(cost, i + 2, memo) + cost[i],
    minCostClimbingStairsRec(cost, i + 1, memo) + cost[i]
  );
  return memo[i];
};

var minCostClimbingStairsTabulation = function (cost) {
  let dp = new Array(cost.length + 1).fill(0);

  for (let i = cost.length - 1; i >= 0; i--) {
    dp[i] =
      Math.min(
        i + 1 < cost.length ? dp[i + 1] : 0,
        i + 2 < cost.length ? dp[i + 2] : 0
      ) + cost[i];
  }

  return Math.min(dp[0], dp[1]);
};

console.log(
  minCostClimbingStairsTabulation([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
);
console.log(minCostClimbingStairsTabulation([10, 15, 20]));
console.log(
  minCostClimbingStairsTabulation([10, 15, 20, 10, 20, 30, 40, 50, 60, 70, 80])
);
