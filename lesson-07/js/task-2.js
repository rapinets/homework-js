'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
   */

  function getDay(num = 1) {
    const curentMonth = (num - 1) % 7 + 1;

    let res

    switch (curentMonth) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        res = 'Робочий'
        break;
      case 6:
      case 7:
        res = 'Вихідний'
        break;
    }
    return res;
  }

  const dayNum = parseInt(prompt('Введіть номер дня'));
  const curentDay = getDay(dayNum);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №2</h1>
      <p class="task__info">Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">${curentDay} день</p>
    </div>
    `);

}





