let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calculateExpenses(expensesArray) {
  let sum = 0;
  expensesArray.forEach((value) => {
    if (value > 1000) {
      sum += value;
    }
  });
  return sum;
}

expencesExamples.forEach((expensesObject, index) => {
  const yearlyExpenses = expensesObject.yearlyExpences;
  const sum = calculateExpenses(yearlyExpenses);

  console.log(`Сумма затрат за год для объекта ${index + 1} равна: ${sum}`);
});

function testCalculateSum() {
  expencesExamples.forEach((expensesObject, index) => {
    const yearlyExpenses = expensesObject.yearlyExpences;
    const sum = calculateExpenses(yearlyExpenses);

    let expectedSum = 0;
    yearlyExpenses.forEach((value) => {
      if (value > 1000) {
        expectedSum += value;
      }
    });

    if (sum === expectedSum) {
      console.log(` ${index + 1} верно`);
    } else {
      console.log(
        ` ${index + 1} неверно. Ожидаемый: ${expectedSum}, Фактический: ${sum}`
      );
    }
  });
}

testCalculateSum();
