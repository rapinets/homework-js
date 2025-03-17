'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
   */

  const row = parseInt(prompt('Введіть кількість рядків', '0'));
  const col = parseInt(prompt('Введіть кількість стовпчиків', '0'));

  function createTable(row = 0, col = 0) {
    let table = '<table><tbody>';
    for (let i = 0; i < row; i++) {
      table += '<tr>';
      for (let j = 0; j < col; j++) {
        table += '<td>&#128513;</td>';

      }
      table += '</tr>';
    }
    table += '</tbody></table>';
    return table;
  }

  const viewTable = createTable(row, col);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №6</h1>
      <p class="task__info">Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">${viewTable}</p>
    </div>
    `);
}