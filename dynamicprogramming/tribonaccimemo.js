const tribonnaciMemo = (n, memo) => {
  if (n == 0) return 0;

  if (n == 1) return 0;

  if (n == 2) return 1;

  if (n in memo) return memo[n];

  let sum =
    tribonnaciMemo(n - 1, memo) +
    tribonnaciMemo(n - 2, memo) +
    tribonnaciMemo(n - 3, memo);

  memo[n] = sum;

  return sum;
};
