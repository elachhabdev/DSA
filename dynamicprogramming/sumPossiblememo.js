const sumPossibleMemo = (amount, numbers, memo) => {
  if (amount in memo) return memo[amount];

  if (amount < 0) return false;
  if (amount == 0) return true;

  for (let number of numbers) {
    if (amount - number < 0) continue;
    if (sumPossibleMemo(amount - number, numbers, memo) == true) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;

  return false;
};

const sumPossible = (amount, numbers) => {
  return sumPossibleMemo(amount, numbers, {});
};
/* console.log(sumPossible(4, [5, 12, 4]));
console.log(sumPossible(15, [6, 2, 10, 19]));
console.log(sumPossible(13, [6, 2, 1]));
console.log(sumPossible(103, [6, 20, 1]));
console.log(sumPossible(12, []));
console.log(sumPossible(12, [12])); */
console.log(sumPossible(271, [10, 8, 265, 24]));
