'use strict'

if (confirm('Почати тестування?')) {
  /**
 * 2. Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
 */

  class SingletonCar {
    constructor(driver, brand, number) {
      if (SingletonCar.instance) {
        return SingletonCar.instance;
      }
      this.driver = driver;
      this.brand = brand;
      this.number = number;
      SingletonCar.instance = this;
    }

    getInfo() {
      return `Driver: ${this.driver}, Brand: ${this.brand}, Number: ${this.number}`;
    }
  }

  const car1 = new SingletonCar('John Doe', 'Toyota', 'ABC123');
  const car2 = new SingletonCar('Jane Smith', 'Honda', 'XYZ789');

  console.log(car1.getInfo()); // Driver: John Doe, Brand: Toyota, Number: ABC123
  console.log(car2.getInfo()); // Driver: John Doe, Brand: Toyota, Number: ABC123
}

