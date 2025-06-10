var shipWithinDaysBrute = function (weights, days) {
  let totalShip = weights.reduce((p, c) => p + c, 0);

  let maxCapacity = totalShip;

  let minShipCapacity = Number.POSITIVE_INFINITY;

  for (let c = 1; c <= maxCapacity; c++) {
    let total = 0;
    let currentDays = days;
    let stopedAtWeight = -1;
    for (let w = 0; w < weights.length; w++) {
      if (total + weights[w] <= c) {
        total += weights[w];
        stopedAtWeight = w;
      } else {
        currentDays--;
        if (currentDays == 0) {
          break;
        }
        total = 0;
        w = w - 1;
      }
    }

    if (stopedAtWeight == weights.length - 1) {
      minShipCapacity = Math.min(minShipCapacity, c);
    }
  }

  return minShipCapacity;
};

var shipWithinDays = function (weights, days) {
  let totalShip = weights.reduce((p, c) => p + c, 0);

  let maxCapacity = totalShip;

  let minShipCapacity = Number.POSITIVE_INFINITY;

  let i = 1;

  j = maxCapacity;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    let total = 0;
    let currentDays = days;
    let stopedAtWeight = -1;
    let totalByCapacity = 0;

    for (let w = 0; w < weights.length; w++) {
      if (total + weights[w] <= mid) {
        total += weights[w];
        stopedAtWeight = w;
        totalByCapacity += weights[w];
      } else {
        currentDays--;
        if (currentDays == 0) {
          break;
        }
        total = 0;
        w = w - 1;
      }
    }

    if (stopedAtWeight == weights.length - 1) {
      minShipCapacity = Math.min(minShipCapacity, mid);
    }

    if (totalByCapacity >= totalShip) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return minShipCapacity;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([10, 12], 4));
