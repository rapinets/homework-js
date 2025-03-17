'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
   */

  const num1 = parseInt(prompt('Введіть перше число', '0'));
  const num2 = parseInt(prompt('Введіть друге число', '0'));
  const num3 = parseInt(prompt('Введіть третє число', '0'));

  let evenCount = 0, positiveCount = 0, grate100Count = 0;

  function multiTask(a = 0, b = 0, c = 0) {
    if (a % 2 == 0) evenCount++;
    if (b % 2 == 0) evenCount++;
    if (c % 2 == 0) evenCount++;

    if (a >= 0) positiveCount++;
    if (b >= 0) positiveCount++;
    if (c >= 0) positiveCount++;

    if (a >= 100) grate100Count++;
    if (b >= 100) grate100Count++;
    if (c >= 100) grate100Count++;

    return { evenCount, positiveCount, grate100Count };
  }

  multiTask(num1, num2, num3);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №4</h1>
      <p class="task__info">Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели - ${num1}, ${num2}, ${num3};
      <p class="task__desc">Кількість парних - ${evenCount}</p>
      <p class="task__desc">Кількість додатних - ${positiveCount}</p>
      <p class="task__desc">Кількість більших за 100 - ${grate100Count}</p>
    </div>
    `);
}