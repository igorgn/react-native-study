#!/bin/bash -e

buildkite-agent artifact download "**/*.txt" . --build $BUILDKITE_BUILD_ID
ls -la
