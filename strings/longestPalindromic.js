var longestPalindromeBrute = function (s) {
  let longest = Number.NEGATIVE_INFINITY;
  let c = 0;
  let longestPalin = s[0];
  let memo = {};

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        c = j;

        let t = s.slice(i, c + 1);

        if (t in memo) continue;

        memo[t] = t;

        if (palindrome(t)) {
          if (longest < t.length) longestPalin = t;
          longest = Math.max(longest, t.length);
        }
      }
    }
  }
  return longestPalin;
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

var longestPalindromeRec = function (s, longest, memo) {
  if (s.length == 0) return [];

  if (s.length == 1) return [];

  if (s in memo) return memo[s];

  if (palindrome(s)) {
    if (longest.length == 0 || longest[0].length < s.length) {
      longest[0] = s;
    }
  }

  longestPalindromeRec(s.slice(1), longest, memo);
  longestPalindromeRec(s.slice(0, s.length - 1), longest, memo);

  memo[s] = longest;

  return longest;
};

var longestPalindrome = function (s) {
  let longest = [];

  longestPalindromeRec(s, longest, {});

  return longest.length == 0 ? s[0] : longest[0];
};
console.log(longestPalindrome("babaabcca"));
console.log(longestPalindrome("cbbdbaaaab"));
console.log(longestPalindrome("bbbbbaabaab"));
console.log(longestPalindrome("abcde"));
