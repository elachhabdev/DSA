const createBinaryTreeArr = () => {
  let arr = ["A", "B", "C", "D", "E", "F"];

  let i = 2;

  let current = arr[i];
  let left = arr[2 * i + 1];
  let right = arr[2 * i + 2];
  let parent = arr[Math.floor((i - 1) / 2)];

  console.log(current, left, right, parent);
};

console.log(createBinaryTreeArr());
