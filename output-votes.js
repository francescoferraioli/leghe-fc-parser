const fs = require('fs')

const game = process.argv[2]

if(!game) {
	console.error("Need to supply a game number")
  return
}

const headers = [
  "Name",
  "Base",
  "Final",
  "Scored",
  "Penalty (Scored)",
  "Assist",
  "Penalty (Missed)",
  "Own Goal",
  "Yellow",
  "Red",
  "Penalty (Saved)",
  "Goals (Against)"
]

console.log(headers.join(","))

const votes = JSON.parse(fs.readFileSync(`votes/${game}.json`, 'utf8'))

votes.forEach(outputVote)

function outputVote(vote) {
  console.log([
    vote.name,
    vote.base,
    vote.final,
    vote.scored,
    vote.penaltyScored,
    vote.assist,
    vote.penaltyMissed,
    vote.ownGoal,
    vote.yellow,
    vote.red,
    vote.penaltySaved,
    vote.goalsAgainst
  ].join(","))
}