const factoriel = (number) => {
  if (number <= 1) {
    return 1;
  }

  return number * factoriel(number - 1);
};

console.log(factoriel(10));
