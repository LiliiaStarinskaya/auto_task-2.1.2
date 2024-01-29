let userBalance = 500;
const postamat = [null, null, null, "1432HGF", null];
let userEnter = "A001DFX0";

const database = [
  {
    smsCode: "A001DFX0",
    cellNumber: "4",
    packageCost: 100,
    packageId: "1432HGF",
  },
];

const foundPackage = database.find((item) => item.smsCode === userEnter);

if (foundPackage) {
  const { packageId, cellNumber, packageCost } = foundPackage;

  userBalance -= packageCost;

  console.log(
    `Заберите посылку ${packageId} из ячейки ${cellNumber}. Ваш счет составляет ${userBalance}`
  );
} else {
  console.log("Посылка не найдена.");
}
