//is the selecting method that give the optimal solution

//selecting by Highest Profit

const fractionalknapsackHighestProfit = (profits, weights, capacity) => {
  let optimal = 0;

  let objects = [];

  for (let i = 0; i < profits.length; i++) {
    objects[i] = [profits[i], weights[i]];
  }

  objects.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < objects.length; i++) {
    if (objects[i][1] <= capacity) {
      optimal += objects[i][0];
      capacity -= objects[i][1];
    } else {
      let fraction = capacity / objects[i][1];

      optimal += objects[i][0] * fraction;
      break;
    }
  }

  return optimal;
};

//selecting lowest Weights

const fractionalknapsackLowestWeight = (profits, weights, capacity) => {
  let optimal = 0;

  let objects = [];

  for (let i = 0; i < profits.length; i++) {
    objects[i] = [profits[i], weights[i]];
  }

  objects.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < objects.length; i++) {
    if (objects[i][1] <= capacity) {
      optimal += objects[i][0];
      capacity -= objects[i][1];
    } else {
      let fraction = capacity / objects[i][1];

      optimal += objects[i][0] * fraction;
      break;
    }
  }

  return optimal;
};

//selecting fraction Profits/Weights

const fractionalknapsackProfitbyWeight = (profits, weights, capacity) => {
  let optimal = 0;

  let objects = [];

  for (let i = 0; i < profits.length; i++) {
    objects[i] = [profits[i], weights[i]];
  }

  objects.sort((a, b) => b[0] / b[1] - a[0] / a[1]);

  for (let i = 0; i < objects.length; i++) {
    if (objects[i][1] <= capacity) {
      optimal += objects[i][0];
      capacity -= objects[i][1];
    } else {
      let fraction = capacity / objects[i][1];

      optimal += objects[i][0] * fraction;
      break;
    }
  }

  return optimal;
};

console.log(fractionalknapsackHighestProfit([60, 100, 120], [10, 20, 30], 50));
console.log(fractionalknapsackLowestWeight([60, 100, 120], [10, 20, 30], 50));
console.log(fractionalknapsackProfitbyWeight([60, 100, 120], [10, 20, 30], 50));
