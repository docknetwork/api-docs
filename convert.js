const converter = require('widdershins');
const fs = require('fs');

const sourceFile = './openapi/openapi.json';
const sourceObj = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

let options = {
  language_tabs: [{ 'shell': 'cURL' }, { 'javascript': 'JavaScript' }, { 'python': 'Python' }, { 'php': 'PHP' }, { 'go': 'Go' }],
  title: 'Dock API',
  theme: 'darkula',
  toc_footers: {
    apiKey: {
      url: 'https://console.api.dock.io/',
      description: 'Sign up for an API Key'
    }
  }
};

options.codeSamples = true;
options.tocSummary = true;
options.expandBody = true;
options.verbose = true;
options.search = true;
options.sample = true;
options.discovery = true;
options.resolve = true;
options.source = sourceFile;

converter.convert(sourceObj, options)
  .then(str => {
    fs.writeFileSync('source/index.html.md', str);
  })
  .catch(err => {
    console.error(err);
  });
