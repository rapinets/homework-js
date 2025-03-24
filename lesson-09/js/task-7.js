'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
   */

  const prices = [1000, 500, 10000, 1500, 600, 300, 200, 2000, 4000, 800];

  const discount = 30;

  function getDiscount(arr, discount) {
    return arr.map(el => (el > 1000 ? el - (el * discount / 100) : el));
  }

  const resultArr = getDiscount(prices, discount);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №7</h1>
      <p class="task__info">Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив цін: [${prices}]</p>
      <p class="task__desc">Результат - ${resultArr}</p>
    </div>
    `);

}

