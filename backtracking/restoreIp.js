var restoreIpAddresses = function (s) {
  let paths = [];
  restoreIpAddressesRec(s, 0, [], paths);

  return paths;
};

var restoreIpAddressesRec = (s, currentIndex, path, paths) => {
  if (s.length == currentIndex && path.length == 4) {
    paths.push(path.join("."));
  }

  if (s.length < currentIndex) return [];

  for (let i = 0; i < 3; i++) {
    let current = s.slice(currentIndex, currentIndex + i + 1);

    if (current.startsWith("0") && current.length != 1) continue;

    if (parseInt(current) < 0 || parseInt(current) > 255) continue;

    path.push(current);

    restoreIpAddressesRec(s, currentIndex + i + 1, path, paths);

    path.pop();
  }
};

console.log(restoreIpAddresses("3010"));
