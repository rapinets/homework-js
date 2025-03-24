'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
   */

  const carNumList = ['AA1111AA', 'AI2222BP', 'AO3333BB', 'BC4444CA', 'TC5555PT', 'KO6666OA', 'KA7777DI', 'AO8888TY', 'BC9999TY', 'K9'];

  function getNumListStartA(arr) {
    return arr.filter(el => el[0] === 'A');
  }

  const resultArr = getNumListStartA(carNumList);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №8</h1>
      <p class="task__info">Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив номерів авто: [${carNumList}]</p>
      <p class="task__desc">Результат - ${resultArr}</p>
    </div>
    `);

}

