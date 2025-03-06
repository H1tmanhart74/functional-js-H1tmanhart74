/* 
These are callback functions.
A callback function is a function that is passed as an argument to another function to be executed later.
*/
function numberStuff (number, callbackFunction) {
  return callbackFunction(number)
}

function divideByTwo(num) {
  return num / 2
}

function double(num) {
  return num * 2
}

function triple(num) {
  return num * 3
}
console.log(numberStuff(8, divideByTwo))
console.log(numberStuff(8, double))
console.log(numberStuff(8, triple))
