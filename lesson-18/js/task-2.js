'use strict'

/**
 * Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
 */

const UAH_USD = 41.06;
const UAH_EUR = 46.77;

function convert() {
  const uah = parseFloat(document.getElementById('uah').value);

  if (uah < 0 || isNaN(uah)) throw new Error('You did not enter a number, or number less than 0!');

  const eur = uah / UAH_EUR;
  const usd = uah / UAH_USD;
  document.getElementById('eur').value = eur.toFixed(2);
  document.getElementById('usd').value = usd.toFixed(2);
}

window.onload = function () {
  document.querySelector('button').onclick = convert
}