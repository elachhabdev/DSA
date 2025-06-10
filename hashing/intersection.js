const intersection = (a, b) => {
  let m = new Set(a.length > b.length ? a : b);
  let intersection = [];

  let array = a.length > b.length ? b : a;

  for (let ar of array) {
    if (m.has(ar)) {
      intersection.push(ar);
    }
  }

  return intersection;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
