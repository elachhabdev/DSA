var rotateBrute = function (nums, k) {
  let t = nums.length - 1 - (k % nums.length);

  for (let i = t; i >= 0; i--) {
    for (let j = i; j < nums.length - 1 - (t - i); j++) {
      let tempp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = tempp;
    }
  }
  console.log(nums);
};

var rotateBetter = function (nums, k) {
  k = k % nums.length;

  let left = nums.length - 1 - k;
  let right = left + 1;

  nums = [...nums.slice(right), ...nums.slice(0, right)];
};

var rotateOptimal = function (nums, k) {
  reverse(left);
  reverse(right);
  reverse(nums);
};

var rotate = function (nums, k) {
  let rotated = [...nums];

  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = rotated[i];
  }
};

console.log(rotateBetter([1, 2, 3, 4, 5, 6, 7], 6));
/* console.log(rotate([-1, -100, 3, 99], 2));
 */
