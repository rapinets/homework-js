'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 3. Створити окремі функції, які для 4 чисел знаходять:
   * 1)суму;
   * 2)добуток;
   * 3)середнє арифметичне;
   * 4)мінімальне значення.
   */

  function getSum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return num1 + num2 + num3 + num4;
  }

  function getMult(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return num1 * num2 * num3 * num4;
  }

  function getAvr(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    return (num1 + num2 + num3 + num4) / 4;
  }

  function getMin(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    let min = num1;
    if (num2 < min) min = num2;
    if (num3 < min) min = num3;
    if (num4 < min) min = num4;

    return min;
  }

  const num1 = parseFloat(prompt('Введіть перше число', '0'));
  const num2 = parseFloat(prompt('Введіть друге число', '0'));
  const num3 = parseFloat(prompt('Введіть третє число', '0'));
  const num4 = parseFloat(prompt('Введіть четверте число', '0'));

  const sum = getSum(num1, num2, num3, num4);

  const multiplication = getMult(num1, num2, num3, num4);

  const avr = getAvr(num1, num2, num3, num4).toFixed(2);

  const min = getMin(num1, num2, num3, num4);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №3</h1>
      <p class="task__info">Створити окремі функції, які для 4 чисел знаходять:</p>
        <ol>
          <li>суму;</li>
          <li>добуток;</li>
          <li>середнє арифметичне;</li>
          <li>мінімальне значення.</li>
        </ol>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Ви ввели - ${num1}, ${num2}, ${num3}, ${num4};
      <p class="task__desc">Сума чисел - ${sum}</p>
      <p class="task__desc">Добуток чисел - ${multiplication}</p>
      <p class="task__desc">Середнє арифметичне чисел - ${avr}</p>
      <p class="task__desc">Мінімальне значення - ${min}</p>
    </div>
    `);

}