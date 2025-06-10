var combine = function (n, k) {
  let currents = [];
  return combineMemoBack(
    Array.from({ length: n }, (_, i) => i + 1),
    0,
    0,
    [],
    k,
    1,
    {}
  );
};
var combineMemoBack = function (
  nums,
  currentIndex,
  parent,
  path,
  k,
  depth,
  memo
) {
  if (path.length == k) return [path];

  let paths = [];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];
    path.push(current);

    let currentPaths = combineMemoBack(
      nums,
      i + 1,
      i,
      path,
      k,
      depth + 1,
      memo
    );

    for (let path of currentPaths) {
      paths.push([...path]);
    }

    path.pop();
  }

  return paths;
};
/* var combineMemo = function (nums, currentIndex, parent, path, k, depth, memo) {
  if (currentIndex == nums.length && depth != k + 1) return [[-1]];

  let paths = [];
  let skip = 0;

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    let currentPaths = combineMemo(nums, i + 1, i, path, k, depth + 1, memo);

    if (currentPaths.length == 0) {
      paths.push([current]);
    } else {
      for (let path of currentPaths) {
        let indexofPath = path.indexOf(-1);

        path.unshift(current);
        paths.push(path);
      }
    }
  }

  return paths;
}; */
console.log(combine(5, 4));
