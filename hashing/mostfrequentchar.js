const mostFrequentChar = (s) => {
  let max = Number.NEGATIVE_INFINITY;
  let hash = new Map();

  for (let c of s) {
    if (hash.has(c)) {
      hash.set(c, hash.get(c) + 1);
    } else {
      hash.set(c, 1);
    }
    max = Math.max(max, hash.get(c));
  }

  for (let c of s) {
    if (hash.get(c) == max) return c;
  }

  return max;
};
console.log(mostFrequentChar("mississippi"));
