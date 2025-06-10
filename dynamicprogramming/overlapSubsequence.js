const overlapSubsequence = (str1, str2) => {
  return overlapSubsequenceMemo(str1, str2, {});
};
const overlapSubsequenceMemo = (str1, str2, memo) => {
  let key = str1 + str2;

  if (key in memo) return memo[key];

  if (str1.length == 0 || str2.length == 0) return 0;

  let count = 0;

  if (str1[0] == str2[0]) {
    count = Math.max(
      count,
      overlapSubsequenceMemo(str1.slice(1), str2.slice(1), memo) + 1
    );
  } else {
    count = Math.max(count, overlapSubsequenceMemo(str1.slice(1), str2, memo));
    count = Math.max(count, overlapSubsequenceMemo(str1, str2.slice(1), memo));
  }

  memo[key] = count;

  return count;
};
console.log(overlapSubsequence("dogs", "daogt")); // -> 3
