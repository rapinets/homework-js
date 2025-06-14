'use strict'

const TASKS_KEY = 'myTasks'

function getTasks() {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || []
}

function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
}

function renderTasks() {
  const list = document.getElementById('task-list')
  list.innerHTML = ''
  const tasks = getTasks()
  tasks.forEach(task => {
    const li = document.createElement('li')
    li.textContent = task;
    list.appendChild(li)
  });
}

function addTask() {
  const input = document.getElementById('task-input')
  const task = input.value.trim()
  if (task) {
    const tasks = getTasks()
    tasks.push(task)
    saveTasks(tasks)
    input.value = ''
    renderTasks()
  }
}

function askRandomTask() {
  const tasks = getTasks()
  if (tasks.length === 0) return

  const index = Math.floor(Math.random() * tasks.length)
  const task = tasks[index]

  const confirmed = confirm(`Do the job: "${task}"?\n(Click OK, if done - the case will disappear)`)

  if (confirmed) {
    tasks.splice(index, 1)
    saveTasks(tasks)
    renderTasks()
  }
}

document.getElementById('task-btn').addEventListener('click', addTask)

setInterval(askRandomTask, 30000)

renderTasks()