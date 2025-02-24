'use strict'

const productPrice = parseFloat(prompt('Введіть ціну товару'));
const userMoney = parseFloat(prompt('Кількість грошей'));
if (isNaN(productPrice) && isNaN(userMoney) || productPrice < 0 && userMoney < 0) {
  alert('Ви ввели не коректні дані');
}
if (userMoney < productPrice) alert('Недостатньо коштів');
else {
  alert('Вітаю з покупкою');
  if (userMoney - productPrice >= 4) alert('Рекомендуємо купити лотерею');
}