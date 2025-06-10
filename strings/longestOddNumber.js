var largestOddNumber = function (num) {
  let j = num.length - 1;

  while (j >= 0) {
    if (parseInt(num[j]) % 2 != 0) break;

    if (parseInt(num[j]) % 2 == 0) {
      j--;
    }
  }

  return num.slice(0, j + 1);
};

console.log(largestOddNumber("52"));
console.log(largestOddNumber("35427"));
console.log(largestOddNumber("4206"));
