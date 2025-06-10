var rearrangeArrayBrute = function (nums) {
  let c = 0;
  let j = 0;

  while (c < nums.length) {
    let signCurrent = nums[c] / Math.abs(nums[c]);
    let shouldBeSign = c % 2 == 0 ? 1 : -1;

    if (signCurrent == shouldBeSign) {
      c++;
    } else {
      j = c + 1;
      while (j < nums.length) {
        let searchSign = nums[j] / Math.abs(nums[j]);

        if (searchSign == shouldBeSign) {
          for (let k = j; k > c; k--) {
            let temp = nums[k - 1];
            nums[k - 1] = nums[k];
            nums[k] = temp;
          }
          break;
        } else {
          j++;
        }
      }
      c++;
    }
  }
  return nums;
};

var rearrangeArray = function (nums) {
  let c = 0;

  let reArray = [];
  let queue = [];

  while (c < nums.length) {
    queue.push(nums[c]);

    if (queue.length > 0) {
      let top = queue[queue.length - 1];
      let bottom = queue[0];
      let signTop = top / Math.abs(top);
      let signBottom = bottom / Math.abs(bottom);

      if (signBottom != signTop) {
        if (signBottom > 0) {
          reArray.push(queue.shift());
          reArray.push(queue.pop());
        } else {
          reArray.push(queue.pop());
          reArray.push(queue.shift());
        }
      }
    }

    c++;
  }
  return reArray;
};

var rearrangeArray = function (nums) {
  let reArray = [];
  let pos = [];
  let neg = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i]);
    } else {
      pos.push(nums[i]);
    }
  }

  console.log(neg, pos);

  for (let i = 0; i < nums.length; i++) {
    let c = Math.floor(i / 2);
    if (i % 2 == 0) reArray[i] = pos[c];
    if (i % 2 != 0) reArray[i] = neg[c];
  }

  return reArray;
};

console.log(rearrangeArray([3, 1, 2, -5, 2, -1, -4]));
console.log(
  rearrangeArray([
    28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31,
  ])
);

console.log(rearrangeArray([-1, 1]));
