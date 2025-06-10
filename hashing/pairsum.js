const pairSum = (numbers, targetSum) => {
  let previous = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = targetSum - numbers[i];

    if (previous.has(complement)) {
      return [previous.get(complement), i];
    } else {
      previous.set(numbers[i], i);
    }
  }
};

console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
