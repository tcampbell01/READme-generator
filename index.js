// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");





// TODO: Create an array of questions for user input



   const userInput = () => {

   return inquirer.prompt ([

    {
        type:'input',
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
        name: 'project',
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
        message: 'Would you like to enter usage information?',
        default: true
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Would you like to specify how people can contribute to this project?',
        default: true
    },

    {
        type: 'input',
        name: 'test',
        message: 'Would you like to enter test instructions?',
        default: true

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
    },


   ])

   .then((answers) => {
    console.log(answers)
    fs.writeFile(`READme.md`, JSON.stringify(answers, null, '\t'), (err,data) => {
        if(err) {
            console.log(err);
        }
        console.log("File Created!")
        }
    )
   } )

}

userInput();

 


 