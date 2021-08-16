const fs = require('fs')

const headers = ["Full Name", "Name", "Postion", "Goals", "Assists"]
console.log(headers.join(","))

const fullNameIndex = "2"
const nameIndex = "16"
const position = "86"
const goalsIndex = "20"
const assistsIndex = "21"

const players = JSON.parse(fs.readFileSync('players/stats.json', 'utf8'))

players.forEach(outputPlayer)

function outputPlayer(player) {
  console.log([ fullNameIndex, nameIndex, position, goalsIndex, assistsIndex ].map(i => player[i]).join(","))
}