var isIsomorphic = function (s, t) {
  let mapT = new Map();
  let mapS = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in mapS)) {
      mapS[s[i]] = t[i];
      mapT[t[i]] = s[i];
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (mapT[t[i]] != s[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("far", "boo"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
