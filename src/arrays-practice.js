//This is an example for the find method
//Our classic doom players example
const players = [
    {name: 'DoomGuy', frags: 25, deaths: 0},
    {name: 'Slayer', frags: 25, deaths: 1},
    {name: 'Marine', frags: 12, deaths: 15},
    {name: 'Noob', frags: 0, deaths: 25},
  ];
//The find method will return the first player that has more frags than deaths
  const firstPlayerWithMoreFragsThanDeaths = players.find(player => player.frags > player.deaths); //This will go through the array and returns the first thing that matches the condition

  console.log(firstPlayerWithMoreFragsThanDeaths); //Answer is DoomGuy with more frags than deaths


