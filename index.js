// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");





// TODO: Create an array of questions for user input



const userInput = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.',
            
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter information on how people may contribute to the project.',
            
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions.',
           

        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose your license.',
            choices: [
                'MIT',
                'Apache',
                'Mozilla',
                'Perl',
                'Zlib'

            ]
        }])

    }

    // ToDo: Create a function to write README file

function writeToFile(filename, data) {
    fs.writeFile('./README.md', JSON.stringify(answers, null, '\t'), (err,data) => {
        if(err) {
            console.log(err);
        }
        console.log("File Created!")
        }
    )
};

//ToDo: Create a function to initialize app

async function init () {
    let answers = await userInput ();
    writeToFile((answers.fileName), generateMarkdown(answers));
}

init();





