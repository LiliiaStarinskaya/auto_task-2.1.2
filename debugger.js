const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  // debugger; // сумма посчитана, bonus неопределен
  sum > 50 ? (bonus = 50) : (bonus = sum);
  // debugger; //определен bonus, но еще не вернулся
  return bonus;
};

// function assert(expectedResult, actualResult) {
//   if (expectedResult === actualResult) {
//     console.log("Passed");
//   } else {
//     console.log(
//       `Expected result ${expectedResult} not equals the actual result ${actualResult}`
//     );
//   }
// }
// assert(0, calculateBonus(0, 9));

module.exports = calculateBonus;
