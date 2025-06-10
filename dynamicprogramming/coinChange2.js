var change = function (amount, coins) {
  return coinChangeRec(amount, coins, 0, {});
};

var coinChangeRec = function (amount, coins, currentIndex, memo) {
  let key = `${currentIndex},${amount}`;

  if (currentIndex in memo) return memo[currentIndex];

  if (amount < 0) return 0;

  if (amount == 0) return 1;

  if (currentIndex >= coins.length) return 0;

  let current = coinChangeRec(
    amount - coins[currentIndex],
    coins,
    currentIndex,
    memo
  );

  let next = coinChangeRec(amount, coins, currentIndex + 1, memo);

  memo[currentIndex] = current + next;

  return memo[currentIndex];
};

console.log(change(5, [1, 2, 5]));
