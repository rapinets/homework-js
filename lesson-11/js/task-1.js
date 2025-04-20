'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
   */

  // two-dimensional array generation ===============================================
  function generateRandomTable(rowsNumber, colsNumber, minValue = 1, maxValue = 10) {
    const table = [];
    for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
      table.push([]);
      for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
        const randNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
        table[rowIndex].push(randNum);
      }
    }
    return table;
  }


  const table = generateRandomTable(8, 8);
  console.log(table);

  // function to calculate the sum of a two-dimensional array ===============================================
  function getTableSum(table, rowLength, colLength, rowIndex = 0, colIndex = 0, rowStep = 1, colStep = 1) {
    let sum = 0;
    for (let i = rowIndex; i < rowLength; i += rowStep) {
      for (let j = colIndex; j < colLength; j += colStep) {
        sum += table[i][j]
      }
    }
    return sum;
  }

  // ========================================================================================
  // 1) номери рядків від 0 до половини, стовпці від 0 до половини ==========================
  // ========================================================================================

  const firstQuarterSum = (table) => {
    const rowsLength = Math.floor(table.length / 2);
    const colsLength = Math.floor(table[0].length / 2);
    return getTableSum(table, rowsLength, colsLength);
  }

  console.log(`1 Сума елементів рядків від 0 до половини, стовпці від 0 до половини: ${firstQuarterSum(table)}`);

  // =======================================================================================
  // 2) номери рядків від 0 до половини, стовпці від половини до кінця =====================
  // =======================================================================================

  const secondQuarterSum = (table) => {
    const rowsLength = Math.floor(table.length / 2);
    const colsLength = table[0].length;
    const colIndex = Math.floor(table[0].length / 2);
    const rowIndex = 0;
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex);
  }

  console.log(`2 Сума елементів від 0 до половини, стовпці від половини до кінця: ${secondQuarterSum(table)}`);

  // =======================================================================================
  // 3) номери рядків (від половини до кінця, стовпці від 0 до половини ====================
  // =======================================================================================

  const thirdQuarterSum = (table) => {
    const rowsLength = table.length;
    const colsLength = Math.floor(table[0].length / 2);
    const colIndex = 0;
    const rowIndex = Math.floor(table.length / 2);
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex);
  }

  console.log(`3 Сума елементів від половини до кінця, стовпці від 0 до половини: ${thirdQuarterSum(table)}`);

  // ======================================================================================
  // 4) номери рядків від половини до кінця , стовпці від половини до кінця ===============
  // ======================================================================================

  const fourthQuarterSum = (table) => {
    const rowsLength = table.length;
    const colsLength = table[0].length;
    const colIndex = Math.floor(table[0].length / 2);
    const rowIndex = Math.floor(table.length / 2);
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex);
  }

  console.log(`4 Сума елементів від половини до кінця , стовпці від половини до кінця: ${fourthQuarterSum(table)}`);

  // ======================================================================================
  // 5) Суму парних рядків ================================================================
  // ======================================================================================

  const evenRowsSum = (table) => {
    const rowsLength = table.length;
    const colsLength = table[0].length;
    const colIndex = 0;
    const rowIndex = 0;
    const rowStep = 2;
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex, rowStep);
  }

  console.log(`5 Сума елементів парних рядків: ${evenRowsSum(table)}`);

  // ======================================================================================
  // 6) Суму непарних стовпців ============================================================
  // ======================================================================================

  const oddColsSum = (table) => {
    const rowsLength = table.length;
    const colsLength = table[0].length;
    const colIndex = 1;
    const rowIndex = 0;
    const rowStep = 1;
    const colStep = 2;
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex, rowStep, colStep);
  }

  console.log(`6 Сума елементів непарних стовпців: ${oddColsSum(table)}`);

  // =======================================================================================
  // 7) У парних рядках – непарні стовпці, у непарних – парні. =============================
  // =======================================================================================

  const evenRowsOddCols = (table) => {
    const rowsLength = table.length;
    const colsLength = table[0].length;
    const colIndex = 1;
    const rowIndex = 0;
    const rowStep = 2;
    const colStep = 2;
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex, rowStep, colStep);
  }

  console.log(`7.1 Сума у парних рядках – непарні стовпці: ${evenRowsOddCols(table)}`);

  const oddRowsEvenCols = (table) => {
    const rowsLength = table.length;
    const colsLength = table[0].length;
    const colIndex = 0;
    const rowIndex = 1;
    const rowStep = 2;
    const colStep = 2;
    return getTableSum(table, rowsLength, colsLength, rowIndex, colIndex, rowStep, colStep);
  }

  console.log(`7.2 Сума у непарних – парні: ${oddRowsEvenCols(table)}`);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Homework #11</h1>
      <p class="task__info">Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)</p>
      <ol>
        <li>номери рядків від 0 до половини, стовпці від 0 до половини</li>
        <li>номери рядків від 0 до половини, стовпці від половини до кінця</li>
        <li>номери рядків (від половини до кінця, стовпці від 0 до половини</li>
        <li>номери рядків від половини до кінця , стовпці від половини до кінця</li>
        <li>Суму парних рядків</li>
        <li>Суму непарних стовпців</li>
        <li>У парних рядках – непарні стовпці, у непарних – парні</li>
      </ol>
      <h2 class="task__sub-title">Розв'язок:</h2>
      <p class="task__desc">в консолі</p>
    </div>
    `);

}



