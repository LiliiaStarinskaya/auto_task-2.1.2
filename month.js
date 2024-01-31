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

function getValuesBelow1000(expensesArray, value) {
  let valuesBelow1000 = [];

  expensesArray.forEach((expensesObject, index) => {
    const monthlyExpenses = expensesObject.yearlyExpences;
    const valuesForMonthBelow1000 = {};

    monthlyExpenses.forEach((expense, monthIndex) => {
      if (expense <= value) {
        valuesForMonthBelow1000[getMonthName(monthIndex)] = expense;
      }
    });

    valuesBelow1000.push(valuesForMonthBelow1000);
  });

  return valuesBelow1000;
}

function getMonthName(monthIndex) {
  const Date = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return Date[monthIndex];
}

const valuesBelow1000 = getValuesBelow1000(expencesExamples, 1000);

console.log(
  `Значения меньше или равно 1000 для каждого объекта затрат:`,
  valuesBelow1000
);
