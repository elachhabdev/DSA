var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array(m + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  return longestCommonSubsequenceRec(text1, text2, 0, 0, dp);
};
var longestCommonSubsequenceRec = function (text1, text2, i, j, memo) {
  if (i == text1.length || j == text2.length) return 0;

  let key = `${i},${j}`;

  if (memo[i][j] != -1) return memo[i][j];

  if (text1[i] == text2[j]) {
    memo[i][j] =
      1 + longestCommonSubsequenceRec(text1, text2, i + 1, j + 1, memo);
  } else {
    memo[i][j] = Math.max(
      longestCommonSubsequenceRec(text1, text2, i + 1, j, memo),
      longestCommonSubsequenceRec(text1, text2, i, j + 1, memo)
    );
  }

  return memo[i][j];
};
