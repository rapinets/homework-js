'use strict'

if (confirm('Почати тестування?')) {
  let price = 1 + Math.floor(Math.random() * 100);

  let cash = parseInt(prompt(`Ціна за товар - ${price}. Внесіть відповідну суму:`, '0'));


  while (cash < price) {
    price -= cash;
    cash = parseInt(prompt(`Залишилось внести - ${price}`));
  }

  alert(`Дякую за покупку Ваша здача - ${cash - price}`);
}





