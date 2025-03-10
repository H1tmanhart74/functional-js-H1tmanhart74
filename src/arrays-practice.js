//Coding Challenge 2
const monsters = [
    // Deals 10-60 damage per bite
    { name: 'Cacodemon', health: 400, damage: 35 },
    
    // Deals 15-75 damage per claw/fireball
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    
    // Deals 20-200 damage per rocket
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    
    // Deals 5-50 damage per bite
    { name: 'Hell Knight', health: 800, damage: 25 },
    
    // Deals 10-100 damage per bite
    { name: 'Imp', health: 200, damage: 20 },
    
    // Deals 5-25 damage per bite
    { name: 'Lost Soul', health: 100, damage: 10 },
    
    // Deals 5-50 damage per bite
    { name: 'Pinky', health: 300, damage: 15 },
    
    // Deals 10-100 damage per bite
    { name: 'Revenant', health: 500, damage: 30 },
    
    // Deals 5-50 damage per bite
    { name: 'Spectre', health: 200, damage: 20 },
    
    // Deals 5-50 damage per bite
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    
    // Deals 5-50 damage per bite
    { name: 'Vile', health: 1000, damage: 40 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombie', health: 100, damage: 5 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombieman', health: 200, damage: 10 },
  ];

//My tasks are to use the map method to create a new array containing only the names of the monsters
const monsterNames = monsters.map(monster => monster.name)
console.log(monsterNames)
//The map method will take each monsters name and put it into a new array called monsterNames that will then display the names of the monsters. They do this by going through each monster and taking the name and adding it to the new array.

//My next task is to use the filter method to find all the monsters with health greater than 150
const highHealthMonsters = monsters.filter(monster => monster.health > 150)
console.log(highHealthMonsters)
//The filter method iterates through and finds all the monsters that will have a health greater than 150 and will display them. It does this by going through each monster and checking if the health is greater than 150 then it takes that monster and adds it too a new array called highHealthMonsters.

//My next task is to use the reduce method to find the total health of all the monsters
const totalMonsterHealth = monsters.reduce((total, monster) => total + monster.health, 0)
console.log(totalMonsterHealth)
//The reduce method will take the total health of all the monsters and add them together to get the total health and display it. It does this using the total or the accumulator, starting it at 0, and adding the monster health so it displays properly and not display the last monsters health.

//My next task is to use the sort method to sort the monsters from highest damage to lowest damage
const highDamageMonsters = monsters.sort((a, b) => b.damage - a.damage)
console.log(highDamageMonsters)
//The sort method will go through every monster and sort them from highest damage to lowest damage and display them. They do this by taking the damage of monster b and comparing it to the damage of monster a and then sorting them in ascending order.