var subsets = function (nums) {
  return subsetsRec(nums, 0, new Map());
};

var subsetsRec = function (nums, currentIndex, memo) {
  if (memo.has(currentIndex)) return memo.get(currentIndex);

  if (currentIndex > nums.length) return [[]];

  let paths = [[]];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    let currentPaths = subsetsRec(nums, i + 1, memo);

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

console.log(subsets([1, 2, 3, 4]));
