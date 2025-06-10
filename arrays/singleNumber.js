var singleNumber = function (nums) {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) return nums[i];
  }
};
console.log(singleNumber([4, 1, 2, 1, 2]));
