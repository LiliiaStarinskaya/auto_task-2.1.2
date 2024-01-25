const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scorePointsArray = [];

for (let key in players) {
  if (players[key].hasOwnProperty("scorePoints")) {
    scorePointsArray.push(players[key].scorePoints);
  }
}

function saveScorePoints(array) {
  array.forEach((userData) => {});
}
saveScorePoints(players);
let maxScore = Math.max(...scorePointsArray);
console.log("The maximum score for the course is: " + maxScore);

let studentWithMaxScore = players.find(
  (player) => player.scorePoints === maxScore
);
console.log("Student with the maximum score: " + studentWithMaxScore.name);
