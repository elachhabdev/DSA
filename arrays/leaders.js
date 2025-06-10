const leaders = (nums) => {
  let max = nums[nums.length - 1];

  let leaders = [nums[nums.length - 1]];

  for (let i = nums.length - 2; i > 0; i--) {
    if (nums[i] > nums[i + 1] && nums[i] > max) {
      leaders.unshift(nums[i]);
    }
    max = Math.max(max, nums[i]);
  }

  return leaders;
};

const leadersBetter = (nums) => {
  let max = nums[nums.length - 1];

  let leaders = [nums[nums.length - 1]];

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= nums[i + 1] && nums[i] >= max) {
      leaders.push(nums[i]);
    }
    max = Math.max(max, nums[i]);
  }

  return leaders.reverse();
};

console.log(leadersBetter([1, 2, 5, 3, 1, 2]));

console.log(leadersBetter([1, 2, 5, 3, 1, 2, 6]));
console.log(leadersBetter([61, 61, 17]));
