var findKthPositive = function (arr, k) {
  let missings = [];

  let i = 1;
  let c = 0;
  while (i <= arr[arr.length - 1]) {
    if (arr[c] == i) {
      c++;
      i++;
    } else {
      missings.push(i);
      i++;
    }
  }

  return k > missings.length
    ? arr[arr.length - 1] + k - missings.length
    : missings[k - 1];
};

var findKthPositiveBS = function (arr, k) {
  let i = 0;

  let j = arr.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    let missingIndexs = arr[mid] - mid - 1;

    if (missingIndexs >= k) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return i + k;
};

console.log(findKthPositiveBS([2], 1));
