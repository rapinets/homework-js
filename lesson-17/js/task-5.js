'use strict'

if (confirm('Почати тестування?')) {
  /**
 * 5. Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), 
 * AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва 
 * класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
 * Приклад.
 * testsList= [
 * {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
 * {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
 * ]
 * Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
 * Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує 
 * якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. 
 * Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було 
 * створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
 */

  class TestData {
    constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
      this.firstNum = firstNum;
      this.secondNum = secondNum;
      this.operation = operation;
      this.userAnswer = userAnswer;
      this.correctAnswer = correctAnswer;
    }
  }

  class History {
    constructor() {
      this.testsList = [];
    }

    addTest(test) {
      this.testsList.push(test);
    }

    getHistory() {
      return this.testsList;
    }
  }

  class MultChecker {
    constructor() {
      this.history = new History();
    }

    generateTest() {
      const firstNum = Math.floor(Math.random() * 10);
      const secondNum = Math.floor(Math.random() * 10);
      const correctAnswer = firstNum * secondNum;
      const userAnswer = prompt(`What is ${firstNum} * ${secondNum}?`);
      const testData = new TestData(firstNum, secondNum, '*', userAnswer, correctAnswer);
      this.history.addTest(testData);
    }
  }

  class AddChecker {
    constructor() {
      this.history = new History();
    }

    generateTest() {
      const firstNum = Math.floor(Math.random() * 10);
      const secondNum = Math.floor(Math.random() * 10);
      const correctAnswer = firstNum + secondNum;
      const userAnswer = prompt(`What is ${firstNum} + ${secondNum}?`);
      const testData = new TestData(firstNum, secondNum, '+', userAnswer, correctAnswer);
      this.history.addTest(testData);
    }
  }

  class TestManager {
    constructor() {
      if (TestManager.instance) {
        return TestManager.instance;
      }
      this.history = new History();
      TestManager.instance = this;
    }

    startTest(numTests) {
      const multChecker = new MultChecker();
      const addChecker = new AddChecker();

      for (let i = 0; i < numTests; i++) {
        const randomTestType = Math.random() < 0.5 ? 'multiplication' : 'addition';
        if (randomTestType === 'multiplication') {
          multChecker.generateTest();
        } else {
          addChecker.generateTest();
        }
      }

      this.history.testsList = [...multChecker.history.getHistory(), ...addChecker.history.getHistory()];
    }

    getHistory() {
      return this.history.getHistory();
    }

    displayHistory() {
      const history = this.getHistory();
      history.forEach(test => {
        console.log(`Test: ${test.firstNum} ${test.operation} ${test.secondNum}, Your Answer: ${test.userAnswer}, Correct Answer: ${test.correctAnswer}`);
      });
    }
  }
  const testManager = new TestManager();
  const numTests = parseInt(prompt('How many tests would you like to take?'), 10);
  if (!isNaN(numTests) && numTests > 0) {
    testManager.startTest(numTests);
    testManager.displayHistory();
  }
  else {
    console.log('Invalid number of tests.');
  }
}


