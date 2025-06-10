const maxPalinSubsequence = (str) => {
  return maxPalinSubsequenceMemo(str, {});
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

const maxPalinSubsequenceMemo = (str, memo) => {
  if (str in memo) {
    return memo[str];
  }
  if (str.length == 0) return 0;
  if (palindrome(str)) return str.length;

  let count = 0;

  if (str[0] != str[str.length - 1]) {
    count = Math.max(
      count,
      maxPalinSubsequenceMemo(removeCharAt(str, 0), memo)
    );

    count = Math.max(
      count,
      maxPalinSubsequenceMemo(removeCharAt(str, str.length - 1), memo)
    );
  } else {
    count = Math.max(
      count,
      maxPalinSubsequenceMemo(str.slice(1, str.length - 1), memo) + 2
    );
  }

  memo[str] = count;

  return count;
};
const removeCharAt = (str, index) => {
  if (index < 0 || index >= str.length) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + 1);
};
console.log(maxPalinSubsequence("luwxult"));
/* console.log(maxPalinSubsequence("chartreusepugvicefree"));
 */
