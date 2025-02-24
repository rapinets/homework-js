'use strict'

const userAge = parseInt(prompt('Ваш вік'));
console.log(userAge);

let result;

if (userAge < 1 || userAge > 150 || isNaN(userAge)) result = 'Некоректний вік';
else if (userAge <= 7) result = 'Дитина у садочку';
else if (userAge <= 17) result = 'Дитина у школі';
else if (userAge <= 22) result = 'Студент';
else if (userAge <= 65) result = 'Працівник';
else result = 'Пенсіонер';

alert(result);


