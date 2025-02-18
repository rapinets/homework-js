'use strict'

// get the price for one product and the quantity of the product
let productCost = parseFloat(prompt('Введітьціну товару', '0')).toFixed(2);
let quantityProduct = parseInt(prompt('Введіть кількість товару', '0'));

// value added tax
const vat = 5;

// checking for correct data entry
if (isNaN(productCost) && isNaN(quantityProduct) || productCost < 0 && quantityProduct < 0) {
  productCost = 0;
  quantityProduct = 0;
}

// calculation of the total cost
const totalCost = productCost * quantityProduct;

// calculation tax
const tax = ((totalCost / 100) * vat).toFixed(2);

// output
document.write(`
  
  <div class="task__container">
    <h1 class="task__title">Задача №3</h1>
    <p class="task__desc">Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).</p>
    <p class="task__desc">Загальна вартість всіх товарів: ${totalCost}</p>

    <p class="task__desc">ПДВ: ${tax}</p>
  </div>
  
  `);
