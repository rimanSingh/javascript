let number = 20
let number2 = 30

document.getElementById("num1").textContent = number
document.getElementById("num2").textContent = number2

let sumEl = document.getElementById("sum")

function add() {
    let result = number + number2
    sumEl.textContent = "Sum: " + result
}
function sub() {
    let result = number - number2
    sumEl.textContent = "Sub: " + result
}
function div() {
    let result = number / number2
    sumEl.textContent = "Div: " + result
}
function mul() {
    let result = number * number2
    sumEl.textContent = "Mul: " + result
}