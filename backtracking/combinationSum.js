var combinationSum = function (canditates, amount) {
  return combinationSumRec(canditates, amount, []);
};
var combinationSumRec = function (canditates, amount, path) {
  if (amount < 0) return [];
  if (amount == 0) return [path];

  let paths = [];

  for (let i = 0; i < canditates.length; i++) {
    let current = canditates[i];

    path.push(current);

    let currentPaths = combinationSumRec(
      canditates,
      amount - canditates[i],
      path
    );

    for (let path of currentPaths) {
      paths.push([...path]);
    }

    path.pop();
  }

  return paths;
};

console.log(combinationSum([2, 3, 6, 7], 7));
