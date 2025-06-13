var findContentChildren = function (g, s) {
  let optimalChildren = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let c = 0;

  while (i < s.length) {
    if (s[i] >= g[c]) {
      i++;
      optimalChildren++;
      c++;
    } else {
      i++;
    }
  }

  return optimalChildren;
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
