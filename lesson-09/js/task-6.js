'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
   */

  const elArr = [1, 5, -10, -15, 6, 3, 2, 2, 4, -8];

  function multTo2(arr) {
    let newArr = [];
    arr.forEach((el) => {
      if (el > arr[0]) {
        el *= 2;
        newArr.push(el);
      }
    });
    return newArr;
  }

  const resultArr = multTo2(elArr);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №6</h1>
      <p class="task__info">Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив елементів: [${elArr}]</p>
      <p class="task__desc">Результат - ${resultArr}</p>
    </div>
    `);

}

