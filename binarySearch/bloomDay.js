var minDays = function (bloomDay, m, k) {
  let days = new Set(bloomDay);

  let shouldWaitDays = Number.POSITIVE_INFINITY;
  let accFlowers = k;
  let totalBouquets = 0;

  let max = Math.max(...bloomDay);
  let min = Math.min(...bloomDay);

  let i = min;
  let j = max;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    accFlowers = k;
    totalBouquets = 0;

    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= mid) {
        accFlowers--;
        if (accFlowers == 0) {
          totalBouquets++;
          if (m == totalBouquets) {
            shouldWaitDays = Math.min(mid, shouldWaitDays);
          }
          accFlowers = k;
        }
      } else {
        accFlowers = k;
      }
    }

    if (totalBouquets >= m) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return shouldWaitDays == Number.POSITIVE_INFINITY ? -1 : shouldWaitDays;
};
console.log(minDaysBrute([1, 10, 3, 10, 2], 3, 1));
console.log(minDaysBrute([1, 10, 3, 10, 2], 3, 2));
console.log(minDaysBrute([7, 7, 7, 7, 8, 12, 8, 7, 7, 7], 2, 3));
console.log(
  minDaysBrute(
    [72, 90, 79, 41, 29, 57, 68, 79, 80, 44, 44, 12, 50, 12, 7, 39, 43, 93, 32],
    9,
    2
  )
);
