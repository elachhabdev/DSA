var minOperations = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;

  const memo = Array(m + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  var longestCommonSubsequence = longestCommonSubsequenceRec(
    s1,
    s2,
    0,
    0,
    memo
  );

  let deletions = m - longestCommonSubsequence;
  let insertions = n - longestCommonSubsequence;

  return deletions + insertions;
};
var longestCommonSubsequenceRec = (s1, s2, i, j, memo) => {
  if (i == s1.length || j == s2.length) return 0;

  if (memo[i][j] != -1) return memo[i][j];

  if (s1[i] == s2[j]) {
    memo[i][j] = 1 + longestCommonSubsequenceRec(s1, s2, i + 1, j + 1, memo);
  } else {
    memo[i][j] = Math.max(
      longestCommonSubsequenceRec(s1, s2, i + 1, j, memo),
      longestCommonSubsequenceRec(s1, s2, i, j + 1, memo)
    );
  }

  return memo[i][j];
};

console.log(minOperations("heap", "pea"));
