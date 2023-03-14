#!/bin/bash -e

# buildkite-agent artifact download "**/coverage*.tar.gz" . --build $BUILDKITE_BUILD_ID
# find . -name "coverage*.tar.gz" -exec tar -xf {} \;
# ls -la

f() {
    echo abc
}

f