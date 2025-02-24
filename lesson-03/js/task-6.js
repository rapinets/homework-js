'use strict'

let dayNum = parseInt(prompt('Введіть номер дня'));

if (dayNum <= 0 || isNaN(dayNum)) dayNum = parseInt(prompt('Введіть число більше 0'));

const curentDay = (dayNum - 1) % 7 + 1;

let res;

switch (curentDay) {
  case 1:
    res = 'Понеділок'
    break;
  case 2:
    res = 'Вівторок'
    break;
  case 3:
    res = 'Середа'
    break;
  case 4:
    res = 'Четверг'
    break;
  case 5:
    res = 'П\'ятниця'
    break;
  case 6:
    res = 'Субота'
    break;
  case 7:
    res = 'Неділя'
    break;
}

alert(res);

