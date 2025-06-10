var nextPermutation = function (nums) {
  let i = nums.length - 1;
  let notfound = 0;
  while (i > 0) {
    if (nums[i - 1] >= nums[i]) {
      i--;
    } else {
      let j = nums.length - 1;
      let toSwap = nums[i - 1];
      for (let s = nums.length - 1; s > 0; s--) {
        if (toSwap >= nums[s]) {
        } else {
          j = s;
          break;
        }
      }

      let temp = nums[j];
      nums[j] = nums[i - 1];
      nums[i - 1] = temp;

      selectionSort(nums, i);

      //reverse better

      notfound = -1;
      break;
    }
  }

  if (notfound == 0) nums.sort((a, b) => a - b);
  console.log(nums);
};

function selectionSort(arr, t) {
  let n = arr.length;
  for (let i = t; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

nextPermutation([2, 1, 4, 3]);
nextPermutation([1, 3]);
nextPermutation([2, 3, 1]);
nextPermutation([1, 5, 1]);

nextPermutation([5, 4, 7, 5, 3, 2]);
