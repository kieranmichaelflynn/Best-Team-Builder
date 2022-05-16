

function generateCard(employee) {

    let specialAttribute = "";
    let specialIcon = "";

    if (employee.getRole() === 'Manager') {
        specialAttribute = `<li class="list-group-item">Office No: ${employee.getOfficeNumber()}</li>`;
        specialIcon = "📋";
    }
    if (employee.getRole() === 'Engineer') {
        specialAttribute = `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
        specialIcon = "⚙️";

    }
    if (employee.getRole() === 'Intern') {
        specialAttribute = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
        specialIcon = "🎓";

    }

    return `
  <div class="card col-12 col-sm-4 col-lg-3 p-3 m-5">
    
    <div class="card-body">
    <h3 class="card-title">${employee.getName()}</h3>
    <h5 class="card-title">${specialIcon}${employee.getRole()}</h5>
    <p class="card-text">
    <ul class="list-group">
       
        <!-- id -->
        <li class="list-group-item">ID: ${employee.getId()} </li>

        <!-- email -->
        
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>

        <!-- special attr -->
        ${specialAttribute}

        </ul>
    </p>
    </div>
</div>    
    
`;
}



function generateHtml(employees) {
    // employee --- array

    const cards = [];
    // loop thru employees
    for (let index = 0; index < employees.length; index++) {
        const employee = employees[index];

        // for each, generate a card
        const card = generateCard(employee)
        cards.push(card)
    }

    // combine all the cards into a big string
    const joined = cards.join("");

    // return the whole html
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid d-flex bg-primary text-light justify-content-center">
        <h1 class="display-4">My Team</h1>
      </div>
      <div class="row d-flex justify-content-center">  

      ${joined}
      
      </div>
    </div>
    </body>
    </html>`


}

module.exports = generateHtml;