'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями
   */

  const arrLength = parseInt(prompt('Введіть кількість елементів', '0'));

  const arr = (num) => { return new Array(num).fill(0) };

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №1</h1>
      <p class="task__info">Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели: ${arrLength}</p>
      <p class="task__desc">Результат - ${arr(arrLength)}</p>
    </div>
    `);

}




