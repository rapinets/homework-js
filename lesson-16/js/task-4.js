'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен
 * містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
 * Реалізувати методи знаходження максимальної та мінімальної сум, які може видати
 * банкомат, та метод зняття деякої суми.
 */

  class TBankomat {
    #banknotes = {
      5: 0,
      10: 0,
      20: 0,
      50: 0,
      100: 0,
      200: 0,
    };

    constructor(banknotes) {
      this.#banknotes = banknotes;
    }

    get banknotes() {
      return this.#banknotes;
    }

    set banknotes(banknotes) {
      this.#banknotes = banknotes;
    }

    getMaxSum() {
      let maxSum = 0;
      for (const [key, value] of Object.entries(this.#banknotes)) {
        maxSum += key * value;
      }
      return maxSum;
    }

    getMinSum() {
      let minSum = 0;
      for (const [key, value] of Object.entries(this.#banknotes)) {
        if (value > 0) {
          minSum += +key;
          break;
        }
      }
      return minSum;
    }

    withdraw(sum) {
      if (sum > this.getMaxSum()) {
        return 'Недостатньо коштів у банкоматі';
      }

      const result = {};

      for (const [key, value] of Object.entries(this.#banknotes).reverse()) {
        if (sum >= key && value > 0) {
          const count = Math.min(Math.floor(sum / key), value);
          result[key] = count;
          sum -= key * count;
        }
      }

      if (sum > 0) {
        return 'Неможливо видати цю суму';
      }

      for (const [key, value] of Object.entries(result)) {
        this.#banknotes[key] -= value;
      }

      return `Видано: ${Object.entries(result).map(([key, value]) => `${value} купюр по ${key} грн`).join(', ')}`;

    }

    toString() {
      let result = 'Банкомат:\n';
      for (const [key, value] of Object.entries(this.#banknotes)) {
        result += `${key} грн: ${value};\n`;
      }
      return result;
    }

  }

  const sum1 = 2000;
  const sum2 = 552;
  const sum3 = 755;
  const bankomat = new TBankomat({ 5: 10, 10: 5, 20: 2, 50: 1, 100: 5, 200: 2 });

  const output1 = bankomat.withdraw(sum1);
  const output2 = bankomat.withdraw(sum2);
  const output3 = bankomat.withdraw(sum3);


  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 4.</h1>
    <p class="task__info">
       Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
    </p>
    <p class="task__desc">Зняти з банкомату ${sum1} грн: ${output1}</p>
    <p class="task__desc">Зняти з банкомату ${sum2} грн: ${output2}</p>
    <p class="task__desc">Зняти з банкомату ${sum3} грн: ${output3}</p>
    <p class="task__desc">Максимальна сума, яку може видати банкомат: ${bankomat.getMaxSum()} грн</p>
    <p class="task__desc">Мінімальна сума, яку може видати банкомат: ${bankomat.getMinSum()} грн</p>
    <p class="task__desc">Кількість купюр у банкоматі:</p>
    <p class="task__desc">${bankomat}</p>
  </div>
    
  `)


}

