var combine = function (n, k) {
  let nums = Array.from({ length: n }, (_, i) => i + 1);

  return combinationRec(nums, k, 0, []);
};

var combinationRec = function (nums, k, currentIndex, path) {
  if (currentIndex > nums.length) return [];

  let paths = [];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    path.push(current);

    let currentPaths = combinationRec(nums, k, i + 1, path);

    for (let path of currentPaths) {
      paths.push([...path]);
    }

    path.pop();
  }

  return paths;
};

console.log(combine(3, 2));
