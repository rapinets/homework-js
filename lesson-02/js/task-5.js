'use strict'

// get seconds
let seconds = parseInt(prompt('Введіть кількість секунд', '0'));

if (isNaN(seconds) || seconds < 0) {
  seconds = 0;
}

// 1 hour = 3600 seconds
const hours = Math.floor(seconds / 3600);
// convert the remaining seconds into minutes
const minutes = Math.floor((seconds % 3600) / 60);

// output
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №5</h1>
    <p class="task__info">Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</p>
    <p class="task__desc">Cекунди: ${seconds};</p>
    <p class="task__desc">${hours} h : ${minutes} m</p>
  </div>
  `);
