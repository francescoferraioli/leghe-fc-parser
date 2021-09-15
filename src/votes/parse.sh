chromium "https://www.fantacalcio.it/voti-fantacalcio-serie-a/2021-22/$1"
cat src/votes/parse.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
src/votes/save.sh $1
src/votes/copy.sh $1