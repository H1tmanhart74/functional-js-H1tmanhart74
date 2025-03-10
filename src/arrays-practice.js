//This is an example for the every method
//Our classic doom players example
const players = [
    {name: 'DoomGuy', frags: 25, deaths: 0},
    {name: 'Slayer', frags: 25, deaths: 1},
    {name: 'Marine', frags: 12, deaths: 15},
    {name: 'Noob', frags: 0, deaths: 25},
  ];
//The every method tests whether all elements in the array are true
const allPlayersHaveMoreFragsThanDeaths = players.every(player => player.frags > player.deaths);

console.log(allPlayersHaveMoreFragsThanDeaths); //Since not all players have more frags than deaths it is false