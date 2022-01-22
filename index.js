// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");


// const generateMarkdown = require("./generateMarkdown.js");

// const createReadMe = util.promisify(writeToFile);
// const generateReadme = require("./generateMarkdown.js")
// const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input



   const promptUser = () => {

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
        name: 'guidelines',
        message: 'Would you like to specify how people can use this project?',
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
    fs.writeFile(`${answers.name}.json`, JSON.stringify(answers, null, '\t'), (err,data) => {
        if(err) {
            console.log(err);
        }
        console.log("File Created!")
        }
    )
   } )

}

promptUser();

 //TODO: Create a function to write README file

 

// create async function with catch for errors
// async function init() {
//   try {
//     const userAnswers = await inquirer.prompt(answers);
//     console.log('Your answers have been accepted ', userAnswers);
//     // get markdown template from generateMarkdown.js passing the answers as parameter
//     const myMarkdown = generateMarkdown(userAnswers);
//     console.log(myMarkdown);
//     //write the readme file after the markdown is made
//     await createReadMe('README1.md', myMarkdown);
    
//   } catch (error) {
//     console.log('oops- something went wrong: ' + error);
//   }
// };


// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
//  init();


