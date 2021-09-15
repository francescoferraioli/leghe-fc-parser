const fs = require('fs')

const game = process.argv[2]

if(!game) {
	console.error("Need to supply a game number")
  return
}

const headers = ["Name", "Role", "Percetage", "Starting", "Team", "H/A", "Versing"]
console.log(headers.join(","))

const games = JSON.parse(fs.readFileSync(`dist/formations/${game}.json`, 'utf8'))

games.forEach(outputGame)

function outputGame(game) {
  const [team1, team2] = Object.keys(game)
  outputTeam(game, team1, team2, "home")
  outputTeam(game, team2, team1, "away")
}

function outputTeam(game, team, opponent, ha) {
  outputLineup(game[team].starting, true, team, opponent, ha)
  outputLineup(game[team].reserves, false, team, opponent, ha)
}

function outputLineup(lineup, starting, team, opponent, ha) {
  lineup.forEach(player => outputPlayer(player, starting, team, opponent, ha))
}

function outputPlayer(player, starting, team, opponent, ha) {
  console.log([ player.name, player.role, player.percentage, starting, team, ha, opponent ].join(","))
}