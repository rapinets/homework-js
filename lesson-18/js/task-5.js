'use strict'

/**
 * Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)
 */

function createTable(rowsNum = 3, colsNum = 4) {
  const tableSection = document.querySelector('.table');
  const tableEl = document.createElement('table');
  for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
    const trEl = document.createElement('tr');
    for (let colIndex = 0; colIndex < colsNum; colIndex++) {
      const tdEl = document.createElement('td');
      tdEl.innerText = Math.random().toFixed(3);
      trEl.append(tdEl);
    }
    tableEl.append(trEl);
  }
  tableSection.append(tableEl);
}

window.onload = function () {
  createTable();
}