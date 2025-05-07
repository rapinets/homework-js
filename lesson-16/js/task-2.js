'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися
 * у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси,
 * вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях
 * збільшиться на 100. Курс долара зберігати в окремому полі. 
 */

  class TMoney {
    #dollarAmount = 0;
    #exchangeRate = 0;

    constructor(grnAmount, exchangeRate) {
      this.#exchangeRate = exchangeRate;
      this.#dollarAmount = grnAmount / exchangeRate;
    }

    get DollarAmount() {
      return this.#dollarAmount;
    }

    get ExchangeRate() {
      return this.#exchangeRate;
    }

    set DollarAmount(value) {
      if (value < 0) {
        throw new Error('Сума не може бути від\'ємною!');
      }
      this.#dollarAmount = value;
    }

    set ExchangeRate(value) {
      if (value <= 0) {
        throw new Error('Курс долара не може бути меншим або рівним нулю!');
      }
      this.#exchangeRate = value;
    }

    addMoney(amount) {
      if (amount < 0) {
        throw new Error('Сума не може бути від\'ємною!');
      }
      this.#dollarAmount += amount / this.#exchangeRate;
    }

    withdrawMoney(amount) {
      if (amount < 0) {
        throw new Error('Сума не може бути від\'ємною!');
      }
      this.#dollarAmount -= amount / this.#exchangeRate;
    }

    getDollarRateForIncreaseBy100() {
      if (this.#dollarAmount <= 0) {
        throw new Error('Сума не може бути нульовою або від\'ємною!');
      }
      return (this.#dollarAmount * this.#exchangeRate + 100) / this.#dollarAmount;
    }

    toString() {
      return `Сума в доларах: ${this.#dollarAmount.toFixed(2)}\nКурс долара: ${this.#exchangeRate.toFixed(2)}`;
    }
  }

  const grnAmount1 = 2000;
  const grnAmount2 = 300;

  const money = new TMoney(10000, 41.05);

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 2.</h1>
    <p class="task__info">
      Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися
      у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси,
      вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях
      збільшиться на 100. Курс долара зберігати в окремому полі.
    </p>
    <p class="task__desc">
      На рахунку - ${money}
    </p>
  `)

  money.addMoney(grnAmount1);

  document.writeln(`
    <p class="task__desc">
      Додали до рахунку ${grnAmount1} грн: ${money}
    </p>
  `)

  money.withdrawMoney(grnAmount2);

  document.writeln(`
    <p class="task__desc">
      Вилучили з рахунку ${grnAmount2} грн: ${money}
    </p>
  `)

  document.writeln(`
    <p class="task__desc">
      Курс долара при якому сума в гривнях збільшення на 100: ${money.getDollarRateForIncreaseBy100().toFixed(2)}
    </p>
    </div>
  `)

}
