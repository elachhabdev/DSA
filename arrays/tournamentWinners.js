const tournamentWinners = (competitions, results) => {
  let counting = new Map();

  let winner = 0;

  for (let i = 0; i < competitions.length; i++) {
    let competition = competitions[i];

    if (competition[0] in counting) {
      if (results[i] == 1) counting[competition[0]] += 3;
    } else {
      counting[competition[0]] = 0;
    }

    if (competition[1] in counting) {
      if (results[i] == 0) counting[competition[1]] += 3;
    } else {
      counting[competition[1]] = 0;
    }

    if (counting[competition[0]] > counting[competition[1]]) {
      winner = competition[0];
    } else {
      winner = competition[1];
    }
  }

  return winner;
};

console.log(
  tournamentWinners(
    [
      ["html", "c++"],
      ["c++", "python"],
      ["python", "html"],
    ],
    [0, 0, 1]
  )
);
