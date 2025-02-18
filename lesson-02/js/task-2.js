'use strict'

// get year of birth
let yearOfBirth = parseInt(prompt('Введіть свій рік народження', 'Ваш рік народження'));

const curentYear = 2025;

// checking for correct data entry
if (isNaN(yearOfBirth) || yearOfBirth < 1920 || yearOfBirth > 2022) {
  yearOfBirth = 1985;
}

// get number of years
const numberOfYears = curentYear - yearOfBirth;

// output
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №2</h1>
    <p class="task__info">Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.</p>
    <p class="task__desc">Ви ${yearOfBirth} року народження.</p>

    <p class="task__desc">Зараз Вам ${numberOfYears} років.</p>
  </div>
  `);