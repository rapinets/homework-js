'use strict'

// get numbers
let numOne = parseFloat(prompt('Введіть перше дійсне число', '0'));
let numTwo = parseFloat(prompt('Введіть друге дійсне число', '0'));

// cheking if number is NaN
if (isNaN(numOne) || isNaN(numTwo) || numOne === 0) {
  numOne = 1;
  numTwo = 0;
}

// find the sum of the numbers
const sum = numOne + numTwo;

// find the value from multiplication
const mult = numOne * numTwo;

// find the value of division
const division = numOne / numTwo;

// output of calculations
document.write(`
  <div class="main__container">
    <h1 class="main__title">Задача №1</h1>
    <p class="main__info">
      Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
    </p>
    <h2 class="main__sub-title">Розв'язання:</h2>
    <h3 class="main__sub-title">Получені числа</h3>
    <table>
      <thead>
        <tr>
          <th>Перше число</th>
          <th>Друге число</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${numOne}</td>
          <td>${numTwo}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="main__sub-title">Получений результат</h3>
    <table>
      <thead>
        <tr>
          <th>Сума чисел</th>
          <th>Добуток чисел</th>
          <th>Частка чисел</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${sum}</td>
          <td>${mult}</td>
          <td>${division}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `);

