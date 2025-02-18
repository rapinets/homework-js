'use strict'

// get values
let cm = (parseFloat(prompt('Введіть кількість сантиметрів', '0'))).toFixed(2);

// checking for correct data entry
if (cm < 0 || isNaN(cm)) {
  cm = 0;
}

// conversion to meters
const m = (cm / 100).toFixed(4);

// conversion to kilometers
const km = (m / 1000).toFixed(6);

// output
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №4</h1>
    <p class="task__info">Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</p>
    <p class="task__desc">Сантиментри: ${cm};</p>
    <p class="task__desc">Метри: ${m};</p>
    <p class="task__desc">Кілометри: ${km};</p>
  </div>
  `);


