var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!(t[i] in map)) return false;
    map[t[i]]--;
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] != 0) return false;
  }

  return true;
};
