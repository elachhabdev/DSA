const summingSquaresMemo = (n, memo) => {
  if (n in memo) return memo[n];
  if (n < 0) return Number.POSITIVE_INFINITY;
  if (n == 0) return 0;

  let current = Number.POSITIVE_INFINITY;

  for (let i = 1; i <= n; i++) {
    if (i * i > n) break;

    current = Math.min(current, summingSquaresMemo(n - i * i, memo) + 1);
  }

  memo[n] = current;

  return current;
};

const summingSquares = (n) => {
  return summingSquaresMemo(n, {});
};

console.log(summingSquares(87));
