//Find the players with more frags than deaths and display them
const players = [
  {name: 'DoomGuy', frags: 25, deaths: 0},
  {name: 'Slayer', frags: 25, deaths: 1},
  {name: 'Marine', frags: 12, deaths: 15},
  {name: 'Noob', frags: 0, deaths: 25},
]

const playersWithMoreFragsThanDeaths = players.filter((player) => {
  console.log(`We are now looking at this player: ${player.name}`) //This is a fancy way of telling you that its iterating through each player
  return player.frags > player.deaths
})

console.log(playersWithMoreFragsThanDeaths)

//OR
//This is a shortened version of the code above
const playersWithMoreFragsThanDeathsTwo = players.filter((player) => player.frags > player.deaths)// This skips the "we are now looking at this player" part and just tells you the players
console.log(playersWithMoreFragsThanDeathsTwo)