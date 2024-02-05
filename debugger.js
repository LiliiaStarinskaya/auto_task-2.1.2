const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  // debugger; // сумма посчитана, bonus неопределен
  sum > 50 ? (bonus = 50) : (bonus = sum);
  // debugger; //определен bonus, но еще не вернулся
  return bonus;
};

module.exports = calculateBonus;
