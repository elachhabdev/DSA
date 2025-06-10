const quickestConcat = (s, words) => {
  let t = quickedConcatMemo(s, words, {});
  console.log(t == Number.POSITIVE_INFINITY ? -1 : t);
  return t == Number.POSITIVE_INFINITY ? -1 : t;
};
const quickedConcatMemo = (s, words, memo) => {
  if (s in memo) return memo[s];
  if (s.length == 0) return 0;

  let count = Number.POSITIVE_INFINITY;
  for (let word of words) {
    if (!s.startsWith(word)) continue;

    count = Math.min(
      count,
      quickedConcatMemo(s.slice(word.length), words, memo) + 1
    );
  }

  memo[s] = count;

  return count;
};
quickestConcat("caution", ["ca", "ion", "caut", "ut"]);
quickestConcat("caution", ["ion", "caut", "caution"]);
quickestConcat("respondorreact", ["re", "or", "spond", "act", "respond"]); // -> 4

quickestConcat("simchacindy", ["sim", "simcha", "acindy", "ch"]); // -> 3

quickestConcat("simchacindy", ["sim", "simcha", "acindy"]); // -> -1

quickestConcat("uuuuuu", ["u", "uu", "uuu", "uuuu"]); // -> 2

quickestConcat("rongbetty", ["wrong", "bet"]); // -> -1

quickestConcat("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", [
  "u",
  "uu",
  "uuu",
  "uuuu",
  "uuuuu",
]);
