var subsetsUnique = function (nums) {
  nums.sort((a, b) => a - b);
  return subsetsUniqueRec(nums, 0, new Map());
};

var subsetsUniqueRec = function (nums, currentIndex, memo) {
  if (memo.has(currentIndex)) return memo.get(currentIndex);

  if (currentIndex > nums.length) return [[]];

  let paths = [[]];

  for (let i = currentIndex; i < nums.length; i++) {
    if (i != currentIndex && nums[i - 1] == nums[i]) continue;

    let current = nums[i];

    let currentPaths = subsetsUniqueRec(nums, i + 1, memo);

    if (currentPaths.length == 0) {
      paths.push([current]);
    } else {
      for (let path of currentPaths) {
        path = [current, ...path];
        paths.push(path);
      }
    }
  }

  memo.set(currentIndex, paths);

  return paths;
};

console.log(subsetsUnique([1, 2, 2]));
