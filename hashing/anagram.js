const anagrams = (s1, s2) => {
  let hash = new Map();

  if (s1.length != s2.length) return false;

  for (let c of s1) {
    if (hash.has(c)) {
      hash.set(c, hash.get(c) + 1);
    } else {
      hash.set(c, 1);
    }
  }

  for (let c of s2) {
    if (hash.has(c)) {
      hash.set(c, hash.get(c) - 1);
    }
  }

  for (let c of s1) {
    if (hash.get(c) != 0) return false;
  }

  return true;
};

console.log(anagrams("restful", "fluster"));
