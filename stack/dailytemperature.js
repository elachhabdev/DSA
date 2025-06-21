var dailyTemperatures = function (temperatures) {
  let answers = [];
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][1] < temperatures[i]) {
      let removedT = stack.pop();
      answers[removedT[0]] = i - removedT[0];
    }
    stack.push([i, temperatures[i]]);
  }

  for (let s of stack) {
    answers[s[0]] = 0;
  }

  return answers;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

console.log(dailyTemperatures([30, 40, 50, 60]));

console.log(dailyTemperatures([30, 60, 90]));
