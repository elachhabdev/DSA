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

console.log(palindrome("rkak"));
