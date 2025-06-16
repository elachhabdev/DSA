var numDecodings = function (s) {
  const memo = Array(s.length + 1).fill(-1);

  return numDecodingsRec(s, 0, memo);
};
var numDecodingsRec = function (s, currentIndex, memo) {
  if (s.length == currentIndex) return 1;

  if (s.length < currentIndex) return 0;

  if (memo[currentIndex] != -1) return memo[currentIndex];

  let totalWays = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s.slice(currentIndex, currentIndex + i + 1);

    if (current.startsWith("0")) continue;

    if (parseInt(current) > 26) continue;

    totalWays += numDecodingsRec(s, currentIndex + i + 1, memo);
  }

  memo[currentIndex] = totalWays;

  return totalWays;
};

console.log(numDecodings("226"));
console.log(numDecodings("12"));
console.log(numDecodings("06"));
