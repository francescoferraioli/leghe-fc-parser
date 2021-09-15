chromium "https://www.fantacalcio.it/probabili-formazioni-serie-a"
cat src/formations/parse.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
src/formations/save.sh $1
src/formations/copy.sh $1