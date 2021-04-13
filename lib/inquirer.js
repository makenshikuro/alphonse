const inquirer = require('inquirer');

module.exports = {
    askGeneratorOptions: () => {
        const questions = [
            {
                name: 'language',
                message: 'language:',
                type: 'list',
                choices: ['Java', 'Javascript'],
                default: 'Java'
            },
            {
                name: 'file',
                message: 'OpenApi:',
                type: 'input',
                default: 'src/main/resources/application.yml',
                when: (answers) => answers.language === 'Java'
            },
            {
                name: 'file',
                message: 'OpenApi:',
                type: 'input',
                default: 'src/main/resources/application.yml',
                when: (answers) => answers.language === 'Javascript'
            }
        ];
        return inquirer.prompt(questions);
    },
};

module.exports = {
    askEndpoints: (enpoints) => {
        const questions = [
            {
                name: 'language',
                message: 'language:',
                type: 'checkbox',
                choices: enpoints 
            }
        ];
        return inquirer.prompt(questions);
    },
};