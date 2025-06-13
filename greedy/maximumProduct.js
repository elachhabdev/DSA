var maximumProduct = function (nums) {
  let maximum = Number.NEGATIVE_INFINITY;

  nums.sort((a, b) => a - b);

  maximum = Math.max(maximum, nums[0] * nums[1] * nums[nums.length - 1]);
  maximum = Math.max(
    maximum,
    nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1]
  );

  return maximum;
};
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-3]));
console.log(maximumProduct([0, 1, 2, 3, 10, -6, -98, 5, -1, 30]));
console.log(
  maximumProduct([
    0, -1, -2, -3, -10, -6, -98, -5, -1, -30, -30, -900, -525, -500, -750,
  ])
);
console.log(maximumProduct([-8, -7, -2, 10, 20]));
