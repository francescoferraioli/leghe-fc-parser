copyToClipboard(
  JSON.stringify(
    Array.from($(".current-competition-team")).map(parseTeam),
    undefined,
    2
  )
)

function parseTeam(team) {
  return {
    name: $(".team-header h4", team)[0].textContent,
    coach: $(".team-header h5", team)[0].textContent,
    players: Array.from($("table > tbody > tr:not(.no-results)", team)).map(parsePlayer)
  }

}

function parsePlayer(player) {
  return {
    role: $("td[data-key=role]", player)[0].textContent,
    name: $("td[data-key=name]", player)[0].textContent,
    team: $("td[data-key=team].hidden-xs", player)[0].textContent
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