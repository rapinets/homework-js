'use strict'

function onLoad() {
  let colorVal = localStorage.getItem('colorVal')
  let colorCount = localStorage.getItem('colorCount')

  if (!colorVal) {
    colorCount = 0
    colorVal = '#000000'
    localStorage.setItem('colorVal', colorVal)
    localStorage.setItem('colorCount', colorCount)
  } else {
    document.getElementById('change-color').value = localStorage.getItem('colorVal')
    localStorage.setItem('colorCount', colorCount)
  }
}

function onColorChange() {
  const colorVal = document.getElementById('change-color').value
  let colorCount = localStorage.getItem('colorCount')
  localStorage.setItem('colorVal', colorVal)
  colorCount++
  localStorage.setItem('colorCount', colorCount)
}

window.onload = function () {
  onLoad()
  document.getElementById('change-color').addEventListener('input', onColorChange)
}