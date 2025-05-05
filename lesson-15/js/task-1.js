'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
 * Тир	
 * Поля(властивості) - Масив, у якому зберігається поле з зайцями
 * Методи - (дії) Метод пострілу (задається позиція пострілу) 
 *        - Виведення ігрового поля
 */

  const shootingGallery = {
    field: [],

    init() {
      this.field = this.createField(5, 5);
    },

    createField(rows, cols) {
      const field = [];

      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(Math.floor(Math.random() * 2));
        }
        field.push(row);
      }

      return field;
    },

    shoot(x, y) {
      if (this.field[x][y] === 1) {
        console.log('Попадання!');
        this.field[x][y] = 0;
      } else {
        console.log('Промах!');
      }
    },

    displayField() {
      console.table(this.field);
    },
  }

  shootingGallery.init();
  shootingGallery.displayField();
  shootingGallery.shoot(0, 0);
  shootingGallery.displayField();
  shootingGallery.shoot(1, 1);

}

