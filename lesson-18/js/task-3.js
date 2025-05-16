'use strict'

/**
 * Задача 3. Користувач задає рік народження. Визначити кількість років користувача.
 */

function userYears() {
  const currentYear = 2025;
  const enterYear = parseInt(document.getElementById('year').value);

  if (isNaN(enterYear) || enterYear < 1915 || enterYear > currentYear) throw new Error('You entered an incorrect year!');
  const res = currentYear - enterYear;
  document.querySelector('.user-years__respond span').innerText = `${res} years old`;
}

window.onload = function () {
  document.querySelector('button').onclick = userYears;
}