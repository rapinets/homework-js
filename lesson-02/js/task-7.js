'use strict'

// min max month
const minMonth = 1;
const maxMonth = 12;

// min max day
const minDay = 0;
const maxDay = 6;

let randMonth = minMonth + Math.floor(Math.random() * (maxMonth + 1 - minMonth));
let randDay = minDay + Math.floor(Math.random() * (maxDay + 1 - minDay));
let sumRand = randDay + randMonth;

// output
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №7</h1>
    <p class="task__info">Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</p>
    <h2 class="task__sub-title">Розв\'язання:</h2>
    <p class="task__desc">Випадковий номер місяця: ${randMonth};</p>
    <p class="task__desc">Випадковий номер дня (від 0 до 6): ${randDay};</p>
    <p class="task__desc">Їхня сума: ${sumRand};</p>
  </div>
  `);