var findCatalin = (n) => {
  const memo = Array(n + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));
  return findCatalinRec(n, 0, 0, memo);
};

var findCatalinRec = (n, open, closed, memo) => {
  if (open == n && closed == n) return 1;

  if (memo[open][closed] != -1) return memo[open][closed];

  let openParentheses = 0;
  let closedParentheses = 0;

  if (open < n) {
    openParentheses = findCatalinRec(n, open + 1, closed, memo);
  }

  if (closed < open) {
    closedParentheses = findCatalinRec(n, open, closed + 1, memo);
  }

  memo[open][closed] = openParentheses + closedParentheses;

  return openParentheses + closedParentheses;
};

console.log(findCatalin(3));
console.log(findCatalin(4));
