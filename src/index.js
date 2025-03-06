/* 
More on the map method.
It iterates over each element in the array so you don't have to specify the index or length of the array.
It creates a new array with the results by calling a provided function on every element in the calling array.
It does not change the original array. It returns a new array.
It must return something from the callback function. The array will be undefined if the function doesn't return anything.
*/
//Doom video example
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5},
    { item: 'shotgun shells', quantity: 4, priceEa: 1.0},
    { item: 'rockets', quantity: 1, priceEa: 5.0},
    { item: 'energy cell', quantity: 20, priceEa: 0.2},
]

function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const totalValue = backpackFullOfAmmo.map((ammo) => {
    console.log(ammo)

    return calculateOrderCost(ammo)
    /* 
    if this isn't here it will return undefined in the array
    we can control what we want to return within the map method
    we can create an array saying hi or in this case we are returning the quantity times the price.
    */
    
})

console.log(totalValue)