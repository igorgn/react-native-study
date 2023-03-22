#!/bin/bash -e

if [ -d "artifacts/allure-results" ];then
    cd artifacts && allure generate --clean || echo 'allure is not installed..'
    tar -zcf allure-$BUILDKITE_PIPELINE_SLUG-$BUILDKITE_BUILD_NUMBER.tgz allure-report

    #Upload artifact
    ARTIFACT_ID=$(buildkite-agent artifact upload --job $BUILDKITE_JOB_ID --agent-access-token $BUILDKITE_AGENT_ACCESS_TOKEN allure-$BUILDKITE_PIPELINE_SLUG-$BUILDKITE_BUILD_NUMBER.tgz 2>&1 | grep -o "Uploading artifact.*" | cut -d' ' -f3)
    buildkite-agent meta-data set "allure_report_download_link" "https://buildkite.com/organizations/$BUILDKITE_ORGANIZATION_SLUG/pipelines/$BUILDKITE_PIPELINE_SLUG/builds/$BUILDKITE_BUILD_NUMBER/jobs/$BUILDKITE_JOB_ID/artifacts/$ARTIFACT_ID"

    echo "https://buildkite.com/organizations/$BUILDKITE_ORGANIZATION_SLUG/pipelines/$BUILDKITE_PIPELINE_SLUG/builds/$BUILDKITE_BUILD_NUMBER/jobs/$BUILDKITE_JOB_ID/artifacts/$ARTIFACT_ID"
fi
