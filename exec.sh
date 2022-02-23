#!/bin/bash -e

buildkite-agent artifact download "**/coverage*.tar.gz" . --build $BUILDKITE_BUILD_ID
ls -la
