var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  let mapDigits = new Map();

  mapDigits["2"] = "abc";
  mapDigits["3"] = "def";
  mapDigits["4"] = "ghi";
  mapDigits["5"] = "jkl";
  mapDigits["6"] = "mno";
  mapDigits["7"] = "pqrs";
  mapDigits["8"] = "tuv";
  mapDigits["9"] = "wxyz";

  let paths = [];

  combinationRec(digits, mapDigits, 0, [], paths);
  return paths;
};

var combinationRec = function (nums, mapDigits, currentIndex, path, paths) {
  if (currentIndex == nums.length) {
    paths.push(path.join(""));
    return;
  }

  if (currentIndex > nums.length) return [];

  let current = nums[currentIndex];

  for (let c of mapDigits[current]) {
    path.push(c);

    combinationRec(nums, mapDigits, currentIndex + 1, path, paths);

    path.pop();
  }
};

console.log(letterCombinations("23"));
