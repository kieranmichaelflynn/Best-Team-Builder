const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generate-html');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


let employees = [];

function prompt() {

    return inquirer.prompt([
        {
        type: 'list',
        name: 'role',
        message: 'Who do you want to add?',
        choices: ["Manager", "Engineer", "Intern"],
        },
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        when: (answers) => answers.role === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            when: (answers) => answers.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "What is your school?",
            when: (answers) => answers.role === "Intern",
        },
        {
            type: "confirm",
            name: "addAgain",
            message: "Would you like to add a new member?",
        }
    ]).then((answers) => {
    
        // create new employee
        if(answers.role === 'Manager'){
            employees.push(
                new Manager(
                    answers.name, 
                    answers.id, 
                    answers.email, 
                    answers.officeNumber
                )
            );
        }

        if (answers.role === "Engineer") {
            employees.push(
                new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
            );
        }
    
        if (answers.role === "Intern") {
            employees.push(
                new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school
                )
            );
        }

        if(answers.addAgain){
            return prompt();
        }else{
            // generate html based on the members added
            const html = generateHtml(employees);
            const outputPath = path.join(__dirname, 'dist', 'index.html')

            fs.writeFileSync(outputPath, html, 'utf-8');

            process.exit(0);
        }
    });
}

prompt();

// const generateHTML = ({ name, role, manager, linkedin }) =>

// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid d-flex bg-danger text-light justify-content-center">
//     <h1 class="display-4">My Team</h1>
//   </div>


// </div> 
// </body>
// </html>`;

// Bonus using writeFileSync as a promise
// const init = () => {
//     const outputPath = path.join(__dirname, 'dist', 'index.html')
//     promptUser()

//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync(outputPath, generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();
    
// - Manual testing
    // User trawls through code to manually debug and find + fix errors
    
// - Automated testing
    // Developer will write the code to automate the test


        

// Testing
    // Unit
        // - If every individual unit in an app is working, the app should work fine
    // Feature
        // - If the main feature of the app works, everything should be working fine
    // End to End
        // Testing the functions triggered by a function. I.E programming a bot to click a button to prove functionality