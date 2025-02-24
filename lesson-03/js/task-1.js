'use strict'

// get the data
const firstChild = prompt('Введіть ім\'я першої дитини');
const firstChildNum = parseInt(prompt('Введіть кількість цукерок першої дитини'));

const secondChild = prompt('Введіть ім\'я другої дитини');
const secondChildNum = parseInt(prompt('Введіть кількість цукерок другої дитини'));

// cheking corect data
if (firstChildNum < 0 && secondChildNum < 0) alert('Ви ввели неправильну кількість цукерок');


let resMessage;

if (firstChildNum > secondChildNum) resMessage = `У ${firstChild} більше цукерок`;
else if (secondChildNum > firstChildNum) resMessage = `У ${secondChild} більше цукерок`;
else resMessage = `У ${firstChild} та ${secondChild} одинакова кількість цукерок`;

// output of calculations
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №1</h1>
    <p class="task__info">
      З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
    </p>
    <p class="task__desc">У ${firstChild} - ${firstChildNum} цукерок</p>
    <p class="task__desc">У ${secondChild} - ${secondChildNum} цукерок</p>
    <h2 class="task__sub-title">Розв'язання:</h2>
    <p class="task__desc">${resMessage}</p>
  </div>
  `);

