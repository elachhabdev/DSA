const sumoflengths = (array) => {
  if (array.length == 0) {
    return 0;
  }

  return array[0].length + sumoflengths(array.slice(1));
};

console.log(sumoflengths(["goat", "cat", "purple"]));
