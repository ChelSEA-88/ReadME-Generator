const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");


// array of questions for user
const questions = [ 
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Generate a README.md file"
    },

    {
        type: "input",
        message: "Provide a description of your project.",
        name: "description",
        default: "This applicaation will help you generate a README.md file for your project."

    },

    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {
        type: "input",
        message: "What are the steps to install and execute this application?",
        name: "install",
        default: "In your integrated terminal window, run 'npm install'. Then run 'node index.js'."

    },

    {
        type: "input",
        message: "How to use this application",
        name: "usage",
        default: "Run 'node index.js' then follow and answer the prompted questions."
    },

    {
        type: "input",
        message: "Please enter GitHub user names of the contributors to this project.",
        name: "contributors"

    },

     {
        type: "input",
        message: "How will tests be run?",
        name: "testing",
        default: "Insert your test samples here."

     }

];

// function to write README file


// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName + '.md', data) => { 
        
//         console.log(`${fileName + '.md'} generated!`)
// }

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}


// function to initialize program
function init() {
inquirer.prompt(questions).then(answers => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers))
})
}

// function call to initialize program
init();
