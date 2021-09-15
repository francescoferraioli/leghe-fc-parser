chromium "https://www.fantacalcio.it/probabili-formazioni-serie-a"
cat parse-formations.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
./save-formations.sh $1
./copy-formations.sh $1