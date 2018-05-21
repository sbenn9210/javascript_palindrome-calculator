



var button = document.getElementById("button")

var result = document.getElementById("result")

button.addEventListener("click", function() {
  var user_input = document.getElementById("user_input").value
  var reversed_word = ""
  for (var i = user_input.length-1; i >= 0; i--) {
    reversed_word += user_input[i]

  }
  
if (user_input == reversed_word) {
  result.innerHTML = "Palidrome"
}
else {
  result.innerHTML = "Try again!"
}
} )
