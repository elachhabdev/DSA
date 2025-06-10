const arrayStepper = (nums) => {
  return arrayStepperMemo(nums, 0, {});
  // todo
};

const arrayStepperMemo = (nums, currentIndex, memo) => {
  if (currentIndex in memo) return memo[currentIndex];
  if (currentIndex == nums.length - 1) return true;

  for (let i = currentIndex + 1; i <= currentIndex + nums[currentIndex]; i++) {
    if (arrayStepperMemo(nums, i, memo) == true) {
      memo[currentIndex] = true;

      return true;
    }
  }

  memo[currentIndex] = false;

  return false;
};

console.log(arrayStepper([3, 1, 3, 1, 0, 1]));
