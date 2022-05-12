const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your role?',
    },
    {
      type: 'input',
      name: 'manager',
      message: 'Who is your manager?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ]);
};

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

// Ask questions
// Every team needs to have at least 1 manager
    // Who is the manager
    // What team members are to be added
        // Choose from engineer, manager, intern
    // Repeat until user selected exit



    
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