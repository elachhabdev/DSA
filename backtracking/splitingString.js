var splitString = function (s) {
  let paths = [];
  splitStringRec(s, 0, [], paths);

  return paths.length == 0 ? false : true;
};
var splitStringRec = function (s, currentIndex, path, paths) {
  if (s.length == currentIndex) {
    paths.push([...path]);
  }

  if (s.length < currentIndex) return [];

  for (let i = 0; i < s.length - 1; i++) {
    let current = s.slice(currentIndex, currentIndex + i + 1);

    if (
      path.length != 0 &&
      parseInt(path[path.length - 1]) - parseInt(current) != 1
    )
      continue;

    path.push(current);

    splitStringRec(s, currentIndex + i + 1, path, paths);

    path.pop();
  }
};

console.log(splitString("0090089"));
