'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 1. Створити функцію, яка за номером місяця повертає його назву.
   */

  function getMonth(num = 1) {
    const curentMonth = (num - 1) % 12 + 1;

    let res

    switch (curentMonth) {
      case 12:
        res = 'Грудень'
        break;
      case 1:
        res = 'Січень'
        break;
      case 2:
        res = 'Лютий'
        break;
      case 3:
        res = 'Березень'
        break;
      case 4:
        res = 'Квітень'
        break;
      case 5:
        res = 'Травень'
        break;
      case 6:
        res = 'Червень'
        break;
      case 7:
        res = 'Липень'
        break;
      case 8:
        res = 'Серпень'
        break;
      case 9:
        res = 'Вересень'
        break;
      case 10:
        res = 'Жовтень'
        break;
      case 11:
        res = 'Листопад'
        break;
    }
    return res;
  }

  const monthNum = parseInt(prompt('Введіть номер місяця'));
  const curentMonth = getMonth(monthNum);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №1</h1>
      <p class="task__info">Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">${curentMonth}</p>
    </div>
    `);

}





