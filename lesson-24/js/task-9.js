'use strict'

/**
 * Задача 9 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з 
 * гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
 */

const mathematicsClub = ['Popovich', 'Deniels', 'Tramp', 'Walker', 'Smith', 'Bond']
const historyClub = ['Popovich', 'Deniels', 'Tramp', 'Parker', 'Dep', 'Stark']

let students1 = new Set(mathematicsClub)
let students2 = new Set(historyClub)

const intersection = students2.intersection(students1).size

const union = students1.union(students2).size

function render() {
  const container = document.getElementById('output')
  const pEl1 = document.createElement('p')
  pEl1.className = 'task__desc'
  pEl1.textContent = `${intersection} students from the history group also attend the mathematics group`
  container.append(pEl1)
  const pEl2 = document.createElement('p')
  pEl2.className = 'task__desk'
  pEl2.textContent = `${union} students attend at least one club`
  container.append(pEl2)
}

render()