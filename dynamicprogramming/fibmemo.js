const fib = (n, memo) => {
  if (n == 0) return 0;

  if (n == 1) return 1;

  if (n in memo) return memo[n];

  let sum = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = sum;

  return sum;
};

console.log(fib(30, {}));
