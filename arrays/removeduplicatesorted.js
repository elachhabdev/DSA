var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  let total = 0;

  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      nums[total + 1] = nums[j];
      total = total + 1;
      i = j;
    }
    j++;
  }

  return total + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
