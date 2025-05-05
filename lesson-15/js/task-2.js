'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 2. Створити об’єкт «Авто». 
 * Авто = {
 *  Марка: '',
 *  Розмір бака: 0,
 *  Кількість наявних літрів: 0,
 *  Кількість місць: 0,
 *  Кількість пасажирів: 0,
 *  Заправка на вказану кількість літрів: function (liters) {}
 *  Виведення кількості пасажирів: function () {},
 *  Додавання пасажирів: function (passengers) {},
 *  Висадка пасажирів: function (passengers) {},
 */

  function car(brand, tankSize, availableLiters, seats, passengers) {
    return {
      brand: brand,
      tankSize: tankSize,
      availableLiters: availableLiters,
      seats: seats,
      passengers: passengers,

      refuel(liters) {
        if (this.availableLiters + liters <= this.tankSize) {
          this.availableLiters += liters;
          console.log(`Заправлено ${liters} літрів. Тепер на вашій ${this.brand} ${this.availableLiters} літрів.`);
        } else {
          console.log(`Перевищено максимальний обсяг бака на вашій ${this.brand}.`);
        }
      },

      showPassengers() {
        console.log(`Кількість пасажирів у вашій ${this.brand}: ${this.passengers}`);
      },

      addPassengers(passengers) {
        if (this.passengers + passengers <= this.seats) {
          this.passengers += passengers;
          console.log(`Додано ${passengers} пасажирів. Тепер у вашій ${this.brand} ${this.passengers} пасажирів.`);
        } else {
          console.log(`Перевищено максимальну кількість місць у вашій ${this.brand}.`);
        }
      },

      dropPassengers(passengers) {
        if (this.passengers - passengers >= 0) {
          this.passengers -= passengers;
          console.log(`Висаджено ${passengers} пасажирів. Тепер у вашій ${this.brand} ${this.passengers} пасажирів.`);
        } else {
          console.log(`Неможливо висадити більше пасажирів, ніж є в вашій ${this.brand}.`);
        }
      }
    };
  }

  const car1 = car('Toyota', 50, 0, 5, 0);
  const car2 = car('Honda', 40, 20, 4, 0);
  const car3 = car('Ford', 60, 0, 6, 3);

  car1.refuel(20);
  car1.addPassengers(3);
  car1.showPassengers();
  car1.addPassengers(3);
  car1.dropPassengers(2);
  car1.showPassengers();

  car2.refuel(20);
  car2.addPassengers(3);
  car2.showPassengers();
  car2.dropPassengers(2);
  car2.showPassengers();

  car3.refuel(25);
  car3.addPassengers(3);
  car3.showPassengers();
  car3.dropPassengers(4);
  car3.showPassengers();

}

