'use strict'

let monthNum = parseInt(prompt('Введіть номер місяця'));

if (monthNum <= 0 || isNaN(monthNum)) monthNum = parseInt(prompt('Введіть число більше 0'));

const curentMonth = (monthNum - 1) % 12 + 1;

let res

switch (curentMonth) {
  case 12:
  case 1:
  case 2:
    res = 'Зима'
    break;
  case 3:
  case 4:
  case 5:
    res = 'Весна'
    break;
  case 6:
  case 7:
  case 8:
    res = 'Літо'
    break;
  case 9:
  case 10:
  case 11:
    res = 'Осінь'
    break;
}

alert(res);