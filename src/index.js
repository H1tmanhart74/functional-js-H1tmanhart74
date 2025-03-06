//JavaScript with some HTML

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(((number) => `<li>${number * 2}</li>`
));

console.log(doubledNumbers);

//Video example of JavaScript with some HTML

const backpackFullOfAmmo = [
    {name: 'bullets', quantity: 10, price: 0.5},
    {name: 'shotgun shells', quantity: 4, price: 0.5},
    {name: 'rockets', quantity: 1, price: 5.0},
    {name: 'energy cell units', quantity: 5, price: 0.2},
]

const tableRows = backpackFullOfAmmo.map((ammo) => {
    return `
    <tr>
        <td>${ammo.name}</td>
        <td>${ammo.quantity}</td>
        <td>${ammo.price}</td>
    </tr>
    `
})
.join('\n'); //this is a join that will separate each array with a new line (\n)
console.log(tableRows);