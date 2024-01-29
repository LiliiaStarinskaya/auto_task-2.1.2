const players = [
  { id: 1, name: "", scorePoints: 85 },
  { id: 2, name: "Jane Smith", scorePoints: 92 },
  { id: 3, name: "Michael Johnson", scorePoints: null },
  { id: 4, name: "", scorePoints: 95 },
  { id: 5, name: "Robert Brown", scorePoints: 88 },
  { id: 6, name: "@$%#@", scorePoints: 91 },
  { id: 7, name: "Daniel Lee", scorePoints: 87 },
  { id: 8, name: null, scorePoints: 99 },
  { id: 9, name: 55, scorePoints: 89 },
  { id: 10, name: "Ava Martinez", scorePoints: "111" },
];
const invalidCharactersRegex = /[@$%#]/;
const validPlayers = players.filter(
  (player) =>
    player.scorePoints !== null &&
    !isNaN(player.scorePoints) &&
    typeof player.scorePoints === "number" &&
    typeof player.name === "string" &&
    player.name !== null &&
    player.name !== "" &&
    !invalidCharactersRegex.test(player.name)
);

let scorePointsArray = validPlayers.map((player) => player.scorePoints);

let maxScore = Math.max(...scorePointsArray);
console.log("The maximum score for the course is: " + maxScore);

let studentWithMaxScore = validPlayers.find(
  (player) => player.scorePoints === maxScore
);

console.log("Student with the maximum score:" + studentWithMaxScore.name);
