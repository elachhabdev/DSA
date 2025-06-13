const bulbs = (A) => {
  let totalPress = 0;

  let i = 0;

  while (i < A.length) {
    if ((A[i] + (totalPress % 2)) % 2 == 0) {
      totalPress++;
    } else {
      i++;
    }
  }

  return totalPress;
};

console.log(bulbs([0, 1, 0, 1]));
