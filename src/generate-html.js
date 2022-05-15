

function generateCard(employee){

  let specialAttribute = "";

  if(employee.getRole() === 'Manager'){
      specialAttribute = `<li>Office No: ${employee.getOfficeNumber()}</li>`;
  }
  if(employee.getRole() === 'Engineer'){
      specialAttribute = `<li>GitHub: ${employee.getGithub()}</li>`;
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
        <li>Email: ${employee.getEmail() } </li>

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

    // read template.html

    // replace {{ body }} with joined

    // return the whole html


}

module.exports = generateHtml;