'use strict'

const categoryDriver = (prompt('Введіть категорію водія А, В, С')).toLowerCase();

let res;

switch (categoryDriver) {
  case 'a':
    res = 'мотоцикл'
    break;
  case 'b':
    res = 'легковий автомобіль'
    break;
  case 'c':
    res = 'вантажний автомобіль'
    break;

  default: res = 'некоректно введені дані'
    break;
}

alert(res);