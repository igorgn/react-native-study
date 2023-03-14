#!/bin/bash -e

generate_allure_report() {
    rm -rf "artifacts/allure-results" && mkdir -p artifacts

    find artifacts -type d -name allure-results -exec cp -r {} artifacts \;

    if [ -d "artifacts/allure-results" ];then
        cd artifacts && allure generate --clean || echo 'allure is not installed..'
fi
}


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
bash generate_allure_report.sh

cd ..

generate_allure_report

