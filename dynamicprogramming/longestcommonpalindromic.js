var longestPalindrome = (s) => {
  let n = s.length;

  const dp = Array(n + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  return longestPalindromeRec(s, 0, s.length - 1, dp);
};

var longestPalindromeRec = (s, i, j, memo) => {
  if (s.length == 0) return "";

  if (memo[i][j] != -1) return memo[i][j];

  let currentString = s.slice(i, j + 1);

  if (palindrome(currentString)) {
    return currentString;
  }

  let right = longestPalindromeRec(s, i, j - 1, memo);
  let left = longestPalindromeRec(s, i + 1, j, memo);

  if (left.length < right.length) {
    memo[i][j] = right;
  } else {
    memo[i][j] = left;
  }

  return memo[i][j];
};

const palindrome = (string) => {
  if (string.length == 1 || string.length == 0) {
    return true;
  }

  if (string[0] == string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
};

var longestPalindromeTabulation = (s) => {
  let n = s.length;
  const dp = Array(n + 1)
    .fill("")
    .map(() => Array(n + 1).fill(""));

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i > j) {
        dp[i][j] = "";
        continue;
      }

      let currentString = s.slice(i, j + 1);

      if (palindrome(currentString)) {
        dp[i][j] = currentString;
        continue;
      }
      let right = j - 1 >= 0 ? dp[i][j - 1] : "";
      let left = i + 1 < n ? dp[i + 1][j] : "";

      if (left.length < right.length) {
        dp[i][j] = right;
        continue;
      } else {
        dp[i][j] = left;
        continue;
      }
    }
  }

  console.log(dp);

  return dp[n - 1][0];
};

/* console.log(longestPalindromeTabulation("babaabcca"));
console.log(longestPalindromeTabulation("cbbdbaaaab"));
console.log(longestPalindromeTabulation("bbbbbaabaab"));
console.log(longestPalindromeTabulation("abcde")); */
console.log(longestPalindromeTabulation("abaab"));
