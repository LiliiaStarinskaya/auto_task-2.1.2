let value1 = 5;
let value2 = Math.random();
let result = value1 + value2 / 5 + 17;
console.log(Math.floor(Math.random(result) * 15));
/*
у деления приоритет выше, чем у сложения, 
поэтому сначала выполняется деление и только после этого сложение
*/
