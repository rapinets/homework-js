'use strict'

const arr = ['qwerty', '12asd34', 'zxc4567', '890uiop', 'tgbnhy', 'kl78fv', 'wadrtg', '3klodes', 'opendo', 'mnbvc1']

const str = '123 qwerty 456 uiop789'

const taskStr = 'Задача 7. Дано рядок тексту? Знайти усі знаки пунктуації, які були використано! (10.06.2025) "Задача 7". Дано рядок тексту: Знайти усі знаки пунктуації; які були використано. «4142-3433-2323-3434»'

const siteStr = 'https://info-block.gov/news'

const taskStr13 = '2023 aaaaa sssss 2019 ddd 2020 ffff 2021 2022 ggg 2030 hh 2039'

const telStr = '+380992265742'

const fullnameStr = 'Vasyl Rapynets'

const strDate = '06.10.2025'

const dayInput = 'sun'

/**
 * Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
 */

function isNumInStr(arr) {
  let res = []
  const exp = /\d/
  for (const el of arr) {
    if (exp.test(el)) res.push(el)
  }
  console.log(res.join('; '))
}

console.log('Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).')
isNumInStr(arr)
console.log('==============================================================================')

/**
 * Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
 */

function isNotNumInStr(arr) {
  let res = []
  const exp = /\d/
  for (const el of arr) {
    if (!exp.test(el)) res.push(el)
  }
  console.log(res.join('; '))
}

console.log('Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.')
isNotNumInStr(arr)
console.log('==============================================================================')

/**
 * Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
 */

function isVowels(arr) {
  let res = []
  const exp = /[AEIOUY]/i
  for (const el of arr) {
    if (exp.test(el)) res.push(el)
  }
  console.log(res.join('; '))
}

console.log('Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.')
isVowels(arr)
console.log('==============================================================================')

/**
 * Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
 */

function isNotVowels(arr) {
  let res = []
  const exp = /[AEIOUY]/i
  for (const el of arr) {
    if (!exp.test(el)) res.push(el)
  }
  console.log(res.join('; '))
}

console.log('Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.')
isNotVowels(arr)
console.log('==============================================================================')

/**
 * Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
 */

function searchNum_1Or_3(arr) {
  const res = []
  const exp = /(1|3)/g
  for (const el of arr) {
    if (exp.test(el)) res.push(el)
  }
  console.log(res.join('; '))
}

console.log('Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.')
searchNum_1Or_3(arr)
console.log('=============================================================')

/**
 * Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
 */

function getNumber(str) {
  return str.match(/\d/g)
}

console.log('Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.')
console.log(getNumber(str))
console.log('===================================================================')

/**
 * Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
 */

function punctuationMarks(str) {
  return str.match(/[.,;:-?!"'()«»]/g)
}

console.log('Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.')
console.log(punctuationMarks(taskStr))
console.log('==========================================================================')

/**
 * Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
 */

function outputComponentsOfStr(str) {
  return str.split(/[.,!?;:\-()\"\']+/).filter(part => part.trim() !== '');
}

console.log('Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.')
console.log(outputComponentsOfStr(taskStr))
console.log('===================================================================')

/**
 * Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
 */

function checkFormatOfDate(str) {
  const exp = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})/
  let msg = ''
  exp.test(str) ? msg = 'Yes, contains a date string in the format dd.mm.yyyy' : msg = 'Does not contain a date string in the format dd.mm.yyyy'
  return msg
}

console.log('Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).')
console.log(checkFormatOfDate(taskStr))
console.log('===============================================================================')

/**
 * Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
 */

function countNumber(str) {
  const exp = /\b\d{2}\b/g
  const num = str.match(exp)
  console.log(num.length)
}

console.log('Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.')
countNumber(taskStr)
console.log('=========================================================================')

/**
 * Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
 */

function searchCardNumber(str) {
  const exp = /\b(?:\d{4}[-.\s]?){4}\b/g
  return str.match(exp)
}

console.log('Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.')
console.log(searchCardNumber(taskStr))
console.log('=================================================================================')

/**
 * Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
 */

function siteDefinition(str) {
  const exp = /^https?:\/\/.*\.gov\b.*/g
  if (exp.test(str)) {
    console.log('The website address is government-issued.')
  } else {
    console.log('The website address is not government-issued.')
  }
}

console.log('Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)')
siteDefinition(siteStr)
console.log('======================================================================')

/**
 * Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
 */

function getAllYearsAfter_2021(str) {
  const exp = /(202[2-9])|(20[3-9]\d)/g
  console.log(str.match(exp))
}

console.log('Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення')
getAllYearsAfter_2021(taskStr13)
console.log('=============================================================')

/**
 * Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
 */

function isValidTel(str) {
  const exp = /^\+38\d{10}/
  console.log(exp.test(str))
}

console.log('Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)')
isValidTel(telStr)
console.log('==============================================================================')

/**
 * Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.
 */

function replaceSpace(str) {
  const exp = /(?<=\w+)(\s+)(?=\w+)/
  return str.replace(exp, '-').trim()
}

console.log('Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.')
console.log(replaceSpace(fullnameStr))
console.log('=======================================================================')

/**
 * Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
 */

function replaceDotInDate(str) {
  const exp = /(?<=\d+)(\.)(?=\d+)/g
  return str.replace(exp, '\/')
}

console.log('Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»')
console.log(replaceDotInDate(strDate))
console.log('=========================================================================')

/**
 * Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
 */

function getRestDay(str) {
  const exp = /0|6|sun|sat/
  if (exp.test(str)) {
    console.log('Today is a day off.')
  } else {
    console.log('Today is a working day.')
  }
}

console.log('Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним')
getRestDay(dayInput)
