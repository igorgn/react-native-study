#!/bin/bash -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install 14

sed -i '' 's|^registry.*|registry=http://ci-cache.internal:8081/repository/npm-wixpress/|' ~/.npmrc

echo "REPO is $REPO and command is $COMM"
FN=$(echo $REPO | awk  -F / '{ print $2 }' | cut -d . -f 1)
echo "Cloning into $FN"
git clone $REPO && cd $FN
git checkout $REV

npm install npm@8
export PATH=$(pwd)/node_modules/.bin:$PATH
#npm install --legacy-peer-deps

echo $COMM
bash -c "$COMM"
