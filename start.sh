#!/bin/bash -e

echo $BUILDKITE_AGENT_ACCESS_TOKEN > ~/token
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install 14

sed -i '' 's|^registry.*|registry=http://ci-cache.internal:8081/repository/npm-wixpress/|' ~/.npmrc

echo "REPO is $REPO and command is $COMM"
FN=$(echo $REPO | awk  -F / '{ print $2 }' | cut -d . -f 1)
echo "Cloning into $FN"
git clone $REPO 
cd $FN
git checkout $REV

npm install npm@8
export PATH=$(pwd)/node_modules/.bin:$PATH
#npm install --legacy-peer-deps

echo $COMM
bash -c "$COMM"

cd ..

rm -rf "artifacts/allure-results" && mkdir -p artifacts

find $FN -type d -name allure-results -exec cp -r {} artifacts \;

if [ -d "artifacts/allure-results" ];then
    cd artifacts && allure generate --clean || echo 'allure is not installed..'
    tar -zcf allure-$BUILDKITE_PIPELINE_SLUG-$BUILDKITE_BUILD_NUMBER.tgz allure-report
fi

