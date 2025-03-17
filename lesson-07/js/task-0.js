'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
   */

  function getSeason(num = 1) {
    const curentMonth = (num - 1) % 12 + 1;

    let res

    switch (curentMonth) {
      case 12:
      case 1:
      case 2:
        res = 'Зима'
        break;
      case 3:
      case 4:
      case 5:
        res = 'Весна'
        break;
      case 6:
      case 7:
      case 8:
        res = 'Літо'
        break;
      case 9:
      case 10:
      case 11:
        res = 'Осінь'
        break;
    }
    return res;
  }

  const monthNum = parseInt(prompt('Введіть номер місяця'));
  const curentSeason = getSeason(monthNum);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №0</h1>
      <p class="task__info">Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.</p>
      <p class="task__desc">Пора року - ${curentSeason}</p>
    </div>
    `);

}











