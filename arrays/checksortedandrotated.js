var check = function (nums) {
  let x = nums.length - 1;

  for (let k = nums.length - 1; k > 0; k--) {
    if (nums[k] < nums[k - 1]) {
      break;
    } else {
      x = k - 1;
    }
  }

  let isSorted = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    isSorted[i] = nums[(i + x) % nums.length];
  }

  for (let i = 0; i < isSorted.length - 1; i++) {
    if (isSorted[i + 1] < isSorted[i]) return false;
  }

  return true;
};
console.log(check([3, 1, 5, 1, 2]));
console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([4, 1, 2, 3]));
console.log(check([3, 4, 5, 6, 2]));
console.log(check([1, 2, 3]));
console.log(check([1, 2, 6, 8, 7]));
