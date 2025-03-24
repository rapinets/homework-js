'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 5.Дано масив елементів. Знайти добуток додатних елементів
   */

  const elArr = [1, -5, -10, -15, 6, 3, 2, 2, 4, -8];

  function getMultEl(arr) {
    let res = 1;
    for (let el of arr) {
      if (el > 0) res *= el;
    }
    return res;
  }

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №5</h1>
      <p class="task__info">Дано масив елементів. Знайти добуток додатних елементів</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив елементів: [${elArr}]</p>
      <p class="task__desc">Результат - ${getMultEl(elArr)}</p>
    </div>
    `);

}