const games = Array.from($(".match-list").childNodes).map(parseGame)

copyToClipboard(JSON.stringify(games, undefined, 2))

function parseGame(game) {
	const [home, away] = game.id.split("-")
	return {
		[home]: parseTeam(game, "home"),
		[away]: parseTeam(game, "away"),
	}
}

function parseTeam(game, homeOrAway) {
  return {
    starting: parseLineup($(`#${game.id} > .lineups > .${homeOrAway}`)),
    reserves: parseLineup($(`#${game.id} > .lineups.reserves > .${homeOrAway}`)),
    homeOrAway
  }
}

function parseLineup(lineup) {
	return Array.from(lineup.childNodes).map(parsePlayer)
}

function parsePlayer(player) {
	return {
    role: $(".player-role", player).textContent,
    name: $(".player-name", player).textContent,
    percentage: $(".player-percentage-value", player).textContent
  }
}

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};