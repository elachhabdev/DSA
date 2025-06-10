var climbStairs = function (n) {
  return climbStairsRec(n, {});
};

const climbStairsRec = (n, memo) => {
  if (n in memo) return memo[n];

  if (n == 0) return 1;
  if (n < 0) return 0;

  memo[n] = climbStairsRec(n - 1, memo) + climbStairsRec(n - 2, memo);

  return memo[n];
};

var climbStairsTabulation = function (n) {
  let dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(30));
console.log(climbStairsTabulation(30));
