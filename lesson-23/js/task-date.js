'use strict'

/**
 * Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
 */

function minutesOnSite() {
  const start = new Date()
  setInterval(() => {
    const now = new Date()
    let minutes = Math.floor((now - start) / 60000)
    console.log(`You have been on the site for ${minutes} minute(s).`)
    console.log('====================================================')
  }, 60000)
}

setTimeout(() => { console.log('Задача 1. Виводити на екран скільки хвилин користувач вже на сайті') }, 60000)
minutesOnSite()

/**
 * Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
 */

function inProcedure(startTime) {
  const start = new Date(startTime)
  const end = new Date(start.getTime() + 30 * 60000)
  return new Date() <= end
}

console.log('Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває');
console.log(inProcedure(new Date()));
console.log('===================================================================');

/**
 * Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
 */

function workingTime() {
  const startDay = new Date().setHours(8, 0, 0)
  const currentTime = new Date().getTime()
  const endDay = new Date().setHours(17, 0, 0)

  return { startDay, currentTime, endDay }
}

function timeToEndWorkingDay() {
  const { startDay, currentTime, endDay } = workingTime()
  if (startDay > currentTime) {
    console.log('The workday hasn\'t started yet, drink some coffee')
  } else if (endDay < currentTime) {
    console.log('The workday is over, you can have a beer')
  } else {
    const diff = endDay - currentTime
    const diffH = Math.floor(diff / 3600000)
    const diffM = Math.floor(diff % 3600000 / 60000)
    console.log(`${diffH} hours and ${diffM} minutes left until the end of the workday`)
  }
}
console.log('Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)')
timeToEndWorkingDay()
console.log('=================================================================')

/**
 * Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
 */

function dayAtWeek(year, month, day) {
  const date = new Date(year, month, day)
  const findDay = date.setMonth(date.getMonth() - 1)

  const now = new Date()
  const currentDay = now.getDay()

  const diff = currentDay === 0 ? 6 : currentDay - 1

  const startWeek = new Date()
  startWeek.setDate(now.getDate() - diff)
  startWeek.setHours(0, 0, 0, 0)

  const endWeek = new Date()
  endWeek.setDate(startWeek.getDay() + 7)
  endWeek.setHours(23, 59, 59, 999)

  if (findDay >= startWeek && findDay <= endWeek) {
    console.log(true);

  } else {
    console.log(false);

  }
}

console.log('Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)')
dayAtWeek(2025, 6, 3)
console.log('=============================================================')

/**
 * Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
 */

function timeToStartWorkDay() {
  const { startDay, currentTime, endDay } = workingTime()
  if (startDay < currentTime && endDay > currentTime) console.log('Welcome to the website')
  if (currentTime < startDay) {
    const diff = startDay - currentTime
    const diffM = Math.floor(diff % 3600000 / 60000)
    console.log(`${diffM} minute(s) left until start time`)
  } else {
    console.log('Working hours are over, we are waiting for you tomorrow')
  }
}

console.log('Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).')
timeToStartWorkDay()
console.log('==============================================================')

/**
 * Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
 */

function timeLocale() {
  const date = new Date()
  const timeAu = date.toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney' })
  const timeFr = date.toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' })
  const timeGb = date.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })
  console.log(`London - ${timeGb}\nParis - ${timeFr}\nSidney - ${timeAu}`)
}

console.log('Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.')
timeLocale()
console.log('========================================================')

/**
 * Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
 */

const listStudents = [
  {
    firstName: 'Ivan',
    birthDate: '1990-8-5'
  },
  {
    firstName: 'Vasyl',
    birthDate: '1991-2-2'
  },
  {
    firstName: 'Diana',
    birthDate: '1991-4-6'
  },
  {
    firstName: 'Alina',
    birthDate: '1990-2-16'
  }
]

function getOlderStudent(list) {
  let olderStudent, maxAge = Infinity
  for (const student of list) {
    let date = new Date(student.birthDate).getTime()
    if (date < maxAge) {
      maxAge = date
      olderStudent = student
    }
  }
  console.log(`The oldest student - ${olderStudent.firstName}`)
}

console.log('Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента')
getOlderStudent(listStudents)
console.log('================================================================')

/**
 * Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
 */

function timeAfterMoveMouse() {
  const start = new Date().getTime()

  function hendle() {
    const diffSec = Math.round(((new Date().getTime()) - start) / 1000)
    console.log('Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.')
    console.log(`Mouse movement ${diffSec} second(s) after entering the page`)
    window.removeEventListener('mousemove', hendle)
  }
  window.addEventListener('mousemove', hendle)

}

timeAfterMoveMouse()
console.log('===================================================================')

/**
 * Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
 */

function isLeave(leaveStart, duration = 200) {
  const startLeave = new Date(leaveStart)
  const endLeave = new Date(leaveStart)
  endLeave.setDate(endLeave.getDate() + duration)
  const now = new Date()

  if (now < startLeave.getTime()) {
    console.log('The vacation hasn\'t started yet.')
  } else if (now >= startLeave.getTime() && now <= endLeave) {
    console.log('Currently on vacation.')
  } else {
    console.log('The vacation is already over.')
  }
}

console.log('Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.')
isLeave('2025-3-29')
console.log('==========================================================')

/**
 * Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
 */

function expirationDate(data, expirationDate) {
  const dateOfManufacture = new Date()
  dateOfManufacture.setFullYear(data[0], data[1] - 1, data[2])
  const dateExpiration = new Date()
  dateExpiration.setFullYear(data[0], data[1] - 1, data[2])
  dateExpiration.setDate(dateExpiration.getDate() + expirationDate)
  const now = new Date()
  if (now > dateExpiration) {
    console.log('Expired')
  } else {
    const diff = (dateExpiration - now) / 86400000
    console.log(`${diff} day(s) left until expiration date`)
  }
}

console.log('Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.')
expirationDate([2025, 6, 1], 30)
console.log('========================================================')

/**
 * Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
 */

const numList = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 800) + 1)
console.log(numList)

function sortBubble(arr) {
  let change, endIndex = arr.length
  do {
    change = false
    for (let i = 1; i < endIndex; i++) {

      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = tmp
        change = true
      }
    }
    endIndex--
  } while (change)

  return arr
}

function insertSort(arr) {
  for (let k = 1; k < arr.length; k++) {
    const currenrEl = arr[k]
    let i = k - 1
    while (i >= 0 && arr[i] > currenrEl) {
      arr[i + 1] = arr[i]
      i--
    }
    arr[i + 1] = currenrEl
  }
  return arr
}

const startSortBubble = new Date()
sortBubble(numList)
const endSortBubble = new Date()
const diffSortBubble = endSortBubble - startSortBubble

const startInsertSort = new Date()
insertSort(numList)
const endInsertSort = new Date()
const diffInsertSort = endInsertSort - startInsertSort

console.log('Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.')

console.log(diffSortBubble)

console.log(diffInsertSort)