var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let reversed = target - nums[i];

    if (reversed in map) {
      return [map[reversed], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
