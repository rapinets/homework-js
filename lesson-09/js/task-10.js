'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
   */

  const prices = [1000, 500, 10000, 1500, 600, 300, 200, 2000, 4000, 800];

  const tax = 20;

  function getTax(arr, tax) {
    return arr.map(el => el * tax / 100);
  }

  const resultArr = getTax(prices, tax);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №10</h1>
      <p class="task__info">Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив цін: [${prices}]</p>
      <p class="task__desc">Результат - ${resultArr}</p>
    </div>
    `);

}

