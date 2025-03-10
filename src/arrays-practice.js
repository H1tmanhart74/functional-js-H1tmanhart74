//Coding Challenge #1
//Using this data we need to figure out how to calculate the total value of the backpack.
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 }, // 5
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 }, // 2
    { item: 'rockets', quantity: 1, priceEa: 5.0 }, // 5
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 }, // 4
  ];
  //In order to find the total we need to go through each item in the array and multiply the quantity by the price.
  //We can use the reduce method to do this.
    const totalValue = backpackFullOfAmmo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.priceEa;
    }, 0);//The accumulator starts at 0, then the current value is multiplied by the quantity and price to get 5,2,5,4. Then the accumulator adds each value to get the total value.
    //The math works like this. 0 + 5 = 5, 5 + 2 = 7, 7 + 5 = 12, 12 + 4 = 16.

    console.log(totalValue); //Total Value is 16