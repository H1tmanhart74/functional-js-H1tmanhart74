//This is an example for the some method
//Our classic doom players example
const players = [
    {name: 'DoomGuy', frags: 25, deaths: 0},
    {name: 'Slayer', frags: 25, deaths: 1},
    {name: 'Marine', frags: 12, deaths: 15},
    {name: 'Noob', frags: 0, deaths: 25},
  ];
//The some method will return a boolean value if it passes the condition
//In this case we are checking if there are any frags
const hasFrags = players.some((player) => player.frags);

console.log(hasFrags); //Since there are frags it is true