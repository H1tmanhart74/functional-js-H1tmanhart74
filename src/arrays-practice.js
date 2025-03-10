//This is an example for the sort method
//Our classic doom players example
const players = [
    {name: 'DoomGuy', frags: 25, deaths: 0},
    {name: 'Slayer', frags: 25, deaths: 1},
    {name: 'Marine', frags: 12, deaths: 15},
    {name: 'Noob', frags: 0, deaths: 25},
  ];
//The sort method is used to sort the elements of an array. In this case it will sort the players by the number of frags they have.
const sortedPlayers = players.sort((a, b) => b.frags - a.frags); //It also uses a minus instead of a plus to sort in descending order

console.log(sortedPlayers); //This will show the sort of every frag in descending order