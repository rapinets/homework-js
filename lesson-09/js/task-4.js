'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
   */

  const elArr = [10, 50, 100, 150, 60, 300, 200, 20, 400, 80];

  function getArrGreat_100(arr) {
    let arrNew = [];
    for (let el of arr) {
      if (el > 100) arrNew.push(el);
    }
    return arrNew;
  }

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №4</h1>
      <p class="task__info">Дано масив елементів. Вивести на екран елементи, що більші за 100</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив елементів: [${elArr}]</p>
      <p class="task__desc">Результат - ${getArrGreat_100(elArr)}</p>
    </div>
    `);

}