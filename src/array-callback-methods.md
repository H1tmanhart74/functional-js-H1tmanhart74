# Explore Array Callback Methods

### The Filter method
```
//Filter method iterating over names
const names = ["John", "Jonathan", "Alex", "Thomas", "Finn"];

const filter = names.filter((word) => word.length > 4);
//This line of code will find names longer than four letters
console.log(filter);
```
This is demo code for the filter method.

### What is the Filter method?
The filter method, similar to the map method, iterates over an array to construct a new array of values using the callback function. Where the filter method and the map method differ is when it is used in creating new pieces of information. The filter method is used to return truthy values. This means if elements in the original array have to meet the criteria given by the callback method. So, only elements that have returned true by the callback method will be displayed in the new array. The new array will only store the elements that return true.