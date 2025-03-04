'use strict'

if (confirm('Почати тестування?')) {
  let count = 1;

  document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №6</h1>
    <p class="task__info">Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком</p>
    <h2 class="task__sub-title">Розвязання:</h2>
    <table>
  `);

  for (let i = 0; i < 3; i++) {
    document.write(`<tbody><tr>`);
    for (let j = 0; j < 3; j++) {
      document.write(`<td>${count++}</td>`);

    }
    document.write(`</tr></tbody>`);

  }

  document.write(`</table><table>`);

  for (let i = 0; i < 3; i++) {
    document.write(`<tbody><tr>`);
    for (let j = 0; j < 3; j++) {
      document.write(`<td>${count++}</td>`);

    }
    document.write(`</tr></tbody>`);

  }

  document.write(`</table><table>`);

  for (let i = 0; i < 3; i++) {
    document.write(`<tbody><tr>`);
    for (let j = 0; j < 3; j++) {
      document.write(`<td>${count++}</td>`);

    }
    document.write(`</tr></tbody>`);

  }

  document.write(`</table></div>`);

}
