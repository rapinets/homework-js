'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
   */

  const arrLength = parseInt(prompt('Введіть кількість елементів', '0'));

  function getArr(num) {
    let arr = new Array(num).fill(1);
    arr = arr.fill(7, 5);
    return arr;
  }

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №3</h1>
      <p class="task__info">Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели: ${arrLength}</p>
      <p class="task__desc">Результат - ${getArr(arrLength)}</p>
    </div>
    `);

}