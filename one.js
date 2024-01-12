const result = +prompt('Введите четное число')
if (isNaN(result)) {
  alert('Упс, кажется, вы ошиблись')
} else {
  if (result % 2 === 0) {
    alert('Число четное')
  } else {
    alert('число нечетное')
  }
}
