var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("a", "ab"));
