var longestCommonSubsequence = function (text1, text2) {
  return longestCommonSubsequenceRec(text1, text2, 0, 0, {});
};
var longestCommonSubsequenceRec = function (text1, text2, i, j, memo) {
  if (i == text1.length || j == text2.length) return 0;

  let key = `${i},${j}`;

  if (key in memo) return memo[key];

  if (text1[i] == text2[j]) {
    memo[key] =
      1 + longestCommonSubsequenceRec(text1, text2, i + 1, j + 1, memo);
  } else {
    memo[key] = Math.max(
      longestCommonSubsequenceRec(text1, text2, i + 1, j, memo),
      longestCommonSubsequenceRec(text1, text2, i, j + 1, memo)
    );
  }

  return memo[key];
};

console.log(longestCommonSubsequence("abcdezrtf", "acezrtf"));
console.log(longestCommonSubsequence("abcdezrtfttttrrr", "yyyyyytotototo"));
