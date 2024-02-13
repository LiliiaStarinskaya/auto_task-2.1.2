module.exports = function findStudentWithMaxScore(students) {
  const flatStudents = students.flat();

  const filteredStudents = flatStudents.filter(
    (student) => student.date && student.date !== ""
  );

  const maxScore = Math.max(
    ...filteredStudents.map((student) => student.score)
  );

  const studentsWithMaxScore = filteredStudents.filter(
    (student) => student.score === maxScore
  );

  studentsWithMaxScore.sort((a, b) => a.date.localeCompare(b.date));

  const studentWithMaxScoreAndEarliestDate = studentsWithMaxScore[0];

  console.log(
    `Поздравляем, ${studentWithMaxScoreAndEarliestDate.name}! Вы набрали больше баллов, чем ваши коллеги. Ваш балл: ${maxScore}`
  );

  return studentWithMaxScoreAndEarliestDate.name;
};
