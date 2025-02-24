'use strict'

const minValue = 1;
const maxValue = 5;
const randNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
let userNum = parseInt(prompt('Введіть  число'));

if (userNum === randNumber)
  alert(`Ви вгадали ${randNumber} === ${userNum}`);
else {
  userNum = parseInt(prompt('Ви не вгадали. Введіть  число'));

  if (userNum === randNumber) alert(`Ви вгадали ${randNumber} === ${userNum}`);
  else alert(`Ви не вгадали ${randNumber} !=== ${userNum}`);
}
