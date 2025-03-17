'use strict'

if (confirm('Почати тестування?')) {
  let firstNum = 1;
  let lastNum = parseInt(prompt('Загадайте число та введіть в якому проміжку воно знаходиться від 1 до ...', '10'));

  let num, middleNum;
  let found = false;

  while (found === false && firstNum <= lastNum) {
    middleNum = Math.floor((firstNum + lastNum) / 2);
    if (confirm(`is ${middleNum}?`)) {
      found = true;
      num = middleNum;
    } else if (confirm(`is >${middleNum}?`)) {
      firstNum = middleNum + 1;
    } else {
      lastNum = middleNum - 1;
    }
  }

  alert(`Ви загадали число ${num}`);

}

