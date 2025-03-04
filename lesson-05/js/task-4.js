'use strict'

if (confirm('Почати тестування?')) {
  document.write(`
    <div class="task__container">
      <h1 class="task__title">Задача №4</h1>
      <p class="task__info">Вивести таблицю з 3 рядків і 7 стовпців</p>
      <h2 class="task__sub-title">Розвязання:</h2>
      <table>
    `);

  for (let i = 0; i < 3; i++) {
    document.write(`<tbody><tr>`);
    for (let j = 1; j <= 7; j++) {
      document.write(`<td>${j}</td>`);

    }
    document.write(`</tr></tbody>`);

  }

  document.write(`</table></div>`);

}



