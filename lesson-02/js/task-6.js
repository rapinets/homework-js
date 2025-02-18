'use strict'

// get product cost and quantity
let productCost1 = (parseFloat(prompt('Введіть ціну товару №1', '0'))).toFixed(2);
isNaN(productCost1) || productCost1 < 0 ? productCost1 = 0 : productCost1;
let productQuantity1 = parseInt(prompt('Введіть кількість товару №1', '0'));
isNaN(productQuantity1) || productQuantity1 < 0 ? productQuantity1 = 0 : productQuantity1;

let productCost2 = (parseFloat(prompt('Введіть ціну товару №2', '0'))).toFixed(2);
isNaN(productCost2) || productCost2 < 0 ? productCost2 = 0 : productCost2;
let productQuantity2 = parseInt(prompt('Введіть кількість товару №1', '0'));
isNaN(productQuantity2) || productQuantity2 < 0 ? productQuantity2 = 0 : productQuantity2;

let productCost3 = (parseFloat(prompt('Введіть ціну товару №3', '0'))).toFixed(2);
isNaN(productCost3) || productCost3 < 0 ? productCost3 = 0 : productCost3;
let productQuantity3 = parseInt(prompt('Введіть кількість товару №1', '0'));
isNaN(productQuantity3) || productQuantity3 < 0 ? productQuantity3 = 0 : productQuantity3;


// calculating the total amount for the product
const totalProduct1 = (productCost1 * productQuantity1).toFixed(2);
const totalProduct2 = (productCost2 * productQuantity2).toFixed(2);
const totalProduct3 = (productCost3 * productQuantity3).toFixed(2);

// total
const total = (+totalProduct1) + (+totalProduct2) + (+totalProduct3);

// output
document.write(`
  <div class="task__container">
      <h1 class="task__title">Задача №6</h1>
      <p class="task__info">
        З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо
        та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
      </p>
      <h2 class="task__sub-title">Введені дані:</h2>
      <p class="task__desc">Товар №1 ціна - ${productCost1} кількість - ${productQuantity1}</p>
      <p class="task__desc">Товар №2 ціна - ${productCost2} кількість - ${productQuantity2}</p>
      <p class="task__desc">Товар №3 ціна - ${productCost3} кількість - ${productQuantity3}</p>
      <h2 class="task__sub-title">Фіксальний чек</h2>
      <div class="check check--mb">
        <div class="check__header">
          <span>Фіксальний чек №00000</span>
          <span>Каса №1</span>
        </div>
        <div class="check__body">
          <ul class="check__list">
            <li class="check__item">
              <div class="check__product">Товар №1</div>
              <div class="check__price">
                <span>${productCost1} x ${productQuantity1}</span>
                <span>${totalProduct1}</span>
              </div>
            </li>
            <li class="check__item">
              <div class="check__product">Товар №2</div>
              <div class="check__price">
                <span>${productCost2} x ${productQuantity2}</span>
                <span>${totalProduct2}</span>
              </div>
            </li>
            <li class="check__item">
              <div class="check__product">Товар №3</div>
              <div class="check__price">
                <span>${productCost3} x ${productQuantity3}</span>
                <span>${totalProduct3}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="check__footer">
          <span>Всього:</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  `);