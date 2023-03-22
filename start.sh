#!/bin/bash 

bash build.sh
ec=$?
bash allure_report.sh

[[ $ec -ne 0 ]] && exit $ec || exit 0