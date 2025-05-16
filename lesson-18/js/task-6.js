'use strict'

/**
 * Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з 
 * input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.
 */

function generateTable() {
  const priceNumber = parseInt(document.getElementById('price-number').value);
  const table = document.querySelector('.price-number__table');

  if (priceNumber < 0 || isNaN(priceNumber)) throw new Error('You did not enter a number, or number less than 0!');

  for (let i = 0; i < priceNumber; i++) {
    let input = document.createElement('input');
    input.classList.add('grade-input');
    input.type = 'number';
    input.value = 0;
    table.append(input);
  }
}

function calculateAvr() {
  const inputs = document.querySelectorAll('.grade-input');
  if (inputs.length === 0) throw new Error('You have not created a table!');
  let sum = 0;
  let count = 0;

  inputs.forEach(input => {
    const val = parseFloat(input.value);
    if (isNaN(val) || val < 0) throw new Error('You did not enter a number, or number less than 0!');
    sum += val;
    count++;
  });
  const average = sum / count;
  document.querySelector('.price-number__average span').innerText = average;
}

