const ACCEPTED_ROLE = ["P", "D", "C", "A"]

copyToClipboard(
  JSON.stringify(
    Array.from($(".team-list > div table > tbody > tr")).map(parseVote).filter(x => x !== undefined),
    undefined,
    2
  )
)

function getTextContent(context, selector) {
  return $(selector, context)[0].textContent
}

function getSelectorForVoteColumn(number) {
  return `td:nth-child(${number})`
}

function getVoteAtColumn(vote, number) {
  return getTextContent(vote, getSelectorForVoteColumn(number)).replace(",", ".")
}

function parseVote(vote) {
  const role = getTextContent(vote, "span.role")
  if(!ACCEPTED_ROLE.includes(role)) {
    return undefined
  }

  return {
    name: getTextContent(vote, "span.player-name"), 
    base: getVoteAtColumn(vote, 2),
    final: getVoteAtColumn(vote, 3),
    scored: getVoteAtColumn(vote, 8),
    penaltyScored: getVoteAtColumn(vote, 9),
    assist: getVoteAtColumn(vote, 14),
    penaltyMissed: getVoteAtColumn(vote, 12),
    ownGoal: getVoteAtColumn(vote, 13),
    yellow: $(`${getSelectorForVoteColumn(2)} > span.trn-ry`, vote)[0] !== undefined,
    red:  $(`${getSelectorForVoteColumn(2)} > span.trn-rr`, vote)[0] !== undefined,
    penaltySaved: getVoteAtColumn(vote, 11),
    goalsAgainst: getVoteAtColumn(vote, 10),
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