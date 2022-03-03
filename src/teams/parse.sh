util/start-chrome "https://leghe.fantacalcio.it/ziero-tituli/rose"
cat src/teams/parse.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
src/teams/save.sh
src/teams/copy.sh