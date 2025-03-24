'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
   */

  const arrLength = parseInt(prompt('Введіть кількість елементів', '0'));

  function getArr(num) {
    let arr = new Array(num).fill(1);
    arr = arr.fill(7, (num / 2));
    return arr;
  }

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №2</h1>
      <p class="task__info">Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели: ${arrLength}</p>
      <p class="task__desc">Результат - ${getArr(arrLength)}</p>
    </div>
    `);

}