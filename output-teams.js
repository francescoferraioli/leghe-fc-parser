const fs = require('fs')

const headers = ["Name", "Team (FC)", "Position", "Team"]
console.log(headers.join(","))

const teams = JSON.parse(fs.readFileSync(`teams/all.json`, 'utf8'))

teams.forEach(outputTeam)

function outputTeam(team) {
  outputPlayers(team.name, team.players)
}

function outputPlayers(team, players) {
  players.forEach(player => outputPlayer(player, team))
}

function outputPlayer(player, team) {
  console.log([ player.name, team, player.role, player.team ].join(","))
}