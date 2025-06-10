const canConcat = (s, words) => {
  return canConcatMemo(s, words, {});
};
const canConcatMemo = (s, words, memo) => {
  if (s in memo) return memo[s];
  if (s.length == 0) return true;
  for (let word of words) {
    if (s[0] != word[0]) continue;

    let sliceIndex = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] == word[i]) {
        sliceIndex++;
      }
    }

    if (canConcatMemo(s.slice(sliceIndex), words, memo) == true) {
      memo[s] = true;
      return true;
    }
  }

  memo[s] = false;

  return false;
};
console.log(canConcat("oneisnone", ["one", "none", "is"]));

const canConcatv2 = (s, words) => {
  return canConcatv2Memo(s, words, {});
};
const canConcatv2Memo = (s, words, memo) => {
  if (s in memo) return memo[s];
  if (s.length == 0) return true;
  for (let word of words) {
    if (!s.startsWith(word)) continue;

    if (canConcatv2Memo(s.slice(word.length), words, memo) == true) {
      memo[s] = true;
      return true;
    }
  }

  memo[s] = false;

  return false;
};
