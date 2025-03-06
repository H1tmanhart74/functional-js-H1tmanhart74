/* 
Quick description of the map method.
The map method only works on arrays. It uses the callback function to make each element inside the first array into a new element in a second array. The map method does not change the original array.
*/

//Without map method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = []

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); 

//With map method
const moreNumbers = [1, 2, 3, 4, 5];
const doubledMoreNumbers = moreNumbers.map(number => number * 2);
//The map method makes it easier to write code and is more readable
console.log(doubledMoreNumbers);