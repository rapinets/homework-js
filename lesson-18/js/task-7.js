'use strict'

/**
 * Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту 
 * (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). 
 * Ціни визначте самі. Підрахувати загальну вартість.
 */

function totalTravelSum() {
  let sum = 0;
  const selectTransports = document.querySelectorAll('.card-travel__transport select');
  if (selectTransports.length === 0) throw new Error('Such an element does not exist!');
  for (const transport of selectTransports) {
    sum += parseFloat(transport.value);
  }

  const selectFeeding = document.querySelectorAll('.card-travel__feeding input');
  if (selectFeeding.length === 0) throw new Error('Such an element does not exist!');
  for (const feeding of selectFeeding) {
    if (feeding.checked) sum += parseFloat(feeding.value);
  }

  const selectGuide = document.querySelectorAll('.card-travel__guide input');
  if (selectGuide.length === 0) throw new Error('Such an element does not exist!');
  for (const guide of selectGuide) {
    if (guide.checked) sum += parseFloat(guide.value);
  }

  document.querySelector('.travel__result span').innerText = sum;

}


window.onload = () => {
  document.getElementById('total-sum').onclick = totalTravelSum;
}