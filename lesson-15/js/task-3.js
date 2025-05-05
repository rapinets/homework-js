'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 3. Розробити клас MultChecker для перевірки таблиці множення
 *  Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7): ,
 *  Кількість правильних відповідей: 0,
 *  Кількість неправильних відповідей: 0;
 *  Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)(){}
 *  Перевірка правильності вказаної відповіді(){}
 *  render - виведення інформації про тестування на екран(){}
 */

  class MultChecker {
    constructor(number) {
      this.number = number;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
    }

    generateExample() {
      const secondNumber = Math.floor(Math.random() * 10) + 1;
      const correctAnswer = this.number * secondNumber;

      return { secondNumber, correctAnswer };
    }

    checkAnswer(userAnswer, correctAnswer) {
      if (userAnswer === correctAnswer) {
        this.correctAnswers++;
        return true;
      } else {
        this.incorrectAnswers++;
        return false;
      }
    }

    render() {
      alert(`Число, яке перевіряємо: ${this.number}, Кількість правильних відповідей: ${this.correctAnswers}, Кількість неправильних відповідей: ${this.incorrectAnswers}`);
    }
  }

  const multChecker = new MultChecker(7);

  function getExample(obj, count = 10) {

    let resultMessage = '';

    while (count > 0) {
      const example = obj.generateExample();
      const userAnswer = parseInt(prompt(`Скільки буде ${obj.number} * ${example.secondNumber}?`), 10);
      const isCorrect = obj.checkAnswer(userAnswer, example.correctAnswer);
      resultMessage = isCorrect ? 'Правильно!' : `Неправильно! Правильна відповідь: ${example.correctAnswer}`;
      alert(resultMessage);
      count--;
    }
  }

  getExample(multChecker, 3);
  multChecker.render();

}



