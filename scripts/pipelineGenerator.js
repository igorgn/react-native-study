/* eslint-disable camelcase */
const fs = require('fs');
const yaml = require('yaml');
const env = require('./utils/environment');

const phases = [1,3,5];
function generatePipeline() {
  const steps = [{
    label: 'prebuild',
    command: "source ~/.bash_profile"
  }];
  // if (env.shouldRunIosPlatform()) {
  //   phases.forEach(phase => {
  //     steps.push({
  //       label: `Phase ${phase}`,
  //       command:`source ~/.bash_profile && nvm install && npm install -g jdh && ./scripts/ci_build.sh`,
  //       depends_on: ['prebuild'],
  //       env: `BUILD_PHASE_NUMBER=${phase}`
  //     });
  //   });

  // }
  const pipeline = {
    agents: {
      queue: 'mobile',
    },
    steps,
  };
  console.log(pipeline);
  const doc = new yaml.Document();
  doc.contents = pipeline;
  return String(doc);
}

function savePipeline() {
  const pipeline = generatePipeline();
  fs.writeFileSync('./.buildkite/pipeline.yml', pipeline);
}

savePipeline();
