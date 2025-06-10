//start loop from base case
/*return became continue and
 if there is a value saved in dp array and continue*/
//remove memo statement
//recusive to dp array

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array(m + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (text1[i] == text2[j]) {
        dp[i][j] = 1 + (i + 1 < m && j + 1 < n ? dp[i + 1][j + 1] : 0);
        continue;
      } else {
        dp[i][j] = Math.max(
          i + 1 < m ? dp[i + 1][j] : 0,
          j + 1 < n ? dp[i][j + 1] : 0
        );
        continue;
      }
    }
  }

  return dp[0][0];
};
console.log(longestCommonSubsequence("abcdezrtf", "acezrtf"));
console.log(longestCommonSubsequence("abcdezrtfttttrrr", "yyyyyytotototo"));
