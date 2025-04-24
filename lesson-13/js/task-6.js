'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за 
 * окремими викликами видавати по одну букву наперед заданого слова. З використанням нього
 * розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач
 * вводить переклад цього слова. Підрахувати кількість вгаданих букв.
 */

  // Iterator function for gradually returning the letters of a word
  function createLetterIterator(word) {
    let index = 0;
    return function () {
      if (index < word.length) {
        return word[index++];
      }
      return null; // Return null if the letters are exhausted
    };
  }

  // The game "Translator"
  function translatorGame(word, description) {
    const iterator = createLetterIterator(word);
    let guessedLetters = 0;

    alert(`Опис слова: ${description}`);
    alert(`Слово має ${word.length} букв. Введіть переклад по одній букві.`);

    for (let i = 0; i < word.length; i++) {
      const letter = iterator();
      const userInput = prompt(`Введіть букву ${i + 1}:`).toLowerCase();

      if (userInput === letter) {
        guessedLetters++;
        alert("Вірно!");
      } else {
        alert(`Невірно! Правильна буква: ${letter}`);
      }
    }

    alert(`Гра завершена! Ви вгадали ${guessedLetters} з ${word.length} букв.`);
  }


  translatorGame("apple", "Фрукт, який зазвичай червоний, зелений або жовтий, Ньютону впало на голову.");
}

