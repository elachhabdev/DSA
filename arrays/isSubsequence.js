var isSubsequence = function (s, t) {
  let currentIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[currentIndex]) {
      currentIndex++;
    }
  }
  return currentIndex == s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("axc", "aecx"));
