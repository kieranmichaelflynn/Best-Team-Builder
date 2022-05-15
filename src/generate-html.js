

function generateCard(employee){

  let specialAttribute = "";

  if(employee.getRole() === 'Manager'){
      specialAttribute = `<li>Office No: ${employee.getOfficeNumber()}</li>`;
  }
  if(employee.getRole() === 'Engineer'){
      specialAttribute = `<li>GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
  }
  if(employee.getRole() === 'Intern'){
      specialAttribute = `<li>School: ${employee.getSchool()}</li>`;
  }

  return `
<div class="card col-4">
    
    <div class="card-body">
    <h4 class="card-title">${ employee.getName() } </h4>
    <p class="card-text">
        <ul>

        <!-- id -->
        <li>ID: ${ employee.getId() } </li>

        <!-- role -->
        <li>Role: ${employee.getRole()} </li>

        <!-- email -->
        
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail() } </a></li>

        <!-- special attr -->
        ${ specialAttribute }

        </ul>
    </p>
    </div>
</div>    
    
`;
}



function generateHtml(employees){
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
      <div class="jumbotron jumbotron-fluid d-flex bg-danger text-light justify-content-center">
        <h1 class="display-4">My Team</h1>
      </div>
    
        ${joined}
    
    </div> 
    </body>
    </html>`


}

module.exports = generateHtml;