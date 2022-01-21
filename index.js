// TODO: Include packages needed for this application

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


const generateReadme = require("./generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input



   inquirer.prompt ([

    {
        type:'input',
        name: 'name',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?'

    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project.'
    },

    {

        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions.'
    },

    {

        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.'
    },

    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter contribution guidelines.'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions.'

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
      console.log(answers);
  })
  
  .catch((error) => {
      if (error.isTtyError) {
         console.log('prompt could not be rendered in this environment')
      } else {
          console.log('Something went wrong')
      }
  }
);

   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
