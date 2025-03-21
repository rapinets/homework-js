'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
   */

  const userCash = parseFloat(prompt('Введіть кількість грошей', '0'));

  const productsPrices = [1000, 20, 31];
  const productsTitles = ['cheese', 'juice', 'bread'];

  function userCart(priceArray, productArr, userCash) {
    let totalPrice = 0;
    let cartArr = [];
    for (let i = 0; i < priceArray.length; i++) {
      if (totalPrice + priceArray[i] <= userCash) {
        totalPrice += priceArray[i];
        cartArr.push(productArr[i]);
      }
    }

    return cartArr;
  }

  const groceryCart = userCart(productsPrices, productsTitles, userCash);



  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №7</h1>
      <p class="task__info">Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">В наявності: ${productsTitles[0]} - ${productsPrices[0]}, ${productsTitles[1]} - ${productsPrices[1]}, ${productsTitles[2]} - ${productsPrices[2]};</p>
      <p class="task__desc">Ваша сума - ${userCash};</p>
      <p class="task__desc">Вам вистачило грошей на: ${groceryCart}</p>
    </div>
    `);

}

