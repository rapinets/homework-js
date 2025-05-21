'use strict'

/**
 * Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично 
 * заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), 
 * усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
 */

function inputNumbers(e) {
  const input = e.target;

  let inputVal = parseFloat(input.value);
  const inputParent = input.parentElement;

  let prevParent = inputParent.previousElementSibling;
  let temp = inputVal;
  while (prevParent) {
    const prevInput = prevParent.querySelector('input');
    prevInput.value = --temp;
    prevParent = prevParent.previousElementSibling;
  }

  let nextParent = inputParent.nextElementSibling;
  temp = inputVal;
  while (nextParent) {
    const nextInput = nextParent.querySelector('input');
    nextInput.value = ++temp;
    nextParent = nextParent.nextElementSibling;
  }

}

const inputs = document.querySelectorAll('input');
for (const input of inputs) {
  input.addEventListener('input', inputNumbers);
}