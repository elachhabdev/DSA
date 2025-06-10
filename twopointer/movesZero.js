var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    if (nums[i] == 0) {
      while (nums[j] == 0 && j < nums.length) {
        j++;
      }

      if (j < nums.length) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums);
};

moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]);
