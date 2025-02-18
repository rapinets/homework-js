'use strict'

// get values
let a = parseFloat(prompt('Введіть значення для "a"', 'Введіть число'));
let b = parseFloat(prompt('Введіть значення для "b"', 'Введіть число'));
let c = parseFloat(prompt('Введіть значення для "c"', 'Введіть число'));

// checking for correct data entry
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {
  a = 1;
  b = 1;
  c = 1;
}

const s1 = a + 12 + b;
const s2 = (Math.sqrt((a + b) / (2 * a))).toFixed(3);
const s3 = (Math.cbrt((a + b) * c)).toFixed(3);
const s4 = (Math.sin(a / (-b))).toFixed(3);

// output
document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №0</h1>
    <h2 class="task__info">Обчислити значення виразів</h2>
    <img src="../img/image.png" alt="Приклад виразів">
    <p class="task__sub-title">Введені дані: a=${a}; b=${b}; c=${c};</p>
    <p class="task__desc">S<sub>1</sub> = ${s1}</p>
    <p class="task__desc">S<sub>2</sub> = ${s2}</p>
    <p class="task__desc">S<sub>3</sub> = ${s3}</p>
    <p class="task__desc">S<sub>4</sub> = ${s4}</p>
  </div>
  `);