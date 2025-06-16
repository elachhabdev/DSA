var tribonacci = function (n) {
  return tribonacciRec(n, new Map());
};
var tribonacciRec = function (n, memo) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  if (n == 2) return 1;

  if (n == 3) return 2;

  if (memo.has(n)) return memo.get(n);

  let sum =
    tribonacciRec(n - 1, memo) +
    tribonacciRec(n - 2, memo) +
    tribonacciRec(n - 3, memo);

  memo.set(n, sum);

  return sum;
};
console.log(tribonacci(2));
console.log(tribonacci(4));
console.log(tribonacci(25));
