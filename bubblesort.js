let scorePointsArray = [
  460, 714, 694, 526, 0, 161, 433, 376, 464, 125, 459, 161, 401, 229, 246, 327,
  911, 814, 929, 244, 435, 266, 552, 787,
];

const initialArray = [...scorePointsArray];
for (let i = 0; i < scorePointsArray.length; i++) {
  for (let j = 0; j < scorePointsArray.length - i - 1; j++) {
    if (scorePointsArray[j] < scorePointsArray[j + 1]) {
      console.log(`________новая итерация`);
      console.log(
        `сравниваем пару ${scorePointsArray[j]} и ${scorePointsArray[j + 1]}`
      );
      console.log(`сравниваем индексы ${j} и ${j + 1}`);
      console.log(`промежуточный массив: ${scorePointsArray}`);
      console.log(`изначальный массив ${initialArray} `);

      let temp = scorePointsArray[j];
      scorePointsArray[j] = scorePointsArray[j + 1];
      scorePointsArray[j + 1] = temp;
    }
  }
}

console.log("финальный массив в результате:", scorePointsArray);
