#!/bin/bash

./build.sh
export ec=$?
./allure_report.sh

echo "exit code: $ec"
[[ $ec -ne 0 ]] && exit $ec || exit 0
