module.exports = function findStudentsWithMaxScore(students) {
  const flatStudents = students.flat();

  const filteredStudents = flatStudents.filter(
    (student) => student.date && student.date !== "" && student.score !== 0
  );

  if (filteredStudents.length === 0) {
    console.log("Студентов с валидными параметрами не найдено.");
    return [];
  }

  const maxScore = Math.max(
    ...filteredStudents.map((student) => student.score)
  );

  const studentsWithMaxScore = filteredStudents.filter(
    (student) => student.score === maxScore
  );

  if (studentsWithMaxScore.length === 1) {
    const student = studentsWithMaxScore[0];
    console.log(
      `Поздравляем,  ${student.name}! Вы набрали больше баллов, чем ваши коллеги. Ваш балл: ${maxScore}`
    );
    return [student.name];
  } else {
    studentsWithMaxScore.sort((a, b) => a.date.localeCompare(b.date));
    console.log(
      `Поздравляем следующих студентов с наивысшим баллом (${maxScore}):`
    );
    const names = studentsWithMaxScore.map((student) => student.name);
    console.log(names.join(", "));
    return names;
  }
};
