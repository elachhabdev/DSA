const sumNumbersRecursive = (numbers) => {
  if (numbers.length == 0) {
    return 0;
  }

  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

console.log(sumNumbersRecursive([5, 2, 9, 10]));
