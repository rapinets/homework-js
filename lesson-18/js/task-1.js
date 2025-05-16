'use strict'

/**
 * Задача 1. Розробити калькулятор
 */

function numbers() {
  const num1 = parseFloat(document.getElementById('first').value);
  const num2 = parseFloat(document.getElementById('second').value);

  if (isNaN(num1) || isNaN(num2)) throw new Error('You did not enter a number!');

  return { num1, num2 };
}

const sum = () => {
  const { num1, num2 } = numbers();
  const res = num1 + num2;
  document.getElementById('result').value = res;
}

const multiply = () => {
  const { num1, num2 } = numbers();
  const res = num1 * num2;
  document.getElementById('result').value = res;
}

const subtraction = () => {
  const { num1, num2 } = numbers();
  const res = num1 - num2;
  document.getElementById('result').value = res;
}

const division = () => {
  const { num1, num2 } = numbers();
  const res = num1 / num2;
  document.getElementById('result').value = res.toFixed(2);
}

window.onload = function () {
  document.getElementById('plus').onclick = sum;
  document.getElementById('minus').onclick = subtraction;
  document.getElementById('multiply').onclick = multiply;
  document.getElementById('divide').onclick = division;
}






