var minEatingSpeedBrute = function (piles, h) {
  piles.sort((a, b) => a - b);

  let max = piles[piles.length - 1];

  let total = piles.reduce((p, c) => p + c, 0);

  let minK = Math.ceil(total / h);

  for (let k = minK; k <= max; k++) {
    let totalhours = 0;

    for (let i = 0; i < piles.length; i++) {
      totalhours += Math.ceil(piles[i] / k);
    }

    if (totalhours == h) {
      return k;
    }
  }
};

var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);

  let total = piles.reduce((p, c) => p + c, 0);

  let minK = Math.ceil(total / h);

  let i = minK;

  let j = max;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    let totalhours = 0;

    for (let i = 0; i < piles.length; i++) {
      totalhours += Math.ceil(piles[i] / mid);
    }

    if (totalhours <= h) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return i;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
console.log(minEatingSpeed([312884470], 312884469));
