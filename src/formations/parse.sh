util/start-chrome "https://www.fantacalcio.it/probabili-formazioni-serie-a"
cat src/formations/parse.js | pbcopy
sh -c "read -p 'Open dev tools, paste code and enter. Press enter when done.'"
GIORNATA=$(curl --silent https://www.fantacalcio.it/probabili-formazioni-serie-a | rg ".*SERIE A - (\d+).* giornata.*" -r "\$1")
src/formations/save.sh $GIORNATA
src/formations/copy.sh $GIORNATA