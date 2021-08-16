const fs = require('fs')

const headers = ["Name", "Value"]
console.log(headers.join(","))

const nameProp = "n"
const valueProp = "ci"

const players = JSON.parse(fs.readFileSync('players/data.json', 'utf8'))

players.forEach(outputPlayer)

function outputPlayer(player) {
  console.log([ nameProp, valueProp ].map(i => player[i]).join(","))
}