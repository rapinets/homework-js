'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
   * 1) починаються на букву «А»;
   * 2) перша і остання літери співпадають;
   * 3) складаються з більше ніш 5 символів;
   */

  const carNumList = ['AA1111AA', 'AI2222BP', 'AO3333BB', 'BC4444CA', 'TC5555PT', 'KO6666OA', 'KA7777DI', 'AO8888TY', 'BC9999TY', 'K9'];

  function getCarNum(list) {
    let startWithA = 0, startEndEqual = 0, greatenThan_5 = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === 'A') startWithA++;
      if (list[i][0] === list[i][list[i].length - 1]) startEndEqual++;
      if (list[i].length > 5) greatenThan_5++;
    }
    return { startWithA, startEndEqual, greatenThan_5 };
  }

  const { startWithA, startEndEqual, greatenThan_5 } = getCarNum(carNumList);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №7</h1>
      <p class="task__info">Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :</p>
        <ol>
          <li>починаються на букву «А»;</li>
          <li>перша і остання літери співпадають;</li>
          <li>складаються з більше ніш 5 символів;</li>
        </ol>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Дано список номерів: ${carNumList}</p>
      <p class="task__desc">Кількість номерів, які починаються на букву «А» - ${startWithA}</p>
      <p class="task__desc">Кількість номерів, які перша і остання літери співпадають - ${startEndEqual}</p>
      <p class="task__desc">Кількість номерів, які складаються з більше ніш 5 символів - ${greatenThan_5}</p>
    </div>
    `);

}



console.log(startWithA, startEndEqual, greatenThan_5);
