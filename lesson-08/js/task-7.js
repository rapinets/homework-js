'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
   * 1) за весь рік;
   * 2) у першій половині року;
   * 3) у другій половині року;
   * 4) за літо;
   * 5) за ІІ квартал;
   * 6) за парні місяці (з парними номерами);
   * 7) за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
   */

  const incomesList = [1440, 1200, 890, 870, 600, 590, 580, 590, 610, 750, 900, 1260];

  function getIncomeSum(incomesList, startMonthNumber, endMonthNumber) {
    let sum = 0
    for (let month = startMonthNumber; month <= endMonthNumber; month++) {
      sum += incomesList[month - 1];
    }
    return sum
  }

  function getEvenMonthList(incomesList) {
    let arr = [];
    for (let i = 0; i < 12; i++) {
      if ((i + 1) % 2 === 0) {
        arr.push(incomesList[i]);
      }

    }
    return arr;
  }

  function getFirstOfSeasonList(incomesList) {
    let arr = [];
    for (let i = 2; i < 12; i += 3) {
      arr.push(incomesList[i]);
    }
    return arr;
  }

  const evenMonthList = getEvenMonthList(incomesList);
  const firstOfSeasonList = getFirstOfSeasonList(incomesList);

  const sumOfYear = getIncomeSum(incomesList, 1, 12);
  const sumFirstHalfOfYear = getIncomeSum(incomesList, 1, 6);
  const sumSecondHalfOfYear = getIncomeSum(incomesList, 7, 12);
  const sumOfSummer = getIncomeSum(incomesList, 6, 8);
  const sumOfSecondQuartel = getIncomeSum(incomesList, 4, 6);
  const sumOfEvenMonth = getIncomeSum(evenMonthList, 1, 6);
  const sumOfFirstOfSeason = getIncomeSum(firstOfSeasonList, 1, 4);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №7</h1>
      <p class="task__info">Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:</p>
        <ol>
          <li>за весь рік;</li>
          <li>у першій половині року;</li>
          <li>у другій половині року;</li>
          <li>за літо;</li>
          <li>за ІІ квартал;</li>
          <li>за парні місяці (з парними номерами);</li>
          <li>за місяці, які є початковими у сезоні (весна, літо, осінь, зима).</li>
        </ol>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__info">Платіжки за рік: ${incomesList}</p>
      <p class="task__desc">Сумарнуа кількість грошей за весь рік - ${sumOfYear}</p>
      <p class="task__desc">Сумарнуа кількість грошей у першій половині року - ${sumFirstHalfOfYear}</p>
      <p class="task__desc">Сумарнуа кількість грошей у другій половині року - ${sumSecondHalfOfYear}</p>
      <p class="task__desc">Сумарнуа кількість грошей за літо - ${sumOfSummer}</p>
      <p class="task__desc">Сумарнуа кількість грошей за ІІ квартал; - ${sumOfSecondQuartel}</p>
      <p class="task__desc">Сумарнуа кількість грошей за парні місяці (з парними номерами) - ${sumOfEvenMonth}</p>
      <p class="task__desc">Сумарнуа кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима) - ${sumOfFirstOfSeason}</p>
    </div>
    `);

}

