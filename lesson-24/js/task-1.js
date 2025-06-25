'use strict'

/**
 * Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)
 */

class PhoneNumber {
  #phoneNum
  constructor(phoneNum) {
    this.PhoneNum = phoneNum.trim()
  }

  get PhoneNum() {
    return this.#phoneNum
  }

  set PhoneNum(val) {
    const exp = /^\+?(?:\d{1,3})?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
    if (!exp.test(val)) throw new Error('Is not correct input!')
    this.#phoneNum = val
  }

  getOperator() {
    let str
    const expKyivstar = /^(?:.{3})?(067|068|096|098|077).*/
    const expVodafone = /^(?:.{3})?(050|066|075|095|099).*/
    const expLife = /^(?:.{3})?(063|073|093).*/
    if (expKyivstar.test(this.PhoneNum)) {
      str = 'Kyivstar'
    } else if (expVodafone.test(this.PhoneNum)) {
      str = 'Vodafone'
    } else if (expLife.test(this.PhoneNum)) {
      str = 'Life'
    } else {
      str = 'Incorrect input'
    }
    return str
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = `${this.PhoneNum} - ${this.getOperator()}`
        break;

      default:
        res = null
        break;
    }
    return res
  }
}


function render() {
  const val = document.getElementById('phone-number').value
  const phone = new PhoneNumber(val)
  const pEl = document.createElement('p')
  pEl.className = 'task__desc'
  pEl.textContent = phone
  document.getElementById('output').append(pEl)
}



