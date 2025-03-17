'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 5. Створити окремі функції, які переводять:
   * 1) Сантиметри у дюйми;
   * 2) Кілограми у фунти;
   * 3) Кілометри у милі.
   */

  function cmToD(num = 0) {
    return num * 0.393701;
  }

  function kgToLb(num = 0) {
    return num * 2.20462;
  }

  function kmToMi(num = 0) {
    return num * 0.621371;
  }

  const num = parseFloat(prompt('Введіть число', '0'));

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №5</h1>
      <p class="task__info">Створити окремі функції, які переводять:</p>
        <ol>
          <li>Сантиметри у дюйми;</li>
          <li>Кілограми у фунти;</li>
          <li>Кілометри у милі.</li>
        </ol>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели - ${num}</p>
      <p class="task__desc">Сантиметри у дюйми - ${cmToD(num).toFixed(2)}</p>
      <p class="task__desc">Кілограми у фунти - ${kgToLb(num).toFixed(2)}</p>
      <p class="task__desc">Кілометри у милі - ${kmToMi(num).toFixed(2)}</p>
    </div>
    `);
}