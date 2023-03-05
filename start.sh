#!/bin/bash -e

echo "REPO is $REPO and command is $COMM"
FN=$(echo $REPO | awk  -F / '{ print $2 }' | cut -d . -f 1)
echo "Cloning into $FN"
git clone $REPO
git checkout $REV
cd $FN

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
sed -i '' 's|^registry.*|registry=http://ci-cache.internal:8081/repository/npm-wixpress/|' ~/.npmrc
nvm install
npm install npm@8
npm install --legacy-peer-deps

$COMM
