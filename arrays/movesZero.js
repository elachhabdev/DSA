var moveZeroes = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] != 0) i++;

    if (nums[j] != 0 && nums[i] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
