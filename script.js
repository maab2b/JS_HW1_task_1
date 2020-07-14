let randomNum = +prompt("Name a random number, please!");

let minusNum = +prompt("How much do you want to subtract from your number?");

let plusNum = +prompt("How much do you want to add to the result?");

let multiplyNum = +prompt("How much do you want to multiply the result?");

let devideNum = +prompt("How much do you want to divide the result?");

let result = (randomNum - minusNum + plusNum) * multiplyNum / devideNum;

alert(`(${randomNum} - ${minusNum} + ${plusNum}) * ${multiplyNum} / ${devideNum} = ${result}`);