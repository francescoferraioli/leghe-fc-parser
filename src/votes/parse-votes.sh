chromium "https://www.fantacalcio.it/voti-fantacalcio-serie-a/2021-22/$1"
cat parse-votes.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
./save-votes.sh $1
./copy-votes.sh $1