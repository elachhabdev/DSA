var numDecodingsB = function (s) {
  const memo = Array(s.length + 1).fill(-1);

  return numDecodingsBRec(s, 0, memo);
};
var numDecodingsBRec = function (s, currentIndex, memo) {
  if (s.length == currentIndex) return 1;

  if (s.length < currentIndex) return 0;

  if (memo[currentIndex] != -1) return memo[currentIndex];

  let totalWays = 0;

  let currentOne = s.slice(currentIndex, currentIndex + 1);

  if (!currentOne.startsWith("0") && parseInt(currentOne) <= 26) {
    totalWays += numDecodingsBRec(s, currentIndex + 1, memo);
  }

  let currentTwo = s.slice(currentIndex, currentIndex + 2);

  if (!currentTwo.startsWith("0") && parseInt(currentTwo) <= 26) {
    totalWays += numDecodingsBRec(s, currentIndex + 2, memo);
  }

  memo[currentIndex] = totalWays;

  return totalWays;
};
console.log(numDecodingsB("226"));
console.log(numDecodingsB("12"));
console.log(numDecodingsB("06"));
console.log(numDecodingsB("1234657047"));
