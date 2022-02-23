#!/bin/bash -e

mkdir -p coverage
touch coverage/1.lcov
touch coverage/2.lcov
touch coverage/3.lcov

tar czf coverage_$BUILDKITE_STEP_ID.tar.gz coverage/*.lcov
