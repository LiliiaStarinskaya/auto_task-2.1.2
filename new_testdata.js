const players = [
  { id: 1, name: "John Doe", scorePoints: 85 },
  { id: 2, name: "Jane Smith", scorePoints: 92 },
  { id: 3, name: "Michael Johnson", scorePoints: 78 },
  { id: 4, name: "Emily Williams", scorePoints: 95 },
  { id: 5, name: "Robert Brown", scorePoints: 88 },
  { id: 6, name: "Sophia Davis", scorePoints: 91 },
  { id: 7, name: "Daniel Lee", scorePoints: 87 },
  { id: 8, name: "Olivia Taylor", scorePoints: 94 },
  { id: 9, name: "Matthew Anderson", scorePoints: 89 },
  { id: 10, name: "Ava Martinez", scorePoints: 96 },
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
