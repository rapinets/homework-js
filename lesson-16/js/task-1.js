'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата
 * представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення
 * дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за
 * допомогою методу  toString.
 */

  class TDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
      this.Year = year;
      this.Month = month;
      this.Day = day;
    }

    get Day() {
      return this.#day;
    }

    set Day(value) {
      if (value < 1 || value > this.getDaysInMonth()) {
        throw new Error('Invalid day value');
      }
      this.#day = value;
    }

    get Month() {
      return this.#month;
    }

    set Month(value) {
      if (value < 1 || value > 12) {
        throw new Error('Invalid month value');
      }
      this.#month = value;
    }

    get Year() {
      return this.#year;
    }

    set Year(value) {
      if (value < 0) {
        throw new Error('Invalid year value');
      }
      this.#year = value;
    }

    isLeapYear() {
      return (this.Year % 4 === 0 && this.Year % 100 !== 0) || (this.Year % 400 === 0);
    }

    getDaysInMonth() {
      let daysInMonth;
      switch (this.Month) {
        case 4:
        case 6:
        case 9:
        case 11:
          daysInMonth = 30;
          break;
        case 2:
          daysInMonth = this.isLeapYear() ? 29 : 28;
          break;
        default:
          daysInMonth = 31;
      }
      return daysInMonth;
    }

    addDays(days) {
      let newDay = this.Day + days;
      while (newDay > this.getDaysInMonth()) {
        newDay -= this.getDaysInMonth();
        this.Month++;
        if (this.Month > 12) {
          this.Month = 1;
          this.Year++;
        }
      }
      this.Day = newDay;
    }

    subtractDays(days) {
      let newDay = this.Day - days;
      while (newDay < 1) {
        this.Month--;
        if (this.Month < 1) {
          this.Month = 12;
          this.Year--;
        }
        newDay += this.getDaysInMonth();
      }
      this.Day = newDay;
    }

    addMonths(months) {
      let newMonth = this.Month + months;
      while (newMonth > 12) {
        newMonth -= 12;
        this.Year++;
      }
      this.Month = newMonth;
    }

    subtractMonths(months) {
      this.Month -= months;
      while (this.Month < 1) {
        this.Month += 12;
        this.Year--;
      }
    }

    addYears(years) {
      this.Year += years;
    }

    subtractYears(years) {
      this.Year -= years;
    }


    toString() {
      return `${this.Day}.${this.Month}.${this.Year}`;
    }

  }

  const addNumDays = 3; const subNumDays = 5;
  const addNumMonths = 3; const subNumMonths = 1; const addNumYears = 1; const subNumYears = 2;

  const date = new TDate(28, 2, 2025);

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 1</h1>
    <p class="task__info">
      Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата
      представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення
      дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за
      допомогою методу  toString.
    </p>
    <p class="task__desc">
      Результат: ${date}
    </p>
  `)

  date.addDays(addNumDays);

  document.writeln(`
    <p class="task__desc">
      Додамо до дати ${addNumDays} дні: ${date}
    </p>
  `)

  date.subtractDays(subNumDays);

  document.writeln(`
    <p class="task__desc">
      Віднімемо від дати ${subNumDays} дні: ${date}
    </p>
  `)

  date.addMonths(addNumMonths);

  document.writeln(`
    <p class="task__desc">
      Додамо до дати ${addNumMonths} місяці: ${date}
    </p>
  `)

  date.subtractMonths(subNumMonths);

  document.writeln(`
    <p class="task__desc">
      Віднімемо від дати ${subNumMonths} місяці: ${date}
    </p>
  `)

  date.addYears(addNumYears);

  document.writeln(`
    <p class="task__desc">
      Додамо до дати ${addNumYears} роки: ${date}
    </p>
  `)

  date.subtractYears(subNumYears);

  document.writeln(`
    <p class="task__desc">
      Віднімемо від дати ${subNumYears} роки: ${date}
    </p>
  </div>
`)
}




