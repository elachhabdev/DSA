var longestRepeatingSubsequenceTab = function (text1) {
  const m = text1.length;
  const n = text1.length;

  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] == text1[j - 1] && i != j) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

var longestRepeatingSubsequence = function (text1) {
  const m = text1.length;
  const n = text1.length;

  const memo = Array(m + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  return longestRepeatingSubsequenceRec(text1, 0, 0, memo);
};

var longestRepeatingSubsequenceRec = function (text1, i, j, memo) {
  if (i == text1.length || j == text1.length) return 0;

  if (memo[i][j] != -1) return memo[i][j];

  if (text1[i] == text1[j] && i != j) {
    memo[i][j] = 1 + longestRepeatingSubsequenceRec(text1, i + 1, j + 1, memo);
  } else {
    memo[i][j] = Math.max(
      longestRepeatingSubsequenceRec(text1, i + 1, j, memo),
      longestRepeatingSubsequenceRec(text1, i, j + 1, memo)
    );
  }

  return memo[i][j];
};

console.log(longestRepeatingSubsequence("axxzxxz"));
console.log(longestRepeatingSubsequence("axxzxxz"));
