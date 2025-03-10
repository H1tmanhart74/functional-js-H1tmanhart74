//This is an example for the reduce method
//Our classic doom players example
const players = [
    {name: 'DoomGuy', frags: 25, deaths: 0},
    {name: 'Slayer', frags: 25, deaths: 1},
    {name: 'Marine', frags: 12, deaths: 15},
    {name: 'Noob', frags: 0, deaths: 25},
  ];
//The reduce method is used to calculate a single value from frags of all players or the total number of frags
  const totalFrags = players.reduce((total, players) => {
    return total + players.frags; //This goes through each player and adds the frags to the total
  }, 0); //This is the starting value of the total

console.log(totalFrags);

//This is a shortened version of the code above using an implicit return
const totalFragsTwo = players.reduce((total, player) => total + player.frags, 0)

console.log(totalFragsTwo)


