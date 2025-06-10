const canConcat = (s, words) => {
  return canConcatMemo(s, 0, words, {});
};
const canConcatMemo = (s, currentIndex, words, memo) => {
  if (currentIndex in memo) return memo[currentIndex];
  if (s.length == currentIndex) return true;
  for (let word of words) {
    if (!s.startsWith(word, currentIndex)) continue;

    if (canConcatMemo(s, currentIndex + word.length, words, memo) == true) {
      memo[currentIndex] = true;
      return true;
    }
  }

  memo[currentIndex] = false;

  return false;
};
