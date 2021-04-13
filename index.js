const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const yaml = require('js-yaml');
const fs = require('fs');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Alphonse', { horizontalLayout: 'full' })
  ));
console.log(chalk.green('Version 0.0.1 - Author: Adrián Bustos'));


let configuration;

// const run = async () => {
//   const configuration = await inquirer.askGeneratorOptions();
//   console.log(credentials);
// };

// run();

let openapi = new Map();

try {
  const doc = yaml.load(fs.readFileSync('openapi.yml', 'utf8'));
  openapi['version'] = doc.info.version;
  openapi['title'] = doc.info.title;
  openapi['servers'] = doc.servers;
  openapi['endpoints'] = doc.paths;
  openapi['components'] = doc.components;
} catch (e) {
  console.log(e);
}

const endpoints = []
for (const endpoint in openapi['endpoints']) {
  // console.log(endpoint);
  endpoints.push(endpoint);
}

// openapi['paths'].forEach(element => {
//   console.log(logMapElements);
// });
// let array = ['asdf','qwerqwe','asdfasdf'];
// debugger
const run2 = async () => {
const configuration2 = await inquirer.askEndpoints(endpoints);
console.log(configuration2);
};

 run2();