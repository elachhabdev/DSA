var sortColors = function (nums) {
  for (let j = 0; j < nums.length - 1; j++) {
    let k = j + 1;
    while (k < nums.length) {
      if (nums[k] < nums[j]) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
      }
      k++;
    }
  }

  return nums;
};

var sortColorsBetter = function (nums) {
  let current = 0;
  let left = 0;
  let right = nums.length - 1;

  while (current <= right) {
    if (nums[current] == 2) {
      let temp = nums[current];
      nums[current] = nums[right];
      nums[right] = temp;
      right--;
    } else if (nums[current] == 1) {
      current++;
    } else {
      let temp = nums[current];
      nums[current] = nums[left];
      nums[left] = temp;
      left++;
      current++;
    }
  }

  return nums;
};

console.log(sortColorsBetter([2, 0, 2, 1, 1, 0, 2, 0, 2, 1, 1, 0]));
