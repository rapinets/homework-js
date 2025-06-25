'use strict'

/**
 * Задача 7. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 
 */

const students = [
  {
    name: 'Ivan Popovich',
    course: 1,
    faculty: 'economics'
  },
  {
    name: 'Jack Deniels',
    course: 1,
    faculty: 'mathematics'
  },
  {
    name: 'Ivanka Tramp',
    course: 1,
    faculty: 'mathematics'
  },
  {
    name: 'Johnnie Walker',
    course: 2,
    faculty: 'economics'
  },
  {
    name: 'John Smith',
    course: 2,
    faculty: 'physics'
  },
  {
    name: 'Will Smith',
    course: 3,
    faculty: 'physics'
  },
  {
    name: 'James Bond',
    course: 4,
    faculty: 'physics'
  },
]

const facultyNum = new Set(students.map(student => student.faculty)).size

const resMap = new Map()
for (const student of students) {
  const course = student.course
  if (resMap.has(course)) resMap.set(course, resMap.get(course) + 1)
  else resMap.set(course, 1)
}

function render() {
  const container = document.getElementById('output')
  const listStudents = document.createElement('ul')
  container.append(listStudents)
  for (const item of students) {
    const itemStudent = document.createElement('li')
    itemStudent.textContent = `Name: ${item.name} Course: ${item.course} Faculty of ${item.faculty}`
    listStudents.append(itemStudent)
  }
  const pEl = document.createElement('p')
  pEl.className = 'task__desc'
  pEl.textContent = `Number of different faculties: ${facultyNum}`
  container.append(pEl)
  const listMap = document.createElement('ul')
  container.append(listMap)
  resMap.forEach((value, key) => {
    const itemMap = document.createElement('li')
    itemMap.textContent = `${key} - ${value}`
    listMap.append(itemMap)
  })
}

render()