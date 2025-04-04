'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
   */

  const MSG = 'Таких цін не має';

  function getPriceList(length, max, min = 1) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      let randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;
  }

  const priceList = getPriceList(12, 10000);

  // Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн
  const pricesMore_1000 = (prices, val) => prices.filter(el => el > val) ? prices.filter(el => el > val) : MSG;
  // ===================================================================

  // Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн
  function getNumPrices(prices, val) {
    let newArr = [];
    prices.filter((el, i) => {
      if (el > val) {
        i += 1;
        newArr.push(i);
      }
    });
    return newArr;
  }
  // =====================================================================

  // Сформувати список з тих цін, які більші за попереднє значення
  function increasingPrices(prices) {
    return prices.filter((price, index) => index > 0 && price > prices[index - 1]);
  }
  // =========================================================================

  // Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
  function percentOfMax(arr) {
    const max = Math.max(...arr);
    let percentArr;
    return percentArr = arr.map(el => (el / max * 100).toFixed(2) + '%');
  }
  // ======================================================================

  // Підрахувати кількість змін цін
  const priceChange = (prices) => prices.reduce(((prevCount, el, ind) => el !== el[ind + 1] ? prevCount + 1 : prevCount), 0);
  // =======================================================================

  // Визначити, чи є ціна, що менше 1000
  const isPriceLess_1000 = (prices, val) => prices.some(el => el < val);
  // ==================================================================

  // Визначати, чи усі ціни більше за 1000
  const isPriceMore_1000 = (prices, val) => prices.every(el => el > val);
  // ============================================================================

  // Підрахувати кількість цін, що більше за 1000
  const priceCount = (prices, val) => prices.reduce(((prevCount, el) => el > val ? prevCount + 1 : prevCount), 0);
  // =====================================================================================

  // Підрахувати суму цін, що більше за 1000
  const sumPrices = (prices, val) => prices.reduce(((sum, el) => el > val ? sum += el : sum), 0);
  // =============================================================================================

  // Знайти першу ціну, що більше за 1000
  const findPrice = (prices, val) => prices.find(el => el > val);
  // =============================================================================================

  // Знайти індекс першої ціни, що більше за 1000
  const findIndex = (arr, val) => arr.findIndex(el => el > val) !== -1 ? arr.findIndex(el => el > val) : MSG;
  // ==========================================================================================================

  // Знайти останню ціну, що більше за 1000
  const findLastPrice = (prices, val) => prices.findLast(el => el > val);
  // ============================================================================================================

  // Знайти індекс першої ціни, що більше за 1000
  const findLastIndex = (arr, val) => arr.findLastIndex(el => el > val) !== -1 ? arr.findLastIndex(el => el > val) : MSG;
  // ==========================================================================================================

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №10</h1>
      <p class="task__info">Історія цін на цінні папери за рік - ${priceList}</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <ol class="task--mb-2">
        <li class="task--mb-2">
          Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн - ${pricesMore_1000(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн. - ${getNumPrices(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Сформувати список з тих цін, які більші за попереднє значення - ${increasingPrices(priceList)};
        </li>
        <li class="task--mb-2">
          Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального - ${percentOfMax(priceList)};
        </li>
        <li class="task--mb-2">
          Підрахувати кількість змін цін - ${priceChange(priceList)};
        </li>
        <li class="task--mb-2">
          Визначити, чи є ціна, що менше 1000 - ${isPriceLess_1000(priceList, 1000) ? 'Так є' : 'Не має'};
        </li>
        <li class="task--mb-2">
          Визначати, чи усі ціни більше за 1000 - ${isPriceMore_1000(priceList, 1000) ? 'Так' : 'Ні'};
        </li>
        <li class="task--mb-2">
          Підрахувати кількість цін, що більше за 1000 - ${priceCount(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Підрахувати суму цін, що більше за 1000 - ${sumPrices(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Знайти першу ціну, що більше за 1000 - ${findPrice(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Знайти індекс першої ціни, що більше за 1000 - ${findIndex(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Знайти останню ціну, що більше за 1000 -${findLastPrice(priceList, 1000)};
        </li>
        <li class="task--mb-2">
          Знайти індекс останньої ціни, що більше за 1000 - ${findLastIndex(priceList, 1000)};
        </li>
      </ol>
    </div>
    `);

}


