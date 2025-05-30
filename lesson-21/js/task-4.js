'use strict'

/**
 * Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) 
 * та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі). 
 * Обробку усіх помилок зробити з використанням відповідних класів.
 */

class IsNotNumberError extends Error {
  constructor() {
    super()
    this.message = 'Must be a number'
    this.name = 'IsNotNumberError'
  }
}

class IsTooSmallNumberError extends Error {
  constructor(message) {
    super()
    this.message = message
    this.name = 'IsTooSmallNumberError'
  }
}

class IsTooHightNumberError extends Error {
  constructor(message) {
    super()
    this.message = message
    this.name = 'IsTooHightNumberError'
  }
}

class Evaluation {

  constructor(monthNum, score) {
    this.monthNum = monthNum
    this.score = score
  }

  assessmentCheck() {
    let scoreMsg = ''
    if (this.monthNum < 1) throw new IsTooSmallNumberError('The month number cannot be less than 1')
    if (this.monthNum > 12) throw new IsTooHightNumberError('The month number cannot be greater than 12.')
    if (isNaN(this.monthNum)) throw new IsNotNumberError()

    if (this.score < 1) throw new IsTooSmallNumberError('The score cannot be less than 1')
    if (this.score > 100) throw new IsTooHightNumberError('The score cannot be greater than 100')
    if (isNaN(this.score)) throw new IsNotNumberError()

    if (this.score >= 50) {
      scoreMsg = `You scored ${this.score} points, you don't need to retake`
    } else if (this.score < 50 && (this.monthNum < 12 && this.monthNum > 8 || this.monthNum > 1 && this.monthNum < 6)) {
      scoreMsg = `It's been ${this.monthNum} months now, there's still time to resubmit`
    } else {
      scoreMsg = 'The time for retakes is over, it\'s vacation time now'
    }

    return scoreMsg

  }

  render(containerSelector) {
    const pEl = document.createElement('p')
    pEl.className = 'task__desc'
    pEl.textContent = this.assessmentCheck()
    if (containerSelector) {
      document.querySelector(containerSelector).append(pEl)
    }
  }
}

try {
  const points = parseInt(prompt('Enter the number of points', '1'))
  const month = parseInt(prompt('Enter the month number', '1'))
  const evaluation = new Evaluation(month, points)
  evaluation.assessmentCheck()
  evaluation.render('.section')
} catch (error) {
  const pElErr = document.createElement('p')
  pElErr.className = 'error'
  document.querySelector('.section').append(pElErr)
  if (error instanceof IsNotNumberError) pElErr.textContent = error.message
  if (error instanceof IsTooHightNumberError) pElErr.textContent = error.message
  if (error instanceof IsTooSmallNumberError) pElErr.textContent = error.message
}



