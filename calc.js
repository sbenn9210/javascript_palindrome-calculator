
var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var clear = document.getElementById('cleared')
var add = document.getElementById('add')
var subtract = document.getElementById('subtract')
var divide = document.getElementById('divide')
var multiply = document.getElementById('multiply')
var equals = document.getElementById('equals')
var answer = document.getElementById('answer')
var operand = ""
clear.addEventListener('click', function() {
  input1.value = ''
  input2.value = ''
})

add.addEventListener('click', function() {
  operand = "+"
})

subtract.addEventListener('click', function() {
  operand = "-"
})

divide.addEventListener('click', function() {
  operand = "/"
})

multiply.addEventListener('click', function() {
  operand = "*"
})

equals.addEventListener('click', function() {

  if (operand == "+") {
    result = parseInt(input1.value) + parseInt(input2.value)
    answer.innerHTML = result
  } else if (operand == "-") {
      result = parseInt(input1.value) - parseInt(input2.value)
      answer.innerHTML = result
  } else if (operand == "/") {
      result = parseInt(input1.value) / parseInt(input2.value)
      answer.innerHTML = result
  } else if (operand == "*") {
      result = parseInt(input1.value) * parseInt(input2.value)
      answer.innerHTML = result
  }

})
